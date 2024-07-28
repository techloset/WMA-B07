let car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    spec:{
        color: "red",
        type: "sedan"
    }

}
car?.ab?.sf?.color

var num1 = 10;
var num2 = 20;
var result = true ? "a" : "b";
var result1 = num1 == num2 && "yes"
// if (num1 == num2) {
//     result = "yes"
// }
// else {
//     result = "no"
// }

// var pakistan = "i love pakistan"
// pakistan.replace("pakistan", "hindustan")
// // pakistan.test("/pakistan/")
// let email = "naveed@techloset.com"
// console.log(/^\S+@\S+\.\S+$/.exec(email));





async function getGithubUser() {
    const userName = document.getElementById("username").value;
    console.log("getGithubUser function in util");
    const response = await fetch(`https://api.github.com/users/${userName}`);
    const user = await response.json()
    console.log("user in util", user);
    <h1 id="hello">
   ${user.name}
</h1>
    document.getElementById("hello").innerHTML = user.name;
    document.getElementById("peragraph").innerHTML = user.bio;
    document.getElementById("avator").src = user.avatar_url;
    console.log("end of getGithubUser function in util");

    // .then((response) => {
    //     console.log("response in util", response);
    //     return response.json();
    // })
    // .then((user) => {
    //     console.log("user in util", user);
    // });
}

// async function name(params) {
//    await getGithubUser()
// }