function makeWords() {

	var words = [
		{
			text: "Return on Investment",
			weight: 12.3
		}, {
			text: "Sales Funnel",
			weight: 12.5
		}, {
			text: "Value Statement",
			weight: 13
		}, {
			text: "Analytics",
			weight: 12
		}, {
			text: "Buyer Persona",
			weight: 10
		}, {
			text: "Content Management Systems",
			weight: 10
		}, {
			text: "Cost-Based Pricing",
			weight: 9
		}, {
			text: "Customer Loyalty",
			weight: 11
		}, {
			text: "Direct Mail",
			weight: 9
		},
		// {
		// 	text: "web development",
		// 	weight: 10
		// }, {
		// 	text: "C",
		// 	weight: 8.3
		// }, {
		// 	text: "Scheme",
		// 	weight: 8.1
		// }, {
		// 	text: "php",
		// 	weight: 7.8
		// }, {
		// 	text: "hadoop",
		// 	weight: 8.5
		// }, {
		// 	text: "numpy",
		// 	weight: 7
		// }, {
		// 	text: "matplotlib",
		// 	weight: 7
		// }, {
		// 	text: "ruby",
		// 	weight: 8
		// }, {
		// 	text: "express",
		// 	weight: 9
		// }, {
		// 	text: "flask",
		// 	weight: 8.9
		// }, {
		// 	text: "responsive design",
		// 	weight: 10
		// }, {
		// 	text: "bootstrap",
		// 	weight: 10
		// }
		/* ... */
	];
	return words;
}

function makeWordCloud(words) {
	$('.teaching-domains').jQCloud(words, {delay: 120});
}

function displayWordCloud() {
	var count = 1;
	$(window).on('scroll', function() {
		var y_scroll_pos = window.pageYOffset;
		var scroll_pos_test = 2700; // set to whatever you want it to be
		var words = makeWords();
		if (y_scroll_pos > scroll_pos_test && count <= 1) {
			makeWordCloud(words);
			count++;
		}
	});
}

function designForm() {
	$("#my-modal form").addClass("my-form");
}

$(document).ready(function() {
	Typed.new("#writing-text", {
		strings: [
			"am a copywriter.", "love to help small businesses grow.", "am passionate about teaching.", "work with others to build a strong presense online"
		],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 1,
		contentType: 'text',
		callback: function() {
			$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
		},
		preStringTyped: function() {},
		onStringTyped: function() {}
	});

	displayWordCloud();
})
