'use strict';

describe('Directive: JustGage', function () {

  // load the directive's module
  beforeEach(module('angularJustgageApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<-just-gage></-just-gage>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the JustGage directive');
  }));
});
