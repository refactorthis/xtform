xtForm.directive('xtValidationTooltip', function () {
    'use strict';

    return {
        require: ['^xtForm', '^ngModel'],
        restrict: 'EA',
        link: function (scope, element, attrs, ctrls) {

            var xtForm = ctrls[0];
            var ngModel = ctrls[1];

            var ngModelElement;
            var lastErrors;

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
                    trigger: xtForm.tooltipTrigger || 'manual',
                    container: attrs.container || 'body'
                });
            }

            function setupNgModel() {

                // allow for a different tooltip container that is not on the ngModel element
                var ngModelElementId = attrs['for'] || attrs.xtValidationTooltip;
                ngModelElement = ngModelElementId ?
                    angular.element(document.getElementById(ngModelElementId)) :
                    element;

                ngModelElement.addClass('xt-validation-tooltip');

                if (!!ngModelElement.attr('required')) {
                    ngModelElement.attr('aria-required', true);
                }
            }

            function redrawErrors() {

                if (ngModel.$xtErrors.length === 0) {
                    lastErrors = null;
                    element.tooltip('hide');
                    return;
                }

                // hmm reduce adds br to front of string..
                var noOfErrors = attrs.multiple ? ngModel.$xtErrors.length : 1;
                var errors = ngModel.$xtErrors
                    .slice(0, noOfErrors)
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
