'use strict';

var express = require('express');
var myApp = express();
myApp.use(express.static(__dirname + '/app'));
myApp.listen(process.env.PORT || 3000);

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);
