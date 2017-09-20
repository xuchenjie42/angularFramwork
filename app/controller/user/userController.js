/**
 * Created by admin on 2017/7/13.
 */
define(function (require) {
  'use strict';
  var userController = function ($scope,$http,$stateParams,$state,userService,$document) {
    $scope.title = 'User List';
    $scope.add = 'Add New item';
    $scope.id = 'ID';
    $scope.name = 'Name';
    $scope.address = 'Address';
    $scope.status = 'Status';
    $scope.switch = 'Switch';
    userService.getUserList().then(function (data) {
      $scope.userList = data;
    }.bind($scope));
    $scope.addUser = function () {
      alert(1);
    };
  }
  return userController;
});