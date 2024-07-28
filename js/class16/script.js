
var helloTag = document.getElementById("hello");
helloTag.innerHTML="Hello Batch7"

localStorage.setItem("userName","Naveed")
var val = localStorage.getItem("userName")
localStorage.clear()
console.log("val",val);

function onClickHandler() {
    var userNameinput = document.getElementById("username")
   console.log("userNameinput.value",userNameinput.value);
    var userNameinputValue = parseInt(userNameinput.value);
   if (userNameinputValue % 2 == 0) {
    helloTag.style.backgroundColor = "red"
    helloTag.className = "text3"
    helloTag.innerHTML= `Number is even - ${userNameinputValue}`
}
else {
    helloTag.className = "text2"
    helloTag.innerHTML= `Number is odd - ${userNameinputValue}`
}
}





// var num = parseInt(prompt("Enter a number"));



console.log("helloTag",helloTag);
// var listOfPTags = document.getElementsByTagName("p")
// var listOfpTags = document.getElementsByClassName("peragraph")
console.log();