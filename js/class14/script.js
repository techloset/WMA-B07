
function addNumbers(a,b,...args) {
    console.log(a,b);
    let firstArg = args[1]
    console.log("firstArg",firstArg);
    // args.forEach((val,index)=>{
    //   console.log("val",val);
    // })
}
addNumbers(1,21,123123,123,4,4124)





// var longString = "I love"
// var countryName = "Pakistan"
// var result = longString + " " + countryName
// var result2 = `${longString} ${countryName} forever`



// let car = {
//     color: 'red',
//     company: 'kia',
//     model: 2022,
//     numberOfDoors: 4,
// }

// // let {company, ...rest} = car
// // console.log("rest",rest);
// // console.log("company",company);
// var listOfCarNames = ["Kia","Honda", "Toyota"]
// let [firstCar, ...rest] = listOfCarNames
// console.log("firstCar",firstCar);
// console.log("rest",rest);

// let restOfCarProperties = {
//     ...car,
//     ccEngine: 1500, 
//     auto: true,
//     price: 234235,
// }


// console.log("restOfCarProperties",restOfCarProperties);

// let newObject = {
//     ...car,
//     ...restOfCarProperties,
//     anynew: "any new value"
// }

// let newObject = Object.assign(car, restOfCarProperties)

// let values = Object.seal(car)
// car.color = "safd"
// car.newKey = "new key created"
// console.log("car",car);


// let values = Object.seal(car)
// car.color = "safd"
// car.newKey = "new key created"
// console.log("car",car);



// let values = Object.freeze(car)
// car.color = "safd"
// let values = Object.entries(car)
// console.log("values",values[1][1]);

// ['color', 'company', 'model', 'numberOfDoors']
// let values = Object.values(car)
// let keys = Object.keys(car)
// let keys = []
// for (const key in car) {
//     keys.push(key)
// }
// car.anynewKey = true
// delete car.anynewKey



// console.log("object", result);

// var nums = [10,20,30,40,50,60]
// var namesList = [...nums,"Ali",23, "Naveed", "Ali"]
// console.log("namesList",namesList);


// var result = namesList.indexOf("Naveed")
// var result = nums.includes(20)

// function reduceCallBack(lastReturn, currentItem, index, array) {
//     return lastReturn + currentItem
// }
// var result = nums.reduce(reduceCallBack)
// console.log("namesList",result);

// function someCallback(currentValue, index, array) {
//     if (typeof currentValue === "string") {
//         return currentValue
//     }
// }
// var result = namesList.some(someCallback);