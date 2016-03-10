function gameService() {
	var scores = 0;
    var roboItems = [
		{ index: 0, name: "Rock", image: "Rock.png", selected: false, wins: [{ index: 2, name: 'Scissors', verb: 'crushes' }] },
		{ index: 1, name: "Paper", image: "Paper.png", selected: false, wins: [{ index: 0, name: 'Rock', verb: 'covers' }] },
		{ index: 2, name: "Scissors", image: "Scissors.png", selected: false, wins: [{ index: 1, name: 'Paper', verb: 'cuts' }] }];

	var items = [
		{ index: 0, name: "Rock", image: "Rock.png", selected: false, wins: [{ index: 2, name: 'Scissors', verb: 'crushes' }] },
		{ index: 1, name: "Paper", image: "Paper.png", selected: false, wins: [{ index: 0, name: 'Rock', verb: 'covers' }] },
		{ index: 2, name: "Scissors", image: "Scissors.png", selected: false, wins: [{ index: 1, name: 'Paper', verb: 'cuts' }] }];

	this.getRoboItems = function(){
		return roboItems;
	}
	
	this.getItems = function(){
		return items;
	}
	
	this.getScores = function(){
		return scores;
	}
	
	this.addScore = function(){
		this.scores += 1;
	}
}

module.exports = gameService;