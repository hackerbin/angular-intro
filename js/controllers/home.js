/**
 * Created by robin on 1/10/2016.
 */
app.controller('HomeCtrl', function ($scope) {

    //$scope.names = {robin: "robin is awesome", shuvo: "i am shuvho", jalal: "i am jalal"};
    $scope.names = [
        {name : "robin", value: "robin is awesome"},
        {name : "shuvo", value: "i am shuvho"},
        {name : "jalal", value: "i am jalal"}
    ];

    $scope.printvalue = function () {
        console.log($scope.robin);
    }
});