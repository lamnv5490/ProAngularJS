/// <reference path="../../Scripts/angular.min.js" />

angular.module("MyApp", [])
    .directive("ensureUnique", function () {
        return {
            require: "ngModel",
            link: function (scope, ele, attrs, c) {
                scope.$watch(attrs.ngModel, function (n) {
                    if (!n) {
                        return;
                    }

                    var isUnique = false;

                    if (n !== "lamnv5490") {
                        isUnique = true;
                    }

                    c.$setValidity("unique", isUnique);
                });
            }
        }
    })
    .directive("ngFocus", [function () {
        var FOCUS_CLASS = "ng-focused";

        return {
            restrict: "A",
            require: "ngModel",
            link: function (scope, element, attrs, ctrl) {
                ctrl.$focused = false;
                element.bind("focus", function (event) {
                    element.addClass(FOCUS_CLASS);

                    scope.$apply(function () {
                        ctrl.$focused = true;
                    });
                }).bind("blur", function (event) {
                    element.removeClass(FOCUS_CLASS);

                    scope.$apply(function () {
                        ctrl.$focused = false;
                    });
                });
            }
        }
    }])
    .controller("signupController", ["$scope", function ($scope) {
        $scope.submitted = false;

        $scope.signupForm = function () {
            if ($scope.signup_form.$valid) {
                alert("Data has been sent to server!");
            } else {
                $scope.signup_form.submitted = true;
            }
        }
    }]);


