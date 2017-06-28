/**
 * Created by admin on 2017/6/28.
 */
define(function (require) {
  'use strict';
  var mainService=function(){
    // new service object,所有的属性会挂载 在this对象上.
    this.init=function(){
      console.log('register service success');
    }
    console.log('register service success');
  }
  return mainService;
});