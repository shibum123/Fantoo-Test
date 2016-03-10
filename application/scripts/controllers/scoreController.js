function scoreController($scope, gameService) {
    $scope.scores = gameService.getScores();
}

module.exports = scoreController;