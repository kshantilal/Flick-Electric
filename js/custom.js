$(document).ready(function() {

	$(".maori-tiki").click(function(){
		$('.english-text').toggle();
		$('.maori-text').toggle();

	});


     $(function(){

	    var valueElement = $('#value');
	    function incrementValue(e){
	        valueElement.text(Math.max(parseInt(valueElement.text()) + e.data.increment, 0));
	        return false;
	    }

	    $('#plus').bind('click', {increment: 1}, incrementValue);

	    $('#minus').bind('click', {increment: -1}, incrementValue);

	});
  
  });
