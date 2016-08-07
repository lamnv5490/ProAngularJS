/// <reference path="../../Scripts/angular.min.js" />

var app = angular.module("myApp", []);

app.controller('DashboardController', [
  '$scope', 'GithubService',
    function ($scope, GithubService) {
        $scope.pullRequests = {};
        $scope.notifyMessage = "";

        GithubService.getPullRequests().then(function (data) {
            $scope.pullRequests = data;
        }, function (err) {
        }, function (message) {
            $scope.notifyMessage = message;
        });
    }]);

app.factory('GithubService', [
  '$q', '$http', "$timeout",
    function ($q, $http, $timeout) {
        var getPullRequests = function () {
            var deferred = $q.defer();
            var objectCount = 1;
            // Get list of open angular js pull requests from github
            $http.get('https://api.github.com/repos/angular/angular.js/pulls')
            .success(function (data) {
                deferred.notify("Data has been sent!!");
                deferred.resolve(data);
            })
            .error(function (reason) {
                deferred.reject(reason);
            })
            return deferred.promise;
        }

        return {
            getPullRequests: getPullRequests
        };
    }]);