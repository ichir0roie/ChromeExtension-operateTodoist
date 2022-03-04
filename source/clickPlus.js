console.log("run click plus.")

var targetId="quick_add_task_holder"
var done=false;

var targetElem=null;
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
        targetElem=document.getElementById(targetId);
        if(targetElem != null){
            // console.log("hit");
            
            clickPlus();
            c=waitMax;
            break;
        }
        c+=1;
        await sleep(100);
        // console.log("wait.");
    }
}

function clickPlus() {
    // console.log("click plus.");
    if(targetElem == null)return;
    targetElem.click();    
}
waitElem();

