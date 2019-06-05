var popup = document.querySelector("p");
var button = document.querySelector("button");
button.addEventListener("click", function(){
  popup.classList.toggle("invisible");
  popup.classList.toggle("visible");
})

var lis = document.querySelectorAll("li");
for (var i = 0; i < lis.length; i++) {
  lis[i].addEventListener("click", function(){
    if (typeof this.num == "undefined") {
      this.num = 15;
    }
      this.num += 1;
    this.style.fontSize = String(this.num) + "px";
  })
}