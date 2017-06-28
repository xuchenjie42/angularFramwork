define(['app'],function (App) {
  // var App = angular.module('myApp',['ngRoute','ui.router']);
  App.provider('testProved',function () {
    this.$get = function () {
      return {};
    };
    this.name = 123;
  });
  /*
   angular v1.5之前写法的路由
   App.config(function ($provide,$compileProvider,testProvedProvider,$routeProvider,$locationProvider) {
   $provide;
   $compileProvider;
   testProvedProvider;
   //这个为了兼容angular v1.6之前 router的写法
   $locationProvider.hashPrefix('');
   $routeProvider.when('/',{
   templateUrl:'../templete/test.html'
   }).when('/con',{
   templateUrl:'../templete/content.html'
   }).otherwise({redirecTo:'/'});
   });
   */
   // angular ui-route 写法的路由
   App.config(function ($stateProvider,$urlRouterProvider ) {
   //这个为了兼容angular v1.6之前 router的写法
   // $locationProvider.hashPrefix('');
   // $routeProvider.when('/',{
   // templateUrl:'../templete/test.html'
   // }).when('/con',{
   // templateUrl:'../templete/content.html'
   // }).otherwise({redirecTo:'/'});
   });
  App.config(function($stateProvider,$urlRouterProvider,$locationProvider,$controllerProvider){
    $stateProvider;
    $urlRouterProvider;
    $controllerProvider;debugger
    $locationProvider.hashPrefix('');
    $stateProvider.state('con',{
        url: '/con',
        templateUrl: '../templete/content.html'
      }
    );
  });
  App.directive('myDirec',function () {
    var returnValue = {
      scope: true,
      restrict: 'AE',
      templateUrl: '../templete/test.html'
    };
    return returnValue;
  });
  //main content
  App.controller('myContent',function ($scope) {
    $scope.kk = 'Hello world';
  });
  App.controller('sadasd',function ($scope) {
    $scope.test = 'Hello world';
    $scope.doclick = function () {
      console.log($scope.Name);
    }
  });
  return App;
});