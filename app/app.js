define(['angular','routeConfig','angularRoute','uiRoute'],function (angular,routeConfig) {
  'use strict';
  var App = angular.module('myApp',['ngRoute','ui.router']).config(function ($provide,$urlRouterProvider,$stateProvider,$locationProvider,$controllerProvider,$compileProvider) {
    routeConfig.set({
      controllerProvider: $controllerProvider,
      compileProvider: $compileProvider,
      provide: $provide,
      stateProvider: $stateProvider
    });
    $locationProvider.hashPrefix('');
    $urlRouterProvider.when('','/main');
    routeConfig.routes();
  });
  window.App = App;
  return App;
});