document.querySelector("h1").classList.add("heading");

document.querySelector("html").addEventListener("dblclick", function () {
  var date = new Date();
  var time = date.getTime();
  alert(date + " " + time);
});

function checkbox(element){
    if (element.checked){
        document.querySelector(".hidden").style.display = "block";
    }
    else{
        document.querySelector(".hidden").style.display = "none";
    }
}

document.querySelector("#toggle").addEventListener("click", function(){
    checkbox(this)});
