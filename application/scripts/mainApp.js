require('angular');
var angular = typeof global === 'undefined' ? window.angular : global.angular;
angular.module('mainApp', ['ngAnimate', 'ui.bootstrap', 'ngRoute', 'route-segment', 'view-segment'])
    .service('gameService', [require('./services/gameService')])
    .controller('scoreController', ['$scope', 'gameService', require('./controllers/scoreController')])
    .controller('gameViewController', ['$scope', '$uibModal', '$rootScope', '$sce', '$timeout', 'gameService', require('./controllers/gameViewController')]);
