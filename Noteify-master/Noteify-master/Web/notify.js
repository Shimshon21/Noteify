	var USER_NAME = localStorage.getItem("CurrentUser");	
$(()=>{
	console.log("on load was called123");
	const pages = {};
	/*a method that changes the clicked nav bar item class to "active" and mark him.
	in addition checks if the current pressed nav bar item is not a link to external website(so preventDefault 
	method will not be called on him)*/
	if(localStorage.getItem("CurrentUser")){
		$("#notesPage").html("Logout");
		logout();
	}
	$(".nav>li>a").click(function(e){
		console.log("login");
		e.preventDefault();
		$(".active").removeClass("active");
		$(this).parent().addClass("active"); 
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
			console.log("Dani method working");
			var l = window.localStorage;
			var key=JSON.parse(l.getItem($("#LoginEmail").val()));
			if(key["pass"] === $("#LoginPassword").val()){
				l.setItem("CurrentUser" ,$("#LoginEmail").val());
				console.log(l.getItem("CurrentUser"));	
				moveToNotes();
				$("#notesPage").html("Logout");
				logout();
			}else{
				alert("Wrong user inputs","Error");
			}
				});
	 }	

	
	
});
	function logout(){
		$("#notesPage").click(()=>{
			console.log("login");
			if($("#notesPage").html("Login")){
				console.log("work");
				localStorage.removeItem("CurrentUser");
				return "";
			}else{
				console.log("failed");
			}
		})
	}
	//login and registration java script in addition
	function register(){
		$("#btnRegister").click((e)=>{	
			e.preventDefault();
			var s = window.localStorage
			var data = {"pass": $("#InputPassword").val(), "name": $("#InputName").val(),"tasks":{}};
		    s.setItem($("#InputEmail").val(), JSON.stringify(data));
			$("#reg_1").hide(500);
			$("#login_1").show(500);
		});
	}
	
		//Change Section Data To Note.html
	function moveToNotes(){
		var notesPage = 'Notes.html';
		$.get(notesPage, (res)=>{
			$('#section').html(res);
			getData();
		});
	}       



	
	//Notes java script starts from here(Shimshon).
	
	//Add task to the list.
	function addTask(){	
		var inputTask = $("#input").val();
		mainStorage = JSON.parse(localStorage.getItem(USER_NAME));
		if(mainStorage){
			var tasks = mainStorage.tasks;
			if((inputTask && !tasks[inputTask])){
				tasks[inputTask] = false;
				mainStorage["tasks"]=tasks
				localStorage.setItem(USER_NAME,JSON.stringify(mainStorage));
				$("#input").val("");
				getData();
			}
		}else{
			alert("You need to register to use this feature");
		}
	}
				
	
		
		
	//Delete checked tasks.	
	function deleteMarked(elemnt){
		mainStorage = JSON.parse(localStorage.getItem(USER_NAME));
		if(mainStorage){
			if (confirm("Are you sure?")) {
				txt = "You pressed OK!";
				var tasks = mainStorage["tasks"];
				var tasksBoxes = $("#list>li>:checked");
				for(let i=0; i<tasksBoxes.length; i++){
					const txt = $(tasksBoxes[i]).next().text();
					delete tasks[txt];
				}
				mainStorage["tasks"]=tasks;
				localStorage.setItem(USER_NAME,JSON.stringify(mainStorage));
				getData();	
			}
		}else alert("You need to register to use this feature");
											
	}
		
	
	//Remove all tasks.
	function clearList(){
		$("#list").html("");
		console.log("List tasks were deleted.");
		 mainStorage = JSON.parse(localStorage.getItem(USER_NAME));
		 if(mainStorage !=null){
			 if(confirm("delete l")){
			storage=mainStorage["tasks"];
			storage = {};
			mainStorage["tasks"] = storage;
			localStorage.setItem(USER_NAME,JSON.stringify(mainStorage));
			 }
		}else alert("You need to register to use this feature");
	}
	
	//Change note color.
	function changeColor(elemnt){	
		console.log("Color Change for:"+elemnt.parentNode);
		mainStorage=JSON.parse(localStorage.getItem(USER_NAME));
		if(mainStorage != null){
			if(elemnt.checked){
				elemnt.parentNode.style.backgroundColor = "green";
				mainStorage["tasks"][elemnt.nextSibling.textContent] = true;
			}else{
				elemnt.parentNode.style.backgroundColor = "transparent";
				mainStorage["tasks"][elemnt.nextSibling.textContent] = false;
			}
				localStorage.setItem(USER_NAME,JSON.stringify(mainStorage));
		}
		else alert("You need to register to use this feature.");
	}
		

	//Load tasks.
	function getData(){
		var USER_NAME = localStorage.getItem("CurrentUser");
		var mainStorage=JSON.parse(localStorage.getItem(USER_NAME));
		if(mainStorage != null){
		var	tasks = mainStorage["tasks"];
		var tasksLis = "";
		for (let key in tasks ){
			var lineData = tasks[key];
			var color="transparent";
			var checked="";
			if(lineData){
				color="green";
				checked="checked";
			}
			tasksLis += "<li style='background-color:"+color+";'><input type='checkbox' onchange='changeColor(this)' "+checked+"/><span>"+key+"</span></li>";
		}
		$("#list").html(tasksLis);
		}
		
	}





