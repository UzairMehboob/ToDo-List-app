let inputs = document.getElementById("input");
let text = document.querySelector(".texts");

function Add() {
  if (inputs.value == "") {
    alert("Please Enter Task");
  } else {
    let newElement = document.createElement("ul");
    newElement.innerHTML=`${inputs.value}<i class="fa-solid fa-x"></i>`;
    text.appendChild(newElement);
    inputs.value="";
    newElement.querySelector("i").addEventListener("click",remove);
    function remove(){
newElement.remove()

    }


  }
}
