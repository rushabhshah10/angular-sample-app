/**
 * Created by Rushabh on 29-Nov-15.
 */
var artistControllres = angular.module('artistControllres',['ngAnimate']);

artistControllres.controller('ListController',['$scope','$http', function ($scope, $http){

    $http.get('js/data.json').
        success(function(data){
            $scope.artists = data;
            $scope.artistOrder = 'name';
    })
}]);

artistControllres.controller('DetailsController',['$scope','$http','$routeParams', function ($scope, $http,$routeParams){

    $http.get('js/data.json').
    success(function(data){
        $scope.artists = data;
        $scope.whichItem = $routeParams.itemId;

        if($routeParams.itemId > 0){
            $scope.prevItem = Number($routeParams.itemId)-1;
        }
        else{
            $scope.prevItem = $scope.artists.length - 1;
        }

        if($routeParams.itemId < $scope.artists.length - 1 ){
            $scope.nextItem = Number($routeParams.itemId)+1;
        }
        else{
            $scope.nextItem = 0;
        }
    })
}]);
