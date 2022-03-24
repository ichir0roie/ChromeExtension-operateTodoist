console.log("show pass");
var tb =document.createElement("input");
tb.value=localStorage.getItem("sotreShowPassValue")
tb.addEventListener("change",changeEvenet);
document.body.appendChild(tb);


function changeEvenet(e){
    var tex=e.target.value;
    localStorage.setItem("sotreShowPassValue",tex);
}