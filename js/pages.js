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


history.pushState(null, null, location.href); 
window.onpopstate = function(event) {
    
    if(condition == true){
        console.log("nothing");
    }else{
        window.location.href="../index.html";
        history.go(1);
    }
    
   
};