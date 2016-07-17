/// <reference path="../../Scripts/angular.min.js" />

var app = angular.module("myApp", []);

app.directive("myDirective", function () {
    return {
        restrict: "A",
        replace: true,
        scope: {
            myUrl: "=",
            myLinkText: "@"
        },
        template:
            "<div>" +
            "<label>My URL Field:</label>" +
            "<input type='text' ng-model='myUrl' />" +
            "<a href='{{myUrl}}'>{{myLinkText}}</a>" +
            "</div>"
    }
});