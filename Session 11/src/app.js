var app = angular.module("GroceryStore", ['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: "src/items.template.html",
        controller: 'mainController'
    })
    .when('/category/:categoryName',{
        templateUrl: "src/items.template.html",
        controller: 'mainController'
    });
});

app.controller('mainController',function($http, $scope, $routeParams){
    $http.get('http://localhost:3000/items').then(function(response){
        $scope.items = response.data;
    });
    $http.get('http://localhost:3000/categories').then(function(response){
        $scope.categories = response.data;
    });
    $scope.categoryName = $routeParams.categoryName;
});