angular.module('myApp')
  .controller('HomeCtrl', function ($scope) {
      $scope.things = ['Angular', 'Rails 4.1', 'UI Router', 'Together!!'];
  })
  .controller('LotteryCtrl', ['$scope', 'randomNumber', function($scope, randomNumber) {  	
  	$scope.generateList = function(numbers, mega){
      var result = randomNumber.generateNumbers(numbers, mega);
      $scope.list = result.numbers;
      $scope.mega = result.megaNumber;
  	}
  }])
  .factory('randomNumber', function() {
    return {
      generateNumbers: function(numbersMax, megaMax) {
        var list = [];
        var mega = Math.ceil(Math.random() * megaMax);

        while (list.length < 5) {
          var number = Math.ceil(Math.random() * numbersMax);
          if (list.indexOf(number) == -1){
            list.push(number);
          }
        }
        list.sort(function(a, b){return a - b});
        return {numbers: list, megaNumber: mega};   
        }
     };
});