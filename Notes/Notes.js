		
	var numOfNotes = 0;
	const numSet = new Set();
	var notes = "";
	var USER_NAME="userName";
	//var storage = window.localStorage;
	let main = document.getElementById("main");
//On load.
	$(() =>{
 getData();
	});
	
	
	function addTask(){
		var inputTask = $("#input").val()
		var storage = JSON.parse(localStorage.getItem(USER_NAME,JSON));
		console.log($("#list>li").length);
		$("#list").append("<li><input type='checkbox' onchange='changeColor(this)'></input>"+inputTask+"</li>");
		if(storage==null){
			storage= [{[$("#list>li").length]:inputTask,"check":false}]
		}else{
		storage.push( {[$("#list>li").length]:inputTask,"check":false});
		}
			console.log(storage);
		 localStorage.setItem(USER_NAME,JSON.stringify(storage))
		$("#input").val("");
	}
	
	
	function clearList(){
		console.log("deleted");
		$("#list").html("");
		 localStorage.setItem(USER_NAME,JSON.stringify(null))
	}

//Change note color.
function changeColor(elemnt){
	console.log(elemnt.parentNode);
			elemnt.parentNode.style.color = "green";
			var storage=JSON.parse(localStorage.getItem(USER_NAME));
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
		localStorage.setItem(USER_NAME,JSON.stringify(storage))
	}else{
		console.log("UnChecked.")
		elemnt.parentNode.style.color = "black";
		storage[index]["check"]=false;
		localStorage.setItem(USER_NAME,JSON.stringify(storage))
	}
}
function getData(){
	var storage=JSON.parse(localStorage.getItem(USER_NAME));
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





