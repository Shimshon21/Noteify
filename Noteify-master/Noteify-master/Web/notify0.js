$(()=>{
	/*a method that changes the clicked nav bar item class to "active" and mark him.
	in addition checks if the current pressed nav bar item is not a link to external website(so preventDefault 
	method will not be called on him)*/
	$(".nav>li>a").click(function(e){
		e.preventDefault();
		console.log(e.target);
		$(".active").removeClass("active");
		$(this).addClass("active");
		changeHtml(e.target.href);
	});
});

function changeHtml(url){
	$.ajax({
		url: url,
		success: (res)=>{
			$('#section').html(res);
		}
	});
}





