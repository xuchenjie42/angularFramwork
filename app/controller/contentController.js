define(function (require) {
  'use strict';
  var mainController=function($scope,contenService){
    $scope.kk='hello World';
    $scope.yy='asdasdas';
    contenService.init();
  }
  return mainController;
});