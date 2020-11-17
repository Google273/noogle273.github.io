$(function function_name(argument) {
	// body...

	let width = ( window.innerWidth ); // полная ширина окна
	if (width == 1200) {
		$("#pc-menu ul").css("display", "flex");

	}	
	if (width <= 1199) {
		$("#pc-menu").css("display", "none");

	}	
	if (width <= 767) {
		$("#pc-menu").css("display", "none");

	}	
	if (width <= 575) {
		$("#pc-menu").css("display", "none");

	}	
});
$(function burger(argument) {
	$("#close-icon").hide();
	// body...
	$("#mobile-icon").on("click", function clickB(argument) {
		// body...
		$("#close-icon").show();
		$("#mobile-icon").hide();
		$("#mobile-menu li").slideToggle();
	})
	$("#close-icon").on("click", function clickK(argument) {
		$("#close-icon").hide();
		$("#mobile-icon").show();
		$("#mobile-menu li").slideToggle();
	})
})