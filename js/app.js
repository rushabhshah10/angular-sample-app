/**
 * Created by Rushabh on 29-Nov-15.
 */
var myApp = angular.module('myApp',[
    'ngRoute',
    'artistControllres'
]);

myApp.config(['$routeProvider',function($routeProvider){

    $routeProvider.
        when('/list',{
            templateUrl:'partials/list.html',
            controller:'ListController'
        }).
        when('/details/:itemId', {
            templateUrl:'partials/details.html',
            controller:'DetailsController'
        }).
        otherwise({
            redirectTo:'/list'
    });

}])