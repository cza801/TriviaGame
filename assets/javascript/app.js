var timer = 30; //
var correctAns;
var wrongAns;
var intervalId;


//-------------------------------------Starting the game--------------------
$(document).ready(function(){

	//here we are hiding the trivia questions until the start button is pressed. 
	$("#triviapage").hide();
	$("#scorepage").hide();
	// Here, i am adding an on click function to hide the panel with the "start" button, and displaying the trivia questions
	$(".btn").on("click", function () {
		$("#startpage").hide ();
		$("#triviapage").show ();
		timer = 30;
		intervalId = setInterval(decrement, 1000);
	});
	
	//This will store the correct, or incorrect answer, on the click of the radio button. 
	// $("#response").on("click", function() { 
	// 	if () ; 

	// });


	//This is the timer, and once the timer gets to 0, an alert will pop up, and stop the timer. 
	

		function decrement() {

			timer--;

			$("#countdown").html(timer);

			if (timer === 0) {

				$("#triviapage").hide();

				alert("Stop, drop, shut 'em down, open up shop!");

				clearInterval(intervalId);

				$("#scorepage").show();
				
				$("#startpage").show ();
			}
		};



//This shows the current time left. 	
$("#countdown").html(timer);


decrement ();











});
