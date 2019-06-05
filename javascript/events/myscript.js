var popup = document.querySelector("p");
var button = document.querySelector("button");
button.addEventListener("click", function(){
  popup.classList.toggle("invisible");
  popup.classList.toggle("visible");
  alert("You are seen");
})

var lis = document.querySelectorAll("li");

for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function(){
    
    this.style.fontSize = String(size) + "px";
  })
}