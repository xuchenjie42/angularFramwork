define(['require','angularRoute','uiRoute'],function (require) {
  'use strict';
  var angular = require('angular');
  //注入controller用的
  var controllerProvider;
  //注入 directive用的
  var compileProvider;
  //注入service用的.service include{service,factory,provider...}
  var provide;
  var App = angular.module('myApp',['ngRoute','ui.router']).config(function ($provide,$urlRouterProvider,$stateProvider,$locationProvider,$controllerProvider,$compileProvider) {
    controllerProvider = $controllerProvider;
    compileProvider=$compileProvider;
    provide =$provide;
    $locationProvider.hashPrefix('');
    $urlRouterProvider.when('','/main');
    $stateProvider.state('main',{
      url: '/main',
      resolve: {
        loadController: controllerRegister('myContent','controller/contentController'),
        loadDirective:directiveRegister('myDirec','directive/contentDirective'),
        loadService:serviceRegister('contenService','service/contentService')
      },
      controller: 'myContent',
      templateUrl: '../templete/content.html'
    });
  });
  //注入service
  var serviceRegister = function (serviceName,serviceModule) {
    return function ($q) {
      var defer = $q.defer();
      require([serviceModule],function (service) {
        //注入directive
        provide.service(serviceName,service);
        defer.resolve();
      });
      return defer.promise;
    }
  };
  //注入Directive
  var directiveRegister = function (directiveName,directiveModule) {
    return function ($q) {
      var defer = $q.defer();
      require([directiveModule],function (directive) {
        //注入directive
        compileProvider.directive(directiveName,directive);
        defer.resolve();
      });
      return defer.promise;
    }
  };
  //注入controller
  var controllerRegister = function (controllerName,controllerModule) {
    return function ($q) {
      var defer = $q.defer();
      require([controllerModule],function (controller) {
        //注入controller
        controllerProvider.register(controllerName,controller);
        defer.resolve();
      });
      return defer.promise;
    }
  };
  return App;
});