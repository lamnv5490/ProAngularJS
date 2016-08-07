/// <reference path="../../Scripts/angular.min.js" />

var app = angular.module("phoneApp", []);

app.controller("AppController", function ($scope) {
    $scope.callHome = function (message, someThing) {
        alert(message + "-" + someThing);
    };

    $scope.annouceCall = function (message) {
        alert(message);
    };
});

app.directive("phone", function () {
    return {
        scope: {
            dial: "&"
        },
        template: '<input type="text" ng-model="value">' +
                  '<div class="button" ng-click="dial({someThing:345, hello: 123})">' +
                  'Call home!</div>',
    }
});