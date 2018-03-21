angular.module('myNinjaApp')
  .controller('NinjaController', ['$scope', '$http', function ($scope, $http) {

    $scope.removeNinja = function (ninja) {
      var removedNinja = $scope.ninjas.indexOf(ninja);

      $scope.ninjas.splice(removedNinja, 1);
    }

    $scope.addNinja = function () {
      $scope.ninjas.push({
        name: $scope.newNinja.name,
        belt: $scope.newNinja.belt,
        rate: parseInt($scope.newNinja.rate),
        available: true
      })

      $scope.newNinja.name = '';
      $scope.newNinja.belt = '';
      $scope.newNinja.rate = '';
    }

    $scope.removeAll = function() {
      $scope.ninjas = [];
    }

    $http.get('data/ninjas.json').then((res) => {
      $scope.ninjas = res.data;
    })
}]);
