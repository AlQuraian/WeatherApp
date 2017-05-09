// IIFE Immediately Invoked Function Expression to avoid global variables 
(function () {
    var app = angular.module('weatherApp', []);
    var appId = '3d8b309701a13f65b660fa2c64cdc517';

    var MainController = function ($scope, $http) {
        // c for Celsius, f for Fahrenheit
        $scope.temperatureUnit = 'c';
        $scope.cityName = 'Amsterdam';

        $scope.selectTemperatureUnit = function (unit) {
            $scope.temperatureUnit = unit;
            updateWeather();
        }

        var onCityChangeComplete = function (response) {
            $scope.selectedCity = response.data;
        }

        $scope.selectCity = function (cityName) {
            $scope.cityName = cityName;
            updateWeather();
        }

        var updateWeather = function () {
            $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + $scope.cityName + '&units=' + ($scope.temperatureUnit === 'c' ? 'metric' : 'imperial') + '&appid=' + appId)
                .then(onCityChangeComplete);
        }

        updateWeather();
    };

    app.controller('MainController', MainController);
}());