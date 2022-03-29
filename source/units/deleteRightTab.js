

var bt =document.createElement("button");
bt.innerHTML="simplified";
bt.style.width="20%"
bt.className="s-btn s-btn__primary"
bt.addEventListener("click",clickEvent);

document.body.insertBefore(bt,document.body.firstChild);

function clickEvent(e){
    hide();
}

function hide() {
    const leftElem=document.getElementById("left-sidebar");
    const rightElem=document.getElementById("sidebar");
    const mainElem=document.getElementById("mainbar");
    leftElem.parentNode.removeChild(leftElem);
    rightElem.parentNode.removeChild(rightElem);
    mainElem.style.width="100%";
    bt.parentNode.removeChild(bt);
}