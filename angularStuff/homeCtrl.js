angular.module('routerApp').controller('homeCtrl',function($scope,$stateParams,$location, mainService){

    $scope.allProducts = mainService.getAllProducts();

    $scope.test = "product";




});