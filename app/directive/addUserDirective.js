define(function (require) {
  'use strict';
  var addUser = function () {
    console.log('userList register successful!');
    return {
      scope: true,
      restrict: 'AE',
      templateUrl:'../templete/component/dataTable.html',
      replace: true
    };
  }
  return addUser;
});