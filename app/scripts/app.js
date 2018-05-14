'use strict';

/**
 * @ngdoc overview
 * @name udaciMealsApp
 * @description
 * # udaciMealsApp
 *
 * Main module of the application.
 */
var module = angular
  .module('udaciMealsApp', ['ui.router'])
  .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/menu.html',
                controller: 'MenuCtrl as menu'
            })
            .state('item', {
                url: '/item/:id',
                templateUrl: 'views/item.html',
                controller: 'ItemCtrl as item'
            })
            .state('item.nutrition', {
                url: '/nutrition',
                templateUrl: 'views/item-nutrition.html'
            })
            .state('item.reviews', {
                url: '/reviews',
                templateUrl: 'views/item-reviews.html'
            });

    }]);

  module.run( ['$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  }]);
