/// <reference path="../../Scripts/angular.min.js" />

var app = angular.module('appModule', []);

app.directive("myForm", function () {
    return {
        scope: {
            employeeName: "@",
            title: "@"
        },
        replace: true,
        restrict: "E",
        templateUrl: "myForm.html",
        link: function (scope, element, attrs) {
            scope.projectCount;
            scope.yourComment = "Your Comment";

            element.bind("submit", function (event) {
                event.preventDefault();

                console.log("Form has been submitted");
            });
        }
    }

});