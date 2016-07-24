/// <reference path="../../Scripts/angular.min.js" />

var app = angular.module("appModule", []);

app.directive("navMenu", function ($location) {
    return function (scope, element, attrs) {
        var links = element.find('li');

        angular.forEach(links, function (obj) {
            var element = angular.element(obj);

            element.bind("click", function (e) {
                angular.element(document.getElementsByTagName("li")).removeClass("active");

                angular.element(e.target).addClass("active");
            })
        });
    }
});