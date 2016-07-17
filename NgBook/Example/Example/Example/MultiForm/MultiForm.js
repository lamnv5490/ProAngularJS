﻿/// <reference path="../../Scripts/angular.min.js" />

var app = angular.module("myApp", []);

app.controller("FormController", function ($scope) {
    $scope.fields = [
        { placeholder: "Username", isRequired: true },
        { placeholder: 'Password', isRequired: true },
        { placeholder: 'Email (optional)', isRequired: false }
    ];

    $scope.submitForm = function () {
        alert("It works!");
    };
});