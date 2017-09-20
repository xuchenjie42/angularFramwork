define(function (require) {
  'use strict';
  var mainDirective=function(){
    console.log('指令注入成功！');
    var returnValue = {
      scope: true,
      restrict: 'AE',
      template: '<span>{{yy}}</span>'
    };
    return returnValue;
  }
  return mainDirective;
});