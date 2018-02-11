	var numOfNotes = 0;
	const numSet = new Set();
	var notes = "";
	var USER_NAME = localStorage.getItem("CurrentUser");
	//var storage = window.localStorage;
	let main = document.getElementById("main");
//On load.
	$(() =>{
		var storage = JSON.parse(localStorage.getItem(USER_NAME));
		getData();
	});
	
	
	function addTask(){
		var inputTask = $("#input").val()
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





