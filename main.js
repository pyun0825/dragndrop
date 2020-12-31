const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

//Fill listeners

fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd)

//Loop through empties and call drag events

for(const empty of empties){
    empty.addEventListener("dragover", dragOver);
    empty.addEventListener("dragenter", dragEnter);
    empty.addEventListener("dragleave", dragLeave);
    empty.addEventListener("drop", dragDrop);
}

//Drag Functions

function dragStart(event) {
    //this.className += ' hold';
    //setTimeout(()=> this.className = 'invisible', 0);
    event.target.classList.add("hold");
    setTimeout(() => event.target.className = "invisible", 0);
}

function dragEnd(event) {
    //this.className = 'fill'
    event.target.className = "fill";
}

function dragOver(event) {
    event.preventDefault();
}
function dragEnter(event) {
    event.preventDefault();
    //this.className += ' hovered';
    event.target.classList.add("hovered");
}
function dragLeave(event) {
    //this.className = 'empty';
    event.target.className = "empty";
}
function dragDrop(event) {
    //this.className = 'empty'
    //this.append(fill);
    event.target.className = "empty";
    event.target.append(fill);
}