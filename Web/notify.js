$(()=>{
	/*a method that changes the clicked nav bar item class to "active" and mark him.
	in addition checks if the current pressed nav bar item is not a link to external website(so preventDefault 
	method will not be called on him)*/
		
	$(".nav li").click(function(e){
		if(e.target.id = ""){
		e.preventDefault();
	
		console.log(n+1)
		}else{
		console.log("TODO : put a method for changing section content")
		$(".nav li").removeClass("active");
		$(".nav li").preventDefault;
		$(this).addClass("active");
	}});
	
});





