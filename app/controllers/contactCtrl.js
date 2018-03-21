angular.module('myNinjaApp')
  .controller('contactCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.sendMessage = function() {
      $location.path('contact-success');
    }
  }]);
