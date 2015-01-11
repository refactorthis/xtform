xtForm.directive('xtValidationInline', function ($templateCache) {
    'use strict';

    var _uniqueIdCounter = 0;

    function nextUniqueId() {
        return 'validation_' + _uniqueIdCounter++;
    }

    return {
        require: ['^xtForm'],
        scope: true,
        replace: true,
        template: function (element, attrs) {
            return $templateCache.get(attrs.templateUrl || 'xtForm/inline/validationInline.html');
        },
        link: function (scope, element, attrs) {

            var inputId = attrs.for || attrs.xtValidationInline;
            if (angular.isUndefined(inputId)) {
                throw new Error('The validation input id must be specified eg. for="id"');
            }

            var inputEl = angular.element(document.getElementById(inputId));
            if (inputEl.length === 0) {
                throw new Error('Can not find the input element for the validation directive');
            }

            var ngModel = inputEl.controller('ngModel');

            /**
             * Activates the directive
             */
            function activate() {
                element.addClass('xt-validation-inline');

                // Ensure the validation control has an id
                if (!attrs.id) {
                    attrs.id = nextUniqueId();
                    element.attr('id', attrs.id);
                }

                // Add aria attribute to denote required state
                if (!!inputEl.attr('required')) {
                    inputEl.attr('aria-required', true);
                }

                // Subscribe to "errors updated" event and redraw errors when changed
                scope.$on('XtForm.ErrorsUpdated', function (message, model) {
                    if (model === null || model === ngModel) {
                        redrawErrors();
                    }
                });
            }

            /**
             * Will redraw error spans on the page when required
             */
            function redrawErrors() {
                scope.errors = ngModel.$xtErrors;
                scope.showErrors = scope.errors.length > 0;
                toggleAriaAttributes(scope.showErrors);
            }

            /**
             * Toggle aria attributes to denote validity state
             * @param showErrors true to add error state
             */
            function toggleAriaAttributes(showErrors) {
                if (showErrors) {
                    inputEl
                        .attr('aria-invalid', true)
                        .attr('aria-describedby', attrs.id);
                } else {
                    inputEl.removeAttr('aria-invalid');
                    inputEl.removeAttr('aria-describedby');
                }
            }

            activate();
        }
    };
});