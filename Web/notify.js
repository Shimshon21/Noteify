$(()=>{
	/*a method to change the cliked nav bar item class to "active" , and mark him by that*/
	$(".nav>li").on("click", function() {
		$(".nav li").removeClass("active");
		$(this).addClass("active");
		});
	
});




