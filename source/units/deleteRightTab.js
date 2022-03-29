console.log("run noViewDate.")

const leftSideBar="left-sidebar";
const rightSideBar="sidebar";
const mainBar="mainbar";

var done=false;

var mainElem=null;
var waitMax=10;

function sleep(msec) {
    return new Promise(function(resolve) {
       setTimeout(function() {resolve()}, msec);
    })
 }

async function waitElem(){
    // console.log("wait start.");
    var c=0;
    while(c<waitMax){
        mainElem=document.getElementById(mainBar);
        if(mainElem != null){
            // console.log("hit");
            
            hide();
            c=waitMax;
            break;
        }
        c+=1;
        await sleep(1000);
        // console.log("wait.");
    }
}

function hide() {
    const leftElem=document.getElementById(leftSideBar);
    const rightElem=document.getElementById(rightSideBar);
    leftElem.parentNode.removeChild(leftElem);
    rightElem.parentNode.removeChild(rightElem);
    mainElem.style.width="100%";

}
waitElem();

