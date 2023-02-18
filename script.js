var menuIcon =document.querySelector(".menu-icon");
var sidebar =document.querySelector(".sidebar");
var largecontainer =document.querySelector(".container");

menuIcon.onclick= function(){
    sidebar.classList.toggle("small-sidebar");
    largecontainer.classList.toggle("largecontainer")
};