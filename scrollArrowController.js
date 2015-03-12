$(document).ready( function() {
	$('#scroll-arrow').click(function() {
		$("html, body").animate({ 
			scrollTop: $('#scroll-arrow-destination').offset().top 
		}, 1000, "easeInOutCubic");
	});
});