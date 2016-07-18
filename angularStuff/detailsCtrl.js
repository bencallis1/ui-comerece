angular.module('routerApp').controller('detailsCtrl',function($scope,$stateParams,$location, mainService){
    var id = $stateParams.id;

    $scope.productInfo = mainService.getProduct(id);




});