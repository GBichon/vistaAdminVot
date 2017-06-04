'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/', {
            templateUrl : 'vistaPrincipal/vistaPrincipal.html',
            controller  : 'vistaPrincipalCtrl'
        })

  .when('/admin/usuario', {
            templateUrl : 'vistaAdministradorUsuarios/vistaAdministradorUsuarios.html',
            controller  : 'vistaAdministradorUsuariosCtrl'
        })
  .when('/admin/candidato', {
            templateUrl : 'vistaAdministradorCandidatos/vistaAdminCandidatos.html',
            controller  : 'vistaAdministradorCandidatosCtrl'
        })
  .when('/admin/partido', {
            templateUrl : 'vistaAdministradorPartidos/vistaAdminPartidos.html',
            controller  : 'vistaAdministradorPartidosCtrl'
        })

  .otherwise({redirectTo: '/view1'});
}]);


/**
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/', {
            templateUrl : 'vistaPrincipal/vistaPrincipal.html',
            controller  : 'vistaPrincipalCtrl'
        })

  .otherwise({redirectTo: '/view1'});
}]);

**/