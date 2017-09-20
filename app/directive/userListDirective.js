define(function (require) {
  'use strict';
  var userList = function () {
    console.log('userList register successful!');
    return {
      scope: true,
      restrict: 'AE',
      templateUrl: '../templete/dir/userList.html',
      replace: true
    };
  }
  return userList;
});