'use strict';
require.config({
  baseUrl:window.location.origin+'/app/',
  paths: {
    // Core modules
    angular: "../lib/angular/angular",
    "angularRoute": "../lib/angular/angular-route",
    "uiRoute": "../lib/angular/angular-ui-route",
    "jquery": "../lib/jquery-3.1.0",
    "underscore": "../lib/underscore",
    "text": "../lib/text"
  },
  shim: {
    angular: {
      exports: "angular"
    },
    "angularRoute": {
      deps: ["angular"],
      exports: "angularRoute"
    },
    "uiRoute": {
      deps: ["angular"],
      exports: "uiRoute"
    }
  },
  priority:[
    'angular'
  ],
  urlArgs:'v=1.6',
  waitSeconds: 0
});
require(['app','angular'],function (App,angular) {
  angular.bootstrap(document.body,['myApp']);
});