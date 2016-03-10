function gameViewController($scope, $uibModal, $rootScope, $sce, $timeout, gameService) {

    $scope.isStarted = false;
    $scope.selected_option = -1;
    $scope.winText = "";
    var max = 2;
    var min = 0;

    $rootScope.ties = 0;
    $rootScope.yourWins = 0;
    $rootScope.robotWins = 0;

    $scope.roboItems = gameService.getRoboItems();

    $scope.items = gameService.getItems();

    $scope.scores = gameService.getScores();


    $scope.calculate = function(randomVal) {
        if ($scope.items[$scope.selected_option].index == $scope.roboItems[randomVal].index) {
            $scope.winText = $rootScope.winText = "Tie";
            $scope.ties = $rootScope.ties += 1;
            gameService.addScore();
        } else if ($scope.items[$scope.selected_option].wins[0].index == $scope.roboItems[randomVal].index) {
            $scope.winText = $rootScope.winText = "You Win!";
            $scope.yourWins = $rootScope.yourWins += 1;
            gameService.addScore();
            gameService.addScore();
        } else {
            $scope.winText = $rootScope.winText = "You Lost";
            $scope.robotWins = $rootScope.robotWins += 1;
        }
    }

    $scope.startGame = function () {
        $scope.isStarted = true;
        $scope.winText = "";

        angular.forEach($scope.roboItems, function (value, index) {
            value.selected = false;
        })

        angular.forEach($scope.items, function (value, index) {
            value.selected = false;
        })

        $timeout(function () {
            var randomVal = Math.floor(Math.random() * (max - min + 1) + min);
            $scope.roboItems[randomVal].selected = true;
            $scope.items[$scope.selected_option].selected = true;
            $scope.isStarted = false;

            calculate(randomVal);


        }, 1000);
    }
}

module.exports = gameViewController;