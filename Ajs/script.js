var app = angular.module('app', ['ngMessages', 'ngAutocomplete'])
  .controller('Ctrl', ['$scope', function($scope) {
    $scope.vm = {
      address: {}
    };
  }]);