'use strict';

describe('ngModel directive', function () {

    var element, input, ngModel, $compile, $el,
        $rootScope, xtFormCtrl,
        templates = {
            form: '<form xt-form>',
            unActivated: '<form><input ng-model="firstName"></form>',
            noLabel: '<input ng-model="firstName">',
            label: '<label for="test">Test</label><input id="test" ng-model="firstName">'
        };

    function setup(template, validationStrategy) {

        // First add xt-form so that we can mock out the controller methods
        $el = $(templates.form);
        $('body').append($el);
        element = $compile($el)($rootScope);
        xtFormCtrl = element.controller('xtForm');

        // setup spy
        var spy = spyOn(xtFormCtrl, 'getValidationStrategy');
        if (validationStrategy) {
            spy.andCallFake(validationStrategy);
        }

        // next add template to the form
        var templateEl = $(template);
        element.append(templateEl);
        $compile(templateEl)($rootScope);
        input = element.find('input');
        ngModel = input.controller('ngModel');
    }

    beforeEach(module('xtForm'));
    beforeEach(inject(function (_$rootScope_, _$compile_) {
        $rootScope = _$rootScope_;
        $compile = _$compile_;
    }));

    afterEach(function () {
        if ($el) {
            $el.remove();
        }
    });

    describe('activation', function () {

        it('should initialize errors to be an empty object', function () {
            setup(templates.label);
            expect(ngModel.$xtErrors).toEqual({});
        });

        it('should read the validation strategy from the XtFormController', function () {
            setup(templates.label);
            expect(xtFormCtrl.getValidationStrategy).toHaveBeenCalled();
        });

        it('should not activate the directive if the ng-model is not inside an xt-form', function () {
            element = $compile(templates.unActivated)($rootScope);
            ngModel = element.find('input').controller('ngModel');
            expect(ngModel.$xtErrors).toBeUndefined();
        });
    });

    describe('updating errors', function () {

        beforeEach(function () {
            setup(templates.label);
        });

        it('should update errors on XtForm.ForceErrorUpdate event', function () {

        });

        it('should update errors on ngModel.$error change', function () {

        });

        it('should update errors on focus/blur of the input', function () {

        });

        it('should broadcast XtForm.ErrorsUpdated event after update', function () {

        });

        it('should only add errors which have passed the validation strategy test', function () {

        });

    });

    describe('creating the error messages', function () {

        it('should first use error messages described on the element as attributes', function () {

        });

        it ('should default to the default error messages if no override found on the element', function () {

        });

        it ('should interpolate the default message with values from the attributes collection', function () {

        });
    });

    describe('setting $label on ngModel', function () {

        it('should set $label on ngModel if label is found', function () {
            setup(templates.label);
            expect(ngModel.$label).toBe('Test');
        });

        it('should set $label to "" if no label is found', function () {
            setup(templates.noLabel);
            expect(ngModel.$label).toBe('');
        });
    });

    describe('touched and focused functionality', function () {

        beforeEach(function () {
            setup(templates.noLabel);
        });

        it('should set $touched when focused', function () {
            expect(ngModel.$touched).toBe(false);
            input.triggerHandler('focus');
            expect(ngModel.$touched).toBe(true);
        });

        it('should default $focused to false on activation', function () {
            expect(ngModel.$focused).toBe(false);
        });

        it('should set $focused when focused', function () {
            expect(ngModel.$focused).toBe(false);
            input.triggerHandler('focus');
            expect(ngModel.$focused).toBe(true);
        });

        it('should unset $focused when unfocused', function () {
            input.triggerHandler('focus');
            expect(ngModel.$focused).toBe(true);
            input.triggerHandler('blur');
            expect(ngModel.$focused).toBe(false);
        });
    });
});