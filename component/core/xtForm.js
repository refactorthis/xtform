xtForm
    .directive('xtForm', function ($timeout) {
        'use strict';

        return {
            require: '',
            priority: -1,
            controller: 'XtFormController',
            controllerAs: 'xtForm',
            link: function (scope, element, attrs, xtForm) {
                element
                    .on('submit', function () {
                        scope.$apply(function () {
                            xtForm.submit();
                        });
                    })
                    .on('reset', function () {
                        $timeout(function () {
                            xtForm.reset();
                        });
                    });
            }
        };
    })
    .controller('XtFormController', function ($scope, $element, $attrs, $rootScope, xtFormConfig, $window) {
        'use strict';

        var vm = this,
            form = $element.controller('form'),
            validationStrategy = $attrs.strategy ?
                xtFormConfig.getValidationStrategy($attrs.strategy) :
                xtFormConfig.getDefaultValidationStrategy();

        angular.extend(vm, {

            form: form,

            getValidationStrategy: function () {
                return validationStrategy;
            },

            submit: function () {
                vm.form.$setSubmitted();

                // focus first error if required
                if (form.$invalid && $attrs.focusError) {
                    $window.setTimeout(function () {
                        $element.find('.ng-invalid:input:visible:first').focus();
                    });
                } else {
                    $rootScope.$broadcast('XtForm.ForceErrorUpdate', null, 'submit');
                }
            },

            reset: function () {
                vm.form.$setPristine();
                vm.form.$setUntouched();
                $rootScope.$broadcast('XtForm.ForceErrorUpdate', null, 'reset');
            }

        });

    });