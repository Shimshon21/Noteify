		var numOfNotes = 0;
	let main = document.getElementById("main");
	

$(() =>{
	
	animateNote($(".note"))
		console.log(main.getBoundingClientRect());
		//Add note button.
		$("#addNote").click(()=>{ 
		numOfNotes += 1;
			var newNote =$('<div class="note"></div>');
			newNote.css({
	'background-color':'cyan',
	'border-width':'2px',
	'border-color':'white',
	'border-radius':'10%',
	position:'absolute',
	position:'relative',
	left:'100px',
	height:'200px',
	width:'200px'})
			$("#main").append(newNote);
			console.log(document.getElementsByClassName(("note"))[numOfNotes]);
				dragElement(document.getElementsByClassName(("note"))[numOfNotes]);
		});
		
});


dragElement(document.getElementsByClassName(("note"))[0]);

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    elmnt.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e = e || window.event;//??
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }

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
  


  function closeDragElement() {
    /* stop moving when mouse button is released:*/
    document.onmouseup = null;
    document.onmousemove = null;
  }
}


function animateNote(elemnt){
	console.log("animation");
	var height = 20;
	var width = 20;
	var  note =$(".note")[0];
console.log(note.offsetHeight);
	var a=setInterval(function(){
		if(note.offsetHeight <= 200){
	elemnt.css({"height":(height += 20)+'px',"width":(width += 20)+'px'});
	console.log(note.offsetHeight);
		}else{
			clearInterval(a);
		}
	},40);
	console.log("loaded");
}

