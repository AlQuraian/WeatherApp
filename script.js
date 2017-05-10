// IIFE Immediately Invoked Function Expression to avoid global variables 
(function () {
    var app = angular.module('weatherApp', []);
    var appId = '3d8b309701a13f65b660fa2c64cdc517';

    var MainController = function ($scope, $http) {
        // c for Celsius, f for Fahrenheit
        $scope.temperatureUnit = 'c';
        $scope.cityName = 'Amsterdam';
        $scope.loading = false;

        $scope.selectTemperatureUnit = function (unit) {
            $scope.temperatureUnit = unit;
            updateWeather();
        }

        var onCurrentWeatherChangeComplete = function (response) {
            $scope.selectedCity = response.data;
            $scope.loading = false;
        }

        var onForecastWeatherChangeComplete = function (response) {
            $scope.selectedCityForecasts = response.data.list;
            $scope.loading = false;
        }

        $scope.selectCity = function (cityName) {
            $scope.cityName = cityName;
            updateWeather();
        }

        var onError = function () {
            // TODO: show the error on page
            $scope.error = 'Could not fetch the weather';
            $scope.loading = false;
        }

        var buildUrl = function (currentWeather) {
            return 'http://api.openweathermap.org/data/2.5/' + (currentWeather ? 'weather' : 'forecast') + '?q=' + $scope.cityName + '&units=' + ($scope.temperatureUnit === 'c' ? 'metric' : 'imperial') + '&appid=' + appId;
        }

        var updateWeather = function () {
            $scope.loading = true;
            $http.get(buildUrl(true))
                .then(onCurrentWeatherChangeComplete, onError);
            $scope.loading = true;
            $http.get(buildUrl(false))
                .then(onForecastWeatherChangeComplete, onError);
        }

        updateWeather();
    };

    app.controller('MainController', MainController);
}());