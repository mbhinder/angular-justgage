'use strict';

describe('Controller: JustgageCtrl', function () {

  // load the controller's module
  beforeEach(module('angularJustgageApp'));

  var JustgageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    JustgageCtrl = $controller('JustgageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
