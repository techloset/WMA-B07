var listOfStudentsNames = ["Student1", "Student2", "Student3", "Student4", "Student5"]


function getElements(element, index) {
   if (element == "Student2") {
      console.log("You're passed");
   }
}

var result = listOfStudentsNames.forEach(getElements);

// var result = listOfStudentsNames.slice(1,10)
// console.log("return result",result)
// console.log("orginal",listOfStudentsNames);

// listOfStudentsNames.splice(listOfStudentsNames.length-1,1)
// listOfStudentsNames.splice(0,1)

// listOfStudentsNames.splice(listOfStudentsNames.length,0,"Naveed" )
// listOfStudentsNames.splice(2,0, "Ali")
// listOfStudentsNames.splice(0,0,"ali","umar")


// listOfStudentsNames.push("Umar","Naveed","Ali");
// listOfStudentsNames.unshift("Abu bakar","Usman")
// listOfStudentsNames.pop()
// listOfStudentsNames.pop()
// listOfStudentsNames.shift()
// listOfStudentsNames.shift()


// listOfStudentsNames.push("Naveed");
// console.log(listOfStudentsNames);

// listOfStudentsNames[listOfStudentsNames.length] = "Umar"
// listOfStudentsNames[5] = "Umar"

// listOfStudentsNames[1] = "new name"

// for (var index = 0; index < listOfStudentsNames.length; index++) {
//    console.log(listOfStudentsNames[index])
// }

