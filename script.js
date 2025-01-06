function test(message){
    alert(message);
}


console.log(4+5)

document.getElementById("greeting").innerHTML = "Hello";

console.log(document.getElementsByClassName("product-item"))

console.log(document.querySelector(".product-item"))

document.querySelector("p#weather").style.margin = "10px"
document.querySelector("p#weather").style.backgroundColor = "red"

//To add/remove/toggle classes to a tag
document.querySelector("p#weather").classList.add = "redBg"
document.querySelector("p#weather").classList.remove = "redBg"
document.querySelector("p#weather").classList.toggle = "redBg"

//events- type of event,function to trigger
document.querySelector("p#weather").addEventListener("click",function(){
    alert("inside here");
})

document.querySelector("#open-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open")
})


document.querySelector("#close-nav-menu").addEventListener("click",function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open")
})