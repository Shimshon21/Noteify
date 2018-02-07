$(()=>{
	/*a method that changes the clicked nav bar item class to "active" and mark him.
	in addition checks if the current pressed nav bar item is not a link to external website(so preventDefault 
	method will not be called on him)*/

	
	console.log(firstScreen);
	$(".nav li").click(function(e){
		e.preventDefault();
		changeHtml(e.target.href);
		$(".nav li").removeClass("active");
		$(this).addClass("active");
	});
	
	function changeHtml(url){
		$.get(url, (html)=>{
			$('#section').html(html);
		});
		console.log(url);
	}
	
});





