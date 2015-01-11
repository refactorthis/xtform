xtForm.directive('xtValidationSummary', function ($templateCache) {
    'use strict';

    return {
        require: ['^xtForm', '^form'],
        replace: true,
        scope: true,
        template: function (element, attrs) {
            return $templateCache.get(attrs.templateUrl || 'xtForm/summary/validationSummary.html');
        },
        link: function (scope, element, attrs, ctrls) {

            var form = ctrls[1];
            scope.showLabel = (attrs.showLabel === 'true') || angular.isUndefined(attrs.showLabel);

            function redrawErrors() {
                scope.errors = [];
                angular.forEach(form, function (ngModel, ngModelKey) {
                    if (ngModelKey[0] !== '$') {
                        angular.forEach(ngModel.$xtErrors, function (value) {
                            scope.errors.push({
                                key: value.key,
                                label: ngModel.$label,
                                message: value.message
                            });
                        });
                    }
                });

                scope.showErrors = scope.errors.length > 0;
            }

            scope.$on('XtForm.ErrorsUpdated', redrawErrors);
        }
    };
});