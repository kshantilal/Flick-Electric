$(document).ready(function() {

	$(".maori-tiki-sleep").click(function(){
		$('.english-text').toggle();
		$('.maori-text').toggle();

	});

	$('.maori-tiki-sleep').hover(function(){
		$('.maori-tiki').toggle();

	});

});
