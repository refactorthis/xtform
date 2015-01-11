xtForm.directive('ngModel', function (xtFormConfig, $rootScope, $interpolate, $document) {
    'use strict';

    var UNTOUCHED_CLASS = 'ng-untouched',
        TOUCHED_CLASS = 'ng-touched';

    return {
        require: ['ngModel', '^?xtForm', '^?form'],
        link: function (scope, element, attrs, ctrls) {

            var defaultErrors = xtFormConfig.getErrorMessages(),
                ngModel = ctrls[0],
                xtForm = ctrls[1],
                form = ctrls[2],
                setTouchedFn,
                validationStrategyFn;

            /**
             * Active the directive
             */
            function activate() {

                setTouchedFn = ngModel.$setTouched || setTouchedPolyfill;
                validationStrategyFn = xtForm.getValidationStrategy();
                ngModel.$untouched = true;

                // add extensions to ngModel
                var labelEl = $document[0].querySelectorAll('label[for="' + attrs.id + '"]');
                angular.extend(ngModel, {
                    $focused: false,
                    $label: labelEl.length > 0 ? labelEl[0].innerText : '',
                    $xtErrors: []
                });

                // set errors on the ngModel when $error changes
                scope.$watch(function () {
                    return ngModel.$error;
                }, updateErrors, true);

                scope.$on('XtForm.ForceErrorUpdate', updateErrors);

                element
                    .on('focus', function () {
                        if (!ngModel.$touched) {
                            setTouchedFn();
                        }
                        ngModel.$focused = true;
                        updateErrors();
                        scope.$apply();
                    })
                    .on('blur', function () {
                        ngModel.$focused = false;
                        updateErrors();
                        scope.$apply();
                    });
            }

            function getErrorMessageForKey(key) {
                var attrKey = 'msg' + key[0].toUpperCase() + key.substring(1);

                // use either the provided string as an interpolated attribute, or the default message
                return attrs[attrKey] ?
                    attrs[attrKey] :
                    $interpolate(defaultErrors[key])(attrs);
            }

            /**
             * Sets the $xtErrors collection on validation change
             */
            function updateErrors() {
                ngModel.$xtErrors = [];

                angular.forEach(ngModel.$error, function (value, key) {
                    var showErrors = value && validationStrategyFn(form, ngModel);
                    if (showErrors) {
                        var error = {
                            key: key,
                            message: getErrorMessageForKey(key)
                        };

                        // This is a bit of hack right now to ensure that data type validation errors are shown
                        // in priority over the required message if both fail.
                        // TODO will likely need to introduce priorities of error messages
                        if (key === 'required') {
                            ngModel.$xtErrors.push(error);
                        } else {
                            ngModel.$xtErrors.unshift(error);
                        }
                    }


                });

                $rootScope.$broadcast('XtForm.ErrorsUpdated', ngModel);
            }

            // Polyfill for $touched in AngularJS < 1.3
            function setTouchedPolyfill() {
                ngModel.$touched = true;
                ngModel.$untouched = false;
                element.addClass(TOUCHED_CLASS).removeClass(UNTOUCHED_CLASS);
            }

            if (xtForm) {
                activate();
            }
        }
    };
});