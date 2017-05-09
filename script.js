var app = angular.module('weatherApp', []);

var MainController = function ($scope) {
    $scope.selectedCity =
        {
            coord: {
                lon: -0.13,
                lat: 51.51
            },
            weather: [
                {
                    id: 804,
                    main: "Clouds",
                    description: "overcast clouds",
                    icon: "04n"
                }
            ],
            base: "stations",
            main: {
                temp: 281.6,
                pressure: 1017,
                humidity: 71,
                temp_min: 279.15,
                temp_max: 283.15
            },
            visibility: 10000,
            wind: {
                speed: 5.7,
                deg: 90
            },
            clouds: {
                all: 90
            },
            dt: 1494361200,
            sys: {
                type: 1,
                id: 5091,
                message: 0.0603,
                country: "GB",
                sunrise: 1494303395,
                sunset: 1494358697
            },
            id: 2643743,
            name: "London",
            cod: 200
        };
};

app.controller('MainController', MainController);