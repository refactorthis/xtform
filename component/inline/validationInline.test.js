'use strict';

describe('inline validation directive', function () {

    var summary, $rootScope, element, $compile,
        templatePartial = '<span class="tpl"></span>',
        template = '<form xt-form strategy="dirty">' +
            '<input id="firstName" name="firstName" ng-model="firstName" required msg-required="Test message">' +
            '<xt-validation-inline id="yo" for="firstName"></xt-validation-inline>' +
            '<input id="lastName" name="lastName" ng-model="lastName" msg-something="Something">' +
            '<div xt-validation-inline="lastName"></div>' +
            '</form>';

    beforeEach(module('xtForm'));
    beforeEach(inject(function (_$rootScope_, _$compile_, $templateCache) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $templateCache.put('xtForm/inline/validationInline.html', templatePartial);
    }));

    function setTemplate(template) {
        element = $(template);
        $('body').append(element);
        element = $compile(element)($rootScope.$new());
    }

    afterEach(function () {
        if (element) {
            element.remove();
        }
    });

    describe('activation', function () {

        it('should ensure that an input element is specified', function () {
            expect(function () {
                var tmp = '<form xt-form><xt-validation-inline></xt-validation-inline></form>';
                setTemplate(tmp);
            }).toThrow(new Error('The validation input id must be specified eg. for="id"'));
        });

        it('should ensure that the input element specified exists', function () {
            expect(function () {
                var tmp = '<form xt-form><xt-validation-inline for="el1"></xt-validation-inline></form>';
                setTemplate(tmp);
            }).toThrow(new Error('Can not find the input element for the validation directive'));
        });

        it('should add xt-validation-inline class to element', function () {
            setTemplate(template);
            expect(element.find('.tpl').hasClass('xt-validation-inline')).toBe(true);
        });

        it('should allow both element and attribute syntax', function () {
            setTemplate(template);
            expect(element.find('.tpl').length).toBe(2);
        });

        it('should create a unique id for the validation control if none specified', function () {
            setTemplate(template);
            expect(element.find('.tpl')[0].id).toBe('yo');
            expect(element.find('.tpl')[1].id).toBe('validation_0');
        });

        it('should add aria-required attribute for required fields', function () {
            setTemplate(template);
            expect(element.find('[required]').attr('aria-required')).toBe('true');
        });

    });

    describe('redrawing errors', function () {

        it('should listen for XtForm.ErrorsUpdated event and draw if ngModel matches', function () {
            setTemplate(template);
            $rootScope.$broadcast('XtForm.ErrorsUpdated', element.find('#firstName').controller('ngModel'));

            expect(element.find('#yo').scope().errors).toBeDefined();
            expect(element.find('#validation_0').scope().errors).toBeUndefined();
        });

        it('should listen for XtForm.ErrorsUpdated event and draw if null ngModel sent', function () {
            setTemplate(template);
            $rootScope.$broadcast('XtForm.ErrorsUpdated', null);

            expect(element.find('#yo').scope().errors).toBeDefined();
        });

        describe('error collection on scope', function () {

            var ngModel, validatorScope;

            beforeEach(function () {
                setTemplate(template);
                ngModel = element.find('#lastName').controller('ngModel');
                validatorScope = element.find('#validation_0').scope();
            });

            it('should set errors on the scope if invalid', function () {
                ngModel.$setViewValue('');
                ngModel.$setValidity('something', false);
                $rootScope.$apply();
                $rootScope.$broadcast('XtForm.ErrorsUpdated', null);

                expect(validatorScope.errors).toEqual([
                    {key: 'something', message: 'Something'}
                ]);
                expect(validatorScope.showErrors).toBe(true);
            });

            it('should not set errors if valid', function () {
                $rootScope.$broadcast('XtForm.ErrorsUpdated', null);

                expect(validatorScope.errors).toEqual([]);
                expect(validatorScope.showErrors).toBe(false);
            });

        });

        describe('aria attributes', function () {

            var lastName, ngModel, validatorScope;

            beforeEach(function () {
                setTemplate(template);
                lastName = element.find('#lastName');
                ngModel = lastName.controller('ngModel');
                validatorScope = element.find('#validation_0').scope();
            });

            it('should set aria-invalid & describedBy when invalid', function () {
                ngModel.$setViewValue('');
                ngModel.$setValidity('something', false);
                $rootScope.$apply();
                $rootScope.$broadcast('XtForm.ErrorsUpdated', null);

                expect(lastName.attr('aria-invalid')).toBe('true');
                expect(lastName.attr('aria-describedBy')).toBe('validation_0');
            });

            it('should not set aria attributes when valid', function () {
                $rootScope.$broadcast('XtForm.ErrorsUpdated', null);

                expect(lastName.attr('aria-invalid')).toBeUndefined();
                expect(lastName.attr('aria-describedBy')).toBeUndefined();
            });

        });
    });

});