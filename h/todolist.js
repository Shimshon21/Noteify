$(() => {
	$("#reg").click(() => {
		$("#login_1").hide(500)
		$("#reg_1").show(500)
		
	})
	$("#login").click(() => {
		$("#reg_1").hide(500)
		$("#login_1").show(500)
	})
	
	$("#btnRegister").click(() => { 
		var s = window.localStorage
		var ArrayData = {};
        ArrayData={"pass": $("#InputPassword").val(), "email": $("#InputEmail").val()}
        s.setItem($("#InputName").val(),JSON.stringify(ArrayData));
        console.log(s.getItem($("#InputName").val()));
		
        
        
        
	
//		$("#login_1").validate(()=>{
//			rules:{
//				
//				
//				InputName: { 
//					required: true,
//					minlength: 4
//				}, 
//				
//				InputEmail: {
//					required: true,
//					email: true
//				},
//				InputPassword: {
//					required: true,
//					minlength: 5
//				},
//				InputConfirmPassword: {
//					required: true,
//					equalTo: "#InputPassword",
//					minlength: 5
//				},
//				message: {
//					
//						InputName: { 
//						required: "Please Enter your User Name",
//						minlength: "Your User Name must consist of at least 4 charactors"	
//					}, 
//					
//				InputPassword: {
//						required: "Please Enter Your Password",
//						minlength: "Your User Name must consist of at least 5 charactors"
//				},
//				InputConfirmPassword: {
//					required: "Please Enter Your Password",
//					minlength: "Your User Name must consist of at least 5 charactors"
//					equalTo: "Please Enter The Same Password as above"
//				},
//				
//				}
//			}
//			
//			
//		})

}) 


