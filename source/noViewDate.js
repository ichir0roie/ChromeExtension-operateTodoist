console.log("run noViewDate.")

var targetId="section-header-"
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
        targetElem=document.getElementById(targetId+"0");
        if(targetElem != null){
            // console.log("hit");
            
            hideDate();
            c=waitMax;
            break;
        }
        c+=1;
        await sleep(1000);
        // console.log("wait.");
    }
}

function hideDate() {
    var elem ;
    for(var i= 0;i <10;i++){
        elem=document.getElementById(targetId+i.toString());
        if(elem!=null){
            elem.setAttribute("hidden","");
        }
    }
}
waitElem();

