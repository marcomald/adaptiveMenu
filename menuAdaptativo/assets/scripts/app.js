'use strict';

/**
* @ngdoc overview
* @name proyectoMenu
* @description
* # proyectoMenu
*
* Main module of the application.
*/
angular.module('proyectoMenu', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngMessages',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.bootstrap.datetimepicker'
]).config(function ($routeProvider) {
  $routeProvider
  // .when('/', {
  //   templateUrl: 'views/main.html',
  //   controller: 'MainCtrl',
  //   controllerAs: 'main'
  // })
  .when('/', {
    templateUrl: 'views/UploadMenu.html',
    controller: 'UploadMenuCtrl',
    controllerAs: 'UploadMenuCtrl'
  })
  .when('/menu/', {
    templateUrl: 'views/GenerateMenu.html',
    controller: 'generarMenuCtrl',
    controllerAs: 'generarMenuCtrl'
  })
  .otherwise({
    redirectTo: '/'
  });
})
