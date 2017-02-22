function init() {
    document.addEventListener("deviceready", onDR, false);
} 

function onDR(){
    document.addEventListener("backbutton", backKeyDown, true);
}

function backKeyDown() {
    // do something
    
     window.location.href="index.html";
}