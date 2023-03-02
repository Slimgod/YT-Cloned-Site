var  menuIcon =document.querySelector(".menu-icon");
var sidebar =document.querySelector(".sidebar");
var largecontainer =document.querySelector(".container");

    const writeNewcommnt= document.getElementById("writecomments").value;
    // let displaycomments=document.getSelector(".displaycomments");

let reaction = 0;
let reactLike=document.querySelector(".likes");
let reactdislike=document.querySelector(".dislikes");
menuIcon.onclick= function(){
    sidebar.classList.toggle("small-sidebar");
    largecontainer.classList.toggle("largecontainer");
};

function react(){
    reaction=+1;
   return reactLike.innerHTML=reaction;
}
function reacts(){
    reaction=+1;
    return reactdislike.innerHTML=reaction;
 
  
}
function submit(){
    // writeNewcommnt.innerHTML=displaycomments;
    // return console.log(writeNewcommnt);
    console.log(writeNewcommnt)
};
submit()
 
 