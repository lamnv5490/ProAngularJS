/// <reference path="../../Scripts/angular.min.js" />

var app = angular.module("myApp", []);

app.directive("myDirective", function () {
    return {
        restrict: "A",
        replace: true,
        scope: {
            myUrl: "@otherUrl"
        },
        template:
            "<div>" +
            "<label>My URL Field:{{myUrl}}</label></div>"
    }
});