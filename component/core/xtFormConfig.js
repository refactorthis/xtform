xtForm.provider('xtFormConfig', function () {
    'use strict';

    var self = this,
        _errors = {
            minlength: 'Needs to be at least {{ngMinlength}} characters long',
            maxlength: 'Can be no longer than {{ngMaxlength}} characters long',
            required: 'This field is required',
            number: 'Must be a number',
            min: 'Must be at least {{min}}',
            max: 'Must be no greater than {{max}}',
            email: 'Must be a valid E-mail address',
            pattern: 'Illegal value',
            url: 'Must be a valid URL',
            date: 'Must be a valid date',
            datetimelocal: 'Must be a valid date',
            time: 'Must be a valid time',
            week: 'Must be a valid week',
            month: 'Must be a valid month',
            $$server: 'An error has occurred'
        },
        _validationStrategyFn;

    angular.extend(self, {

        $validationStrategies: {
            invalid: function (form) {
                return form.$invalid;
            },
            submitted: function (form) {
                return form.$invalid && form.$submitted;
            },
            dirty: function (form, ngModel) {
                return ngModel.$invalid && ngModel.$dirty;
            },
            dirtyOrSubmitted: function (form, ngModel) {
                return ngModel.$invalid && (form.$submitted || ngModel.$dirty);
            },
            focusedAndDirtyOrSubmitted: function (form, ngModel) {
                return ngModel.$invalid && (ngModel.$focused && (ngModel.$dirty || form.$submitted));
            },
            dirtyAndFocusedOrSubmitted: function (form, ngModel) {
                return ngModel.$invalid && (form.$submitted || (ngModel.$dirty && ngModel.$focused));
            }
        },

        addValidationStrategy: function (name, fn) {
            self.$validationStrategies[name] = fn;
        },

        setDefaultValidationStrategy: function (strategy) {
            if (!self.$validationStrategies[strategy]) {
                throw new Error('Could not find validation strategy by name: ' + strategy);
            }
            _validationStrategyFn = self.$validationStrategies[strategy];
        },

        setErrorMessages: function (errors) {
            angular.extend(_errors, errors);
        }

    });

    this.$get = function () {
        return {
            getErrorMessages: function () {
                return angular.copy(_errors);
            },
            getValidationStrategy: function (name) {
                if (!self.$validationStrategies[name]) {
                    throw new Error('Could not find validation strategy by name: ' + name);
                }
                return self.$validationStrategies[name];
            },
            getDefaultValidationStrategy: function () {
                return _validationStrategyFn;
            }
        };
    };

    self.setDefaultValidationStrategy('dirtyOrSubmitted');
});