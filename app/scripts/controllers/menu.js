'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
    .controller('MenuCtrl', ['foodFinder', 'orderManager', function(menu, orderManager) {
        this.items = '';
        var vm = this;

        menu.getMenu()
            .then(function(data) {
                vm.items=data;
            });

        this.increment = function(item) {
            item.rating = (item.rating * 10 + 1) / 10;
        };

        this.decrement = function(item) {
            item.rating = (item.rating * 10 - 1) / 10;
        };

        this.chooseItem = function(menuCategory, menuItemName) {
            orderManager.chooseMenuOption(menuCategory, menuItemName);
        };

    }]);

/*
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function () {
        this.id = 'strauberry-pudding';
        this.name = 'Strauberry Pudding';
        this.img = 'strauberry-pudding.jpg';
        this.rating = 5;
  });

  */



/*
this.items =
            [
                {
                    id: 'chicken-pomegranate-salad',
                    name: 'Chicken Pomegranate Salad',
                    img: 'chicken-pomegranate-salad.jpg',
                    calories: 400,
                    rating: 5
                },
                {
                    id: 'strauberry-pudding',
                    name: 'Strauberry Pudding',
                    img: 'strauberry-pudding.jpg',
                    calories: 300,
                    rating: 3.1
                },
                {
                    id: 'ham-goat-cheese-croissant',
                    name: 'Ham and Goat Cheese Croissant',
                    img: 'ham-goat-cheese-croissant.jpg',
                    calories: 200,
                    rating: 4
                }
            ];
*/