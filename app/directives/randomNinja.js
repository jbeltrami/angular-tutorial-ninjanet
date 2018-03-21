angular.module('myNinjaApp')
  .directive('randomNinja', [function() {

    return {
      restrict: 'E',
      scope: {
        ninjas: '=',
        title: '='
      },
      templateUrl: 'views/random.html',
      transclude: true,
      replace: true, // Replaces the custom with with the out-most parent tag
      controller: function($scope) {
        $scope.random = Math.floor(Math.random() * 4);
      }
    };

  }]);
