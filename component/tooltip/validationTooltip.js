xtForm.directive('xtValidationTooltip', function ($timeout) {
    'use strict';

    return {
        require: ['^xtForm'],
        link: function (scope, element, attrs) {

            var ngModelElement,
                ngModel,
                lastErrors;

            /**
             * Activates the directive
             */
            function activate() {

                setupNgModel();
                setupTooltipElement();

                // Subscribe to "errors updated" event and redraw errors when changed
                scope.$on('XtForm.ErrorsUpdated', function (message, model) {
                    if (model === null || model === ngModel) {
                        redrawErrors();
                    }
                });
            }

            function setupTooltipElement() {

                element.addClass('xt-error-container');

                // default SELECT tooltip placement to top
                if (element[0].nodeName.toUpperCase() === 'SELECT' && !attrs.placement) {
                    attrs.placement = 'top';
                    element.attr('placement', attrs.placement);
                }

                element.tooltip({
                    animation: false,
                    html: true,
                    placement: attrs.placement || 'bottom',
                    trigger: 'manual',
                    container: attrs.container || 'body'
                });
            }

            function setupNgModel() {

                // allow for a different tooltip container that is not on the ngModel element
                var ngModelElementId = attrs.for || attrs.xtValidationTooltip;
                if (ngModelElementId) {
                    ngModelElement = angular.element(document.getElementById(ngModelElementId));
                } else {
                    ngModelElement = element;
                }

                ngModelElement.addClass('xt-validation-tooltip');

                if (!!ngModelElement.attr('required')) {
                    ngModelElement.attr('aria-required', true);
                }

                // TODO This is a HACK to ensure the ngModel controller is created on the element before usage.
                // FIXME this should be removed and replaced with an alternative method
                $timeout(function () {
                    ngModel = ngModelElement.controller('ngModel');
                    if (!ngModel) {
                        throw new Error('Cannot find ngModel element for xtValidationTooltip');
                    }
                });
            }

            function redrawErrors() {

                if (ngModel.$xtErrors.length === 0) {
                    lastErrors = null;
                    element.tooltip('hide');
                    return;
                }

                // hmm reduce adds br to front of string..
                var errors = ngModel.$xtErrors
                    .map(function (value) {
                        return value.message;
                    })
                    .join('<br />');

                // only redraw if needed
                if (errors !== lastErrors) {
                    lastErrors = errors;

                    setTimeout(function () {
                        element
                            .attr('title', errors)
                            .tooltip('fixTitle')
                            .tooltip('show');
                    });
                }
            }

            if (!$ || !angular.isFunction($.fn.tooltip)) {
                throw new Error('xtform requires a jquery tooltip plugin, like bootstrap.js');
            }

            activate();
        }
    };
});