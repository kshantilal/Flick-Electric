$(document).ready(function() {


	//When Maori tiki is clicked, translate text from english to maori. Maori has a display of none 
	//and english has a display of block.
	$(".maori-tiki").click(function(){
		$('.english-text').toggle();
		$('.maori-text').toggle();

	});

	// When the Minus and Plus buttons are clicked, #value increases by 5
	//#value is the number inside the circles which change
	$(function(){

		var valueElement = $('#value');
		function incrementValue(e){
			valueElement.text(Math.max(parseInt(valueElement.text()) + e.data.increment, 0));
			return false;
		}

		$('#plus').bind('click', {increment: 5}, incrementValue);

		$('#minus').bind('click', {increment: -5}, incrementValue);

	});

	// $('#plus').click(function(){
	// 	$('#value').removeClass('blue');
	// 	$('#value').addClass('red');
	// });

	// $('#minus').click(function(){
	// 	$('#value').removeClass('red');
	// 	$('#value').addClass('blue');
	// })



});
