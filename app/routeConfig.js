define(function (require) {
  'use strict';
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
  //注入Component
  var componentRegister = function (componentName,componentModule) {
    return function ($q) {
      var defer = $q.defer();
      require([componentModule],function (component) {
        //注入directive
        compileProvider.component(componentName,component());
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
  var registerArrary = function (controllers) {
  }
  // //注入controller用的
  // //注入 directive用的
  // //注入service用的.service include{service,factory,provider...}
  var controllerProvider;
  var compileProvider;
  var provide;
  var routeConfig;
  routeConfig = {
    set: function (options) {

      this.controllerProvider = controllerProvider = options.controllerProvider;
      this.compileProvider = compileProvider = options.compileProvider;
      this.provide = provide = options.provide;
      this.stateProvider = options.stateProvider;
    },
    routes: function () {
      return this.stateProvider.state('main',{
        url: '/main',
        params: {testPar: null},
        resolve: {
          loadHeaderController: controllerRegister('headerController','controller/main/headerController'),
          loadMeunController: controllerRegister('meunController','controller/main/meunController'),
          loadContentController: controllerRegister('contentController','controller/main/contentController')
        },
        views: {
          'main': {templateUrl: '../templete/main.html'},
          'headerView@main': {
            controller: 'headerController',
            templateUrl: '../templete/main/header.html'
          },
          'meunView@main': {
            controller: 'meunController',
            templateUrl: '../templete/main/meun.html'
          },
          'contentView@main': {
            controller: 'contentController',
            templateUrl: '../templete/main/content.html'
          },
        }
      }).state('main.user',{
        url: '/user/:manager',
        resolve: {
          loaduserController: controllerRegister('userController','controller/user/userController'),
          loaddataTabledir: directiveRegister('userList','directive/userListDirective'),
          loaduserService: serviceRegister('userService','service/userService'),
          loaduserInfoDirect: serviceRegister('userService','service/userService')
        },
        views: {
          'contentView@main': {
            controller: 'userController',
            templateUrl: '../templete/user/user.html'
          }
        }
      });
    }
  };
  return routeConfig;
});