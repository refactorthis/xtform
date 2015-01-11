'use strict';

describe('xtFormConfig provider', function () {

    var provider,
        xtFormConfig;

    beforeEach(function () {
        angular.module('test.xtForm', [])
            .config(function (xtFormConfigProvider) {
                provider = xtFormConfigProvider;
            });

        module('xtForm', 'test.xtForm');
        inject(function (_xtFormConfig_) {
            xtFormConfig = _xtFormConfig_;
        });
    });

    describe('validation strategy configuration', function () {

        it('should add a custom validation strategy', function () {
            var expected = jasmine.createSpy('customStrategy');
            provider.addValidationStrategy('customStrategy', expected);

            var actual = xtFormConfig.getValidationStrategy('customStrategy');
            expect(actual).toBe(expected);
        });

        it('should retrieve a validation strategy by name', function () {
            var actual = xtFormConfig.getValidationStrategy('dirty');
            expect(actual).toBe(provider.$validationStrategies.dirty);
        });

        it('should throw an error if strategy doesn\'t exist', function () {
            expect(function () {
                xtFormConfig.getValidationStrategy('tester123')
            }).toThrow(new Error('Could not find validation strategy by name: tester123'));
        });

        it('should set and retrieve default validation strategy', function () {
            provider.setDefaultValidationStrategy('submitted');
            var strategy = xtFormConfig.getDefaultValidationStrategy();
            expect(strategy).toBe(provider.$validationStrategies.submitted);
        });

        it('should throw an error if setting a default strategy that doesn\'t exist', function () {
            expect(function () {
                provider.setDefaultValidationStrategy('tester123')
            }).toThrow(new Error('Could not find validation strategy by name: tester123'));
        });

        it('should set the default strategy to "dirtyOrSubmitted"', function () {
            var actual = xtFormConfig.getDefaultValidationStrategy();
            expect(actual).toBe(provider.$validationStrategies.dirtyOrSubmitted);
        });

    });

    describe('error message configuration', function () {

        it('should override default error messages', function () {
            provider.setErrorMessages({
                required: 'Hi',
                email: 'email'
            });

            var errors = xtFormConfig.getErrorMessages();

            expect(errors.required).toBe('Hi');
            expect(errors.email).toBe('email');
        });

        it('should add custom error messages to the set of defaults', function () {
            provider.setErrorMessages({
                customError: 'custom'
            });

            var errors = xtFormConfig.getErrorMessages();

            expect(errors.customError).toBe('custom');
        });

    });
});