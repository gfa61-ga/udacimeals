'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.orderManager
 * @description
 * # orderManager
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
    .service('orderManager', function () {
        // AngularJS will instantiate a singleton by calling "new" on this function

        let selectedDay = 'Monday';
        let orderSelection = {
            Monday: {
                breakfast: '',
                lunch: '',
                dinner: ''
            },
            Tuesday: {
                breakfast: '',
                lunch: '',
                dinner: ''
            },
            wednesday: {
                breakfast: '',
                lunch: '',
                dinner: ''
            },
            Thursday: {
                breakfast: '',
                lunch: '',
                dinner: ''
            },
            Friday: {
                breakfast: '',
                lunch: '',
                dinner: ''
            }
        };

        this.getActiveDay = function() {
            return selectedDay;
        };

        this.setActiveDay = function(day) {
            selectedDay = day;
        };

        this.getOrders = function() {
            return orderSelection;
        };

        this.chooseMenuOption = function(meal, menuItem) {
            orderSelection[selectedDay][meal] = menuItem;
        };

        this.removeMenuOption = function(day, menuCategory) {
            orderSelection[day][menuCategory] = '';
        };
    });
