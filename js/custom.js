$(document).ready(function() {


	//When Maori tiki is clicked, translate text from english to maori. Maori has a display of none 
	//and english has a display of block.
	$(".maori-tiki").click(function(){
		$('.english-text').toggle();
		$('.maori-text').toggle();

	});

	// // When the Minus and Plus buttons are clicked, #value increases by 5
	// //#value is the number inside the circles which change
	var increment = 5;
	var valueElement = $('#value');
	var value = parseInt(valueElement.text());

	$('#plus').click(function(){
		if(value < 100){
			value = value + increment;
		}
		valueElement.text(value);

	});
	$('#minus').click(function(){
		if(value > 0){
			value = value - increment;
		}
		valueElement.text(value);
	});


});
