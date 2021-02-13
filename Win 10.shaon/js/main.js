$(document).ready(function(){
	$('.xrightcontainer').hide();
	
	$('[title="Expand"]').click(function(){
		$('.xrightcontainer').show(500);
	});
	
	$('.xtopicon i').click(function(){
		$('.xrightcontainer').hide(100);
	});
	
});