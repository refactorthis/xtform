'use strict';

describe('validationSummary directive', function () {

    var form, $httpBackend, summary,
        $rootScope,
        template = '<form xt-form strategy="submitted">' +
            '<input name="firstName" ng-model="firstName" required msg-required="Test message">' +
            '<input name="lastName" ng-model="lastName" msg-something="Something">' +
            '<xt-validation-summary></xt-validation-summary>' +
            '</form>',
        templatePartial = '<div id="tmp"><ul></ul></div>';

    beforeEach(module('xtForm'));
    beforeEach(inject(function (_$rootScope_, $compile, $templateCache) {
        $rootScope = _$rootScope_;
        $templateCache.put('xtForm/summary/validationSummary.html', templatePartial);
    }));

    describe('basic template', function () {

        beforeEach(inject(function (_$rootScope_, $compile) {
            form = $compile(template)($rootScope.$new());
            summary = form.find('#tmp');
        }));

        it('should set errors on the scope', function () {
            form.triggerHandler('submit');
            $rootScope.$broadcast('XtForm.ErrorsUpdated');
            expect(summary.scope().errors).toEqual([{
                label: '',
                key: 'required',
                message: 'Test message'
            }]);
            expect(summary.scope().showErrors).toBe(true);
        });

        it('should add label to message if label is set', function () {
            form.find('input:first').controller('ngModel').$label = 'Test Label';
            form.triggerHandler('submit');
            $rootScope.$broadcast('XtForm.ErrorsUpdated');
            expect(summary.scope().errors).toEqual([{
                label: 'Test Label',
                key: 'required',
                message: 'Test message'
            }]);
            expect(summary.scope().showErrors).toBe(true);
        });

    });

});