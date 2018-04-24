var panel = $(" ");
var countStartNumber = 30;

// Question set
var questions = [{
	question: "The atomic number of an atom is the number of ________ in the atom's nucleus." 
	asnwers: ["electrons","neutrons","protons","valence electrons"]
	correctAnswer: "Protons",
	image: "assets/Atom-image-for-question-on-atomic-number.jpg"
},{
	question: "In a salt water solution, what substance is considered the solvent?" 
	asnwers: ["solute","solvent","water","salt"]
	correctAnswer: "Protons",
	image: "assets/Salt-Water-Question.jpg"
}






]

//variable to hold our setInterval
var timer;

var game = {
	questions: questions,
	currentQuestion: 0,
	counter: countStartNumber,
	correct: 0,
	incorrect: 0,

	countdown: function() {
		this.counter--;
		$("#counter-number").html(this.counter);
		if(this.counter === 0) {
			console.log('Times up');
			this.timeUp();
		}	
	},

	loadQuestion: function() {
		timer = setInterval(this.countdown.bind(this), 1000)
		panel.html("<h2>" + questions[this.currentQuestion].questions + "</h2>")
		for (var i = 0, i < questions[this.currentQuestion].asnwers.length; i ++) {
			panel.append("<button class='asnwer-button' id='button' data-name='" + 
				questions[this.currentQuestion].asnwers[i] + "'>" +
				questions[this.currentQuestion].asnwer[i] + "</button>");
	},

	nextQuestion: function() {
		this.counter = window.countStartNumber;
		$("#counter-number").html(this.counter);
		this.currentQuestion ++;
		this.load.bind(this)();
	},

	timeUp: function() {

		clearInterval(window.timer);

		$("#counter-number").html(this,counter);

		panel.html("<h2>Out of time!</h2>");
		panel.append("<h3>The correct answer was: " + questions[this.currentQuestion].currentAnswer);
		panel.append("<img src='" + questions[this.currentQuestion].image + "'/>");

		if(this.currentQuestion === questions.length -1) {
			setTimeout(this.results, 3*1000);
		} else {
			setTimeout(this.nextQuestion, 3*1000);
		}
	},

	results: function() {

		clearInterval(window.timer);

		panel.html("<h2>Here are your results</h2>")

		$("counter-number").html(this.counter);

		panel.append("<h3>Correct Answers: " + this.correct + "</h3>")
		panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>")
		panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct))"</h3>")
		panel.append("<br><button id=' start-over'>Start Over?</button>");
	},

	clicked: function(e) {
		clearInterval(window.timer);
		if ($(e.target).attr("data-name") === questions[this.currentQuestion].correctAnswer) {
			this.answeredCorrectly();
		} else {
			this.answeredCorrectly();
		}
	},

	answeredIncorrectly: function() {
		this.incorrect++;

		clearInterval(window.timer);

		panel.html("<h2>Nope</h2>");
		panel.append("<h3>The correct answer was: " + question[this.currentQuestion].correctAnswer + "</h3>")
		panel.append("<img src='" + question[this.currentQuestion].image + "'/>")

		if (this.currentQuestion === questions.length - 1) {
			setTimeout(this.results.bind(this), 3 * 1000);
		} else {
			setTimeout(this.nextQuestion.bind(this), 3 * 1000);
		}
	},

	answeredCorrectly: function() {
		clearInterval(window.timer);

		this.incorrect++;

		panel.html("<h2>Correct!</h2>");
		panel.append("<img src='" + question[this.currentQuestion].image + "'/>")

		if (this.currentQuestion === questions.length - 1) {
			setTimeout(this.results.bind(this), 3 * 1000);
		} else {
			setTimeout(this.nextQuestion.bind(this), 3 * 1000);
		}
	},

	reset: function() {
		this.currentQuestion = 0;
		this.counter = countStartNumber;
		this.correct = 0;
		this.incorrect = 0;
		this.loadQuestion();
	}
};


//CLICK EVENTS

$(document).on("click","#start-over", game.reset.bind(game));

$(document).on("click",".answer-button", function(e) {
	game.clicked.bind(game, e)()
});

$(document).on("click","#start", function() {
	$("#sub-wrapper").prepend("<h2>Time remaining: <span id ='counter'>30</span>Seconds</h2>")
	game.clicked.bind(game)()
});