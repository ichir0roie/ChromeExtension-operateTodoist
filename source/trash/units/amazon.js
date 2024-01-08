/**
 * スポンサー削除
 */

console.log("run click plus.")

var targetString="AdHolder"
var done=false;

var targetElements=null;
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
        targetElements=document.getElementsByClassName(targetString);
        console.log(targetElements);
        if(targetElements!=null && targetElements.length>3){
            console.log("hit");
            run();
            c=waitMax;
            break;
        }
        c+=1;
        await sleep(500);
        console.log("wait.");
    }
}

function run() {
    while(targetElements.length>0){
        targetElements[0].parentNode.removeChild(targetElements[0]);
    }
    
}
waitElem();

