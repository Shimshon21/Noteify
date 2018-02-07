		
	var numOfNotes = 0;
	const numSet = new Set();
	var notes = "";
	var USER_NAME="userName";
	//var storage = window.localStorage;
	let main = document.getElementById("main");
	var taskDesc =[];
//On load.
	$(() =>{
	;
		console.log($("#note")[0]);
		numSet.add($("#note")[0])
			animateNote($(".note"))
		taskDesc= JSON.parse(localStorage.getItem(USER_NAME));
			getInfo()
			//$("#note > textarea").val(desc[0].elemnt);
			//Add note with dragElement function.
		$("#addNote").click(()=>{
			var newNote =$('<div class="note" onload="animateNote(this);return false;"><div id="options" class="options" ><input type="checkbox" onchange="changeColor(this)"/><button id="delBtn" onclick="deleteNote(this)"></button></div><textarea onfocusout="saveContent(this)"></textarea></div>');
			$("#main").append(newNote);
			console.log(newNote[0]);
			dragElement(newNote[0]);
			numSet.add(newNote[0]);
		});
		
	});

	//First note created.			
	dragElement(document.getElementsByClassName(("note"))[0]);			
	
	function dragElement(elmnt) {
	  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
	  elmnt.onmousedown = dragMouseDown;

	//when click on note.
  function dragMouseDown(e) {
    e = e || window.event;
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

  //When drag note.
  function elementDrag(e) {
    e = e || window.event;
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX ;
	console.log(pos4 + "-" + e.clientY);
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
	console.log(elmnt.offsetTop);
	console.log(pos2);
	elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
  }
  
  //stop moving when mouse button is released.
  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

//Animation for notes.
function animateNote(elemnt){
	var height = 20;
	var width = 20;
	var  note =$(".note")[0];
	var a=setInterval(function(){
	if(elemnt.offsetHeight < 200){
		elemnt.css({"height":(height += 20)+'px',"width":(width += 20)+'px'});
	}else{
			clearInterval(a);
		}
	},40);
}

//Change note color.
function changeColor(elemnt){
	console.log(elemnt.parentNode.parentNode.childNodes);
	if(elemnt.checked){
		elemnt.parentNode.parentNode.style.backgroundColor="rgba(0,255,0,0.6)" ;
		elemnt.parentNode.parentNode.style.height="20px"
		elemnt.parentNode.parentNode.childNodes[3].style.display="none";
	}else{
		elemnt.parentNode.parentNode.style.backgroundColor="rgba(0,255,255,0.6)";
		elemnt.parentNode.parentNode.style.height="200px"
		elemnt.parentNode.parentNode.childNodes[3].style.display="block";
	}
}

//Delete note.
function deleteNote(note){
	console.log(numSet.size)
	numSet.delete(note.parentNode.parentNode);
	note.parentNode.parentNode.remove();
}
function saveContent(elemnt){
	console.log("focous out");
	numSet.add(elemnt.parentNode);
		taskDesc.push(elemnt.value);
		localStorage.setItem(USER_NAME,JSON.stringify(taskDesc))
			console.log(JSON.parse(localStorage.getItem(USER_NAME)));
}

function getInfo(){
	for (var i of taskDesc){
		var newNote =$('<div class="note" onload="animateNote(this);return false;"><div id="options" class="options" ><input type="checkbox" onchange="changeColor(this)"/><button id="delBtn" onclick="deleteNote(this)"></button></div><textarea onfocusout="saveContent(this)">'+i+'</textarea></div>');
		dragElement(newNote[0]);
			$("#main").append(newNote);
	}
	
}

