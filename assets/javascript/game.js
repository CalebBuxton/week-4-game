var wins = 0;
var losses = 0;
var playerWins = $("#wins");
var playerLosses = $("#losses");
var randomNumber = $("#randomNumber");
var playerScore = 0;
var playerScoreArea = $("#playerScore");
var result = $("#result");
var gems = $(".gem");
var win;
init();
function init() {
	setupGems();
	newRandomNumber();
}

console.log("Working");

function newRandomNumber() {
	randomNumber.text(randomInt(19,120));
	playerScore = 0;
	playerScoreArea.text(playerScore);
}

function updateScore() {
	if (win) {
		wins = parseInt(wins) + 1
		playerWins.text(wins)
	}
	else if (!win) {
		losses = parseInt(losses) + 1
		playerLosses.text(losses)
	}
	init();
}

function setupGems() {
	gems.each(function() {
		$(this).attr("value", randomInt(1,12))
		$(this).unbind().click(function(){
			console.log($(this).attr("value"))
			playerScore = parseInt(playerScore) + parseInt($(this).attr("value"))
			playerScoreArea.text(playerScore)
			if (playerScore === parseInt(randomNumber.text())) {
				win = true;
				result.text("You Won!");
				updateScore();
			}
			if (playerScore > parseInt(randomNumber.text())) {
				win = false;
				result.text("You Lost");
				updateScore();
			}
		})
	})
};

function randomInt(min,max)
{
    return Math.floor(Math.random()*(max-min+1)+min);
}