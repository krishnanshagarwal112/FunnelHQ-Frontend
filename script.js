const draggableElements = document.getElementsByClassName("c-1");
const startingZone = document.getElementById("container-1");
const startingHTML = startingZone.innerHTML;
const targetZone = document.getElementById("container-2");
const resetBtn = document.getElementById("reset-btn");

targetZone.addEventListener("ondrop", (ev) => {
  ev.preventDefault();

});

function onDragStart(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function onDragEnter(ev) {
  console.log(ev.target);
  ev.target.style.backgroundColor = "#577D86";
}

function onDragLeave(ev) {
  console.log(ev.target);
  ev.target.style.backgroundColor = "#B9EDDD";
}

function onDrop(ev) {
  ev.preventDefault();
  var id = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(id));
}

// Just to make the drop zone droppable !
function onDragOver(ev) {
  ev.preventDefault();
}

function onDragEnd(ev) {
  targetZone.style.backgroundColor = " #B9EDDD";
  document.getElementById("messages").innerHTML =
    "Successfully added " + ev.target.innerText;
}

resetBtn.addEventListener("click", () => {
  startingZone.innerHTML = startingHTML;
  targetZone.innerHTML = "";
  document.getElementById("messages").innerHTML = ""
});
