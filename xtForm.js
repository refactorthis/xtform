﻿/*
    xtForm
    --------------------------------------------------------------------------
    Creates validators and attaches them to inputs
    Handles client side validation in tooltips
    Allows for custom error message overrides
*/
(function(angular) {

  "use strict";

  function DefaultErrorMessages() {
    this.minlength = 'Needs to be at least {{minlength}} characters long';
    this.maxlength = 'Can be no longer than {{maxlength}} characters long';
    this.required = 'This field is required';
    this.number = 'Must be a number';
    this.min = 'Must be at least {{min}}';
    this.max = 'Must be no greater than {{max}}';
    this.email = 'Invalid Email';
    this.pattern = 'Illegal value';
  }

  function ErrorMessages() {}
  ErrorMessages.prototype = new DefaultErrorMessages();
  ErrorMessages.prototype.constructor = ErrorMessages;

  function InputValidator(scope, element, attrs, ngModel, formCtrl) {

    var self = this, // capture scope,
      prop;

    this.errorMessages = new ErrorMessages();
    this.formCtrl = formCtrl;
    this.scope = scope;
    this.element = element;
    this.ngModel = ngModel;
    this.attrs = attrs;

    var observe = function(prop) {
      var innerProp = prop;
      attrs.$observe(innerProp, function(val) {
        self.errorMessages[innerProp.substring(3, innerProp.length).toLowerCase()] = val;
      });
    };

    for (prop in attrs) {
      if (attrs.hasOwnProperty(prop) && prop.indexOf('msg') === 0) {
        observe(prop);
      }
    }

    this.ngModel.$parsers.unshift(function(value) {
      return value === '' ? null : value;
    });

    // tried viewListeners, parsers, different watches.. seems this is the best
    scope.$watch(function() {
      return ngModel.$error;
    }, function(valid) {
      if (ngModel.$dirty) {
        self.showErrors();
      } else {
        self.resetValidity();
      }
    }, true);
  }

  InputValidator.prototype.setDirty = function(value) {
    this.ngModel.$dirty = value;
    this.ngModel.$pristine = !value;
    this.element
      .toggleClass('ng-dirty', value)
      .toggleClass('ng-pristine', !value);
  };

  InputValidator.prototype.showErrors = function(isSubmit) {

    var ngModel = this.ngModel;
    this.setDirty(true);
    if (!ngModel.$valid) {

      // build error summary
      var errors = "",
        propCount = 0;

      // calculated here as it could be variable
      var bounds = {
        minlength: this.attrs.ngMinlength,
        maxlength: this.attrs.ngMaxlength,
        min: this.attrs.min,
        max: this.attrs.max,
      };
      
      for (var prop in ngModel.$error) {
	    var key = prop.toLowerCase();
	    if (prop != 'required' && ngModel.$error[prop] === true && this.errorMessages[key]) {
		    propCount++;
		    var errString = this.errorMessages[key] + "";
		    for (var bound in bounds) {
			    errString = errString.replace('{{' + bound + '}}', bounds[bound]);
		    }
		    errors += errString + '<br>';
	    }
	  }

      if (propCount === 0 && ngModel.$error.required === true) {
        errors += this.errorMessages.required + '<br>';
      }

      if (ngModel.$error.messages !== undefined) {
        errors += ngModel.$error.messages;
      }

      this.element.addClass('xt-error');

      // if element is select2, set the tooltip to the select2 container instead to the input 
      if (this.element[0].nodeName == 'SELECT' && (
          this.element.attr("ui-select2") !== undefined || this.element.data("ui-select2") !== undefined)) {
          this.element = this.element.prev('.select2-container');
      }

      if (this.tooltipSet === true) {
        this.element.tooltip("destroy");
      }

      // create tooltip
      this.element.tooltip({
        html: true,
        title: errors,
        placement: this.attrs.placement || 'bottom',
        trigger: this.attrs.trigger || 'focus hover',
        container: this.attrs.container || 'body'
      });

      if (this.profile === 'showAll' || !isSubmit) {
        this.element.tooltip('show');
      }

      this.tooltipSet = true;
      
    } else {
      this.resetValidity();
    }
  };

  InputValidator.prototype.resetValidity = function () {
    var that = this;
    setTimeout(function () {
      // remove tooltip if needed
      if (that.tooltipSet) {
        that.ngModel.$error.messages = undefined;
        that.element.removeClass('xt-error');
        that.element.tooltip('destroy');
        that.tooltipSet = false;
        that.scope.$apply();
      }
    });
  };

  angular.module('xtForm', [])
    .directive('xtForm', ['$parse', function($parse) {

      return {
        require: ['form', 'xtForm'],
        controller: [
          "$scope",
          "$element",
          "$attrs",

          function($scope, $element, $attrs) {

            // Holds all validators
            this.validators = {
              _validators: {},
              registerValidator: function(name, validator) {
                validator.profile = $attrs.profile || 'default';
                this._validators[name] = validator;
              },
              deregisterValidator: function(name) {
                this._validators[name].ngModel.$valid = true;
                this._validators[name].showErrors();
                delete this._validators[name];
              },
              hasValidator: function(name) {
                return this._validators[name] !== undefined;
              },
              getValidator: function(name) {
                return this._validators[name];
              },
              resetValidity: function() {
                angular.forEach(this._validators, function(validator) {
                  validator.resetValidity(false);
                });
              },
              showAllErrors: function() {
                angular.forEach(this._validators, function(validator) {
                  validator.showErrors(true);
                });
              }
            };

            this.$element = $element;
          }
        ],
        link: function(scope, element, attrs, ctrl) {

          var control = {
            onSubmit: function () {}
          },
          formCtrl = ctrl[0],
          xtFormCtrl = ctrl[1];

          function submit() {

            formCtrl.$setDirty();

            if (!formCtrl.$valid) {
              xtFormCtrl.validators.showAllErrors();
              control.onSubmit(false);
              return;
            }

            //reset
            xtFormCtrl.validators.resetValidity();

            control.onSubmit(true);
          }

          function validate() {

            formCtrl.$setDirty();

            if (!formCtrl.$valid) {
              xtFormCtrl.validators.showAllErrors();
              return false;
            } else {
              return true;
            }
          }

          function reset() {
            xtFormCtrl.validators.resetValidity();
          }

          // add save functionality to the form control
          // (i got this style from angular-ui. I kind of think it looks like an antipattern but
          // but I can't find a cleaner way of controller/directive comm)
          if (attrs.xtForm) {
            var temp = scope.$eval(attrs.xtForm);
            if (temp !== undefined) {
              control = temp;
              var that = this;
              control.submit = function () {
                submit.apply(that, arguments);
              };
              control.reset = function () {
                reset.apply(that, arguments);
              };
              control.validate = function () {
                validate.apply(that, arguments);
              };
            }
          }

          // wire up default submit of form to save function
          element.on('submit', function(evt) {
            submit();
            evt.preventDefault();
            return false;
          });

          element.on('$destroy', function () {
            xtFormCtrl.$element = null;
            xtFormCtrl.validators = null;
          });
        }
      };
    }])

  .directive('xtValidate', function() {
    return {
      require: ['ngModel', '^form', '^xtForm'],
      priority: 99,
      link: function(scope, element, attrs, ctrls) {
        var ngModel = ctrls[0],
          formCtrl = ctrls[1],
          xtFormCtrl = ctrls[2];

        if (ngModel.$name === undefined) {
          throw new Error('element must have a "name" attribute to use xtValidate');
        }

        if (element.is('select') && attrs.placement === undefined) {
          attrs.placement = 'top';
        }

        var validator = new InputValidator(scope, element, attrs, ngModel, formCtrl);
        xtFormCtrl.validators.registerValidator(attrs.name, validator);
      }
    };
  });

})(window.angular);
