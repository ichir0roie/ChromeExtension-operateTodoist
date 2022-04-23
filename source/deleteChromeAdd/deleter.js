
console.log("ad must kill!");

var needJoke=null;
var jokeText=null;
var killIds=null;

var style=window.getComputedStyle(document.body);
var background=style.backgroundColor;

chrome.storage.sync.get({
    needJoke:true,
    jokeText:"✝ 悪・即・斬 ✝",
    killIds:"tvcap,bottomads"
}, function (items) {
    needJoke = items.needJoke;
    jokeText = items.jokeText;    
    killIds = items.killIds.split(",");
    
    killIds.forEach((id)=>{
        killAndJoke(id);
    })
});

function killAndJoke(targetId){
    var adElem=document.getElementById(targetId);
    if(adElem == null)return;
    if (needJoke){
        adElem.innerHTML="<p style='font-size:10px'>"+jokeText+"</p>";
        adElem.style.color=background;
    }else{
        adElem.remove();
    }
}