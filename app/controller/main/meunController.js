define(function (require) {
  'use strict';

  var meunController=function($scope,$stateParams,$state){
    $scope.menu={
       home:'home Menu',
       user:'User Menu',
       userTable:'UserList'
    };
  };
  return meunController;
});

