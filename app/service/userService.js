/**
 * Created by admin on 2017/6/28.
 */
define(function (require) {
  'use strict';
  var data = [
    {id: 1,name: '123',address: 'asdasd',status: true},
    {id: 2,name: '123',address: 'qweqwe',status: false},
    {id: 3,name: '111',address: '1qwe231',status: true},
    {id: 4,name: '11123',address: 'qweqwe',status: false},
    {id: 5,name: '22',address: 'qweqw',status: false},
    {id: 6,name: '3123',address: 'qwe',status: true},
    {id: 7,name: '23123',address: 'qwe',status: true},
    {id: 8,name: '123',address: 'qwe',status: true},
    {id: 9,name: 'qweqw',address: 'qwe',status: false},
    {id: 10,name: 'qweqwe',address: '1231',status: false}
  ];
  var userService = function ($http,$q) {
    // new service object,所有的属性会挂载 在this对象上.
    var defer = $q.defer();
    this.getUserList = function () {
      setTimeout(function () {
        return defer.resolve(data);
      },2000);
      return defer.promise
    };

  }
  return userService;
});