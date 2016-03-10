describe('GameViewController', function () {
  beforeEach(module('mainApp'));

  var $controller;

  beforeEach(inject(function (_$controller_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

  describe('$scope.calculate', function () {
    it('Testing score values', function () {
      var $scope = {};
      var controller = $controller('gameViewController', { $scope: $scope });

      $scope.roboItems = [
        { index: 0, name: "Rock", image: "Rock.png", selected: false, wins: [{ index: 2, name: 'Scissors', verb: 'crushes' }] },
        { index: 1, name: "Paper", image: "Paper.png", selected: false, wins: [{ index: 0, name: 'Rock', verb: 'covers' }] },
        { index: 2, name: "Scissors", image: "Scissors.png", selected: false, wins: [{ index: 1, name: 'Paper', verb: 'cuts' }] }];

      $scope.items = [
        { index: 0, name: "Rock", image: "Rock.png", selected: false, wins: [{ index: 2, name: 'Scissors', verb: 'crushes' }] },
        { index: 1, name: "Paper", image: "Paper.png", selected: false, wins: [{ index: 0, name: 'Rock', verb: 'covers' }] },
        { index: 2, name: "Scissors", image: "Scissors.png", selected: false, wins: [{ index: 1, name: 'Paper', verb: 'cuts' }] }];
      
      $scope.selected_option = 0;
      $scope.calculate(0);
      
      expect($scope.winText).toEqual("Tie");
      expect($scope.ties).toEqual(1);
      
      $scope.calculate(1);
      expect($scope.winText).toEqual("You Lost");
      expect($scope.ties).toEqual(1);
      expect($scope.robotWins).toEqual(1);
      
      $scope.calculate(2);
      expect($scope.winText).toEqual("You Win!");
      expect($scope.ties).toEqual(1);
      expect($scope.robotWins).toEqual(1);
      expect($scope.yourWins).toEqual(1);
    });
  });
});