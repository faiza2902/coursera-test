var myapp = angular.module('LunchChecker', []);
myapp.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope){
    $scope.message="";
    $scope.listItems="";
    $scope.calculator= function () {
        
        var noOfItems = 0;
        noOfItems=$scope.listItems.split(",");
        console.log(noOfItems.length);
        if(noOfItems=="") {
            $scope.message="please enter data first";
        } else if(noOfItems.length<=3) {
            $scope.message="enjoy!";
        } else if(noOfItems.length>3) {
            $scope.message="too much!";
        }
    };
    
    
}