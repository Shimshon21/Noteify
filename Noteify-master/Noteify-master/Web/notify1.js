$(()=>{
	const pages = {};
	/*a method that changes the clicked nav bar item class to "active" and mark him.
	in addition checks if the current pressed nav bar item is not a link to external website(so preventDefault 
	method will not be called on him)*/
	$(".nav>li>a").click(function(e){
		console.log(pages);
		e.preventDefault();
		$(".active").removeClass("active");
		$(this).addClass("active");
		changeHtml(e.target.href);
	});
	function changeHtml(url){
		if(pages[url]){
			$('#section').html(pages[url]);
		}else{
			$.get(url,(res)=>{
				pages[url] = res;
				$('#section').html(res);
			});
		}
	}
});







