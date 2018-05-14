'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('foodFinder', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function


// There is something wrong with foodFinder service's promises.
// That's why we need to click twice on 'Home' and menu items,
// in order to get data from app's .json files
// One way to solve this issue, is to store the data inside the foodfinder.js file



        this.getMenu = function() {
            return $.get('/menu/menu.json');
        };

        this.getItem = function(id) {
            var menyItemFile = '/menu/' + id + '.json';
            return $.get(menyItemFile);
        }
  });
