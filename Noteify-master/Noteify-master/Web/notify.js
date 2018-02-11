	var USER_NAME = localStorage.getItem("CurrentUser");	
$(()=>{
	console.log("on load was called");
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
		$.get(url,(res)=>{
			pages[url] = res;
			$('#section').html(res);
			btnLoginListener();
			register();
			goToRegister();
			goToLogin();
			getData();		
		});
		
	}
	
	//login and register java script starts here (Dany)
	function goToRegister(){
		$("#reg").click(() => {
		$("#login_1").hide(500);
		$("#reg_1").show(500);
	});
	}
    function goToLogin(){
	$("#login").click(() => {
		$("#reg_1").hide(500);
		$("#login_1").show(500);
	});
	}
	
	 function btnLoginListener(){
		 	$("#btnLogin").click((e)=>{
			e.preventDefault();
			console.log("dani method working");
			var l = window.localStorage;
			var key=JSON.parse(l.getItem($("#LoginEmail").val()));
			if(key["pass"] === $("#LoginPassword").val()){
				l.setItem("CurrentUser" ,$("#LoginEmail").val());
				console.log(l.getItem("CurrentUser"));
				moveToNotes();
			}else{
				alert("Wrong user inputs","Error");
			}
				});
	 }	

	

	
});
	
	//login and registration java script in addition
		function register(){
		$("#btnRegister").click((e)=>{	
		e.preventDefault();
		var s = window.localStorage
		var ArrayData = {}
        ArrayData={"pass": $("#InputPassword").val(), "name": $("#InputName").val(),"tasks":[{"bdika":"bdika"}]};
        s.setItem($("#InputEmail").val(), JSON.stringify(ArrayData));
        console.log(s.getItem($("#InputEmail").val()));
		$("#reg_1").hide(500);
		$("#login_1").show(500);
			});
		}
		
			//Change Section Data To Note.html
	function moveToNotes(){
		var notesPage = 'Notes.html';
		$.get(notesPage, (res)=>{
			console.log(res);
			$('#section').html(res);
			getData();
		});
	}       



	
	//Notes java script starts from here(Shimshon)
	function addTask(){
		var inputTask = $("#input").val();
		var mainStorage = JSON.parse(localStorage.getItem(USER_NAME));
		storage = mainStorage["tasks"];
		console.log($("#list>li").length);
		$("#list").append("<li><input type='checkbox' onchange='changeColor(this)'></input>"+inputTask+"</li>");
		if(storage==null){
			storage= [{[$("#list>li").length]:inputTask,"check":false}]
		}else{
		storage.push( {[$("#list>li").length]:inputTask,"check":false});
		}
			console.log(storage);
			mainStorage["tasks"]=storage
		 localStorage.setItem(USER_NAME,JSON.stringify(mainStorage))
		$("#input").val("");
	}
	
		function clearList(){
		console.log("deleted");
		$("#list").html("");
		 var mainStorage = JSON.parse(localStorage.getItem(USER_NAME));
		 storage=mainStorage["tasks"];
		 storage = null;
		 mainStorage["tasks"] = storage;
		 localStorage.setItem(USER_NAME,JSON.stringify(mainStorage));
	}
		//Change note color.
		function changeColor(elemnt){
		console.log(elemnt.parentNode);
			elemnt.parentNode.style.color = "green";
			var mainStorage=JSON.parse(localStorage.getItem(USER_NAME));
			storage = mainStorage["tasks"];
			var lineData = "";
			var index = 0;
		for (i=0;i<storage.length;i++){
			lineData = storage[i];
			console.log(lineData[i+1]);
			console.log(elemnt.parentNode.textContent);
			if(lineData[i+1]===elemnt.parentNode.textContent){
				console.log("true");
					index=i;
					break;			
		}	
	}
	if(elemnt.checked){
		storage[index]["check"]=true;
		mainStorage["tasks"]=storage;
		localStorage.setItem(USER_NAME,JSON.stringify(mainStorage));
	}else{
		console.log("UnChecked.")
		elemnt.parentNode.style.color = "black";
		storage[index]["check"]=false;
		mainStorage["tasks"]=storage;
		localStorage.setItem(USER_NAME,JSON.stringify(mainStorage))
	}
}
	
	function getData(){
		var USER_NAME = localStorage.getItem("CurrentUser");
		var mainStorage=JSON.parse(localStorage.getItem(USER_NAME));
		storage = mainStorage["tasks"];
		if (storage === undefined){
			storage = [{[$("#list>li").length]:inputTask,"check":false}]
		}
		for (i=0;i<storage.length;i++){
			var lineData = storage[i];
			var color="black";
			var checked=""
			if(lineData["check"]){
				$("#list").append("<li style='color:green;'><input type='checkbox' onchange='changeColor(this)' checked></input>"+lineData[i+1]+"</li>");
			}
			else{
				$("#list").append("<li color='black'><input type='checkbox' onchange='changeColor(this)' ></input>"+lineData[i+1]+"</li>");
			}
			
		}
}








