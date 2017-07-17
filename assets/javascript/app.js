var timer = 30;

var intervalId;

$(document).ready(function(){

	$("#countdown").html(timer);

	function run() {
		intervalId = setInterval(decrement, 1000);

	};

	function decrement() {

		timer--;

		$("#countdown").html(timer);

		if (timer === 0) {

			alert("Stop! drop! shut 'em down, open up shop!");

			clearInterval(intervalId);
		}
	}


run();
decrement ();












	});
