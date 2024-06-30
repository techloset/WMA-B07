class Laptop{
    constructor(company, screenSize){
       this.company = company;
       this.screenSize = screenSize;
    }
  
    printCompanyName(){
        console.log("Company Name", this.company)
    }
}

class AdvanceLaptop extends Laptop{
    constructor(supportedDevices, company, screenSize){
      super(company,screenSize)
      this.supportedDevices = supportedDevices
     
    }
}
var advanceloptopobj = new AdvanceLaptop(["camera","keyboard"], "dell", 16)

console.log(advanceloptopobj)

var laptopObj = new Laptop("dell", 14);

var laptopObj = new Laptop("dell", 14);

var laptopObj = new Laptop("dell", 14);

var laptopObj = new Laptop("dell", 14);
var laptopObj = new Laptop("dell", 14);


// var laptop = {
//     color:"black",
//     company: "apple",
//     screenSize: 16,
//     isNew: false,
//     ram:{
//         type:"6",
//         memory:"8GB",
//         company:"sumsung",
//         rgb: false,
//     },
//     supportedOutputDevices: ["camera", "microphone", "hdmi", "speaker"]
// }


// laptop.abc = "abc"
// laptop.isNew = true
// delete laptop.abc

// var laptops = [
//     {
//         color:"black",
//         company: "apple",
//         screenSize: 16,
//         isNew: false,
//         ram:{
//             type:"6",
//             memory:"8GB",
//             company:"sumsung",
//             rgb: false,
//         },
//         supportedOutputDevices: ["camera", "microphone", "hdmi", "speaker"]
//     },
//     {
//         color:"silver",
//         company: "hp",
//         screenSize: 14,
//         isNew: true,
//         ram:{
//             type:"6",
//             memory:"16GB",
//             company:"asus",
//             rgb: false,
//         },
//         supportedOutputDevices: ["camera", "microphone", "hdmi", "speaker"]
//     },
//     {
//         color:"red",
//         company: "dell",
//         screenSize: 13,
//         isNew: false,
//         ram:{
//             type:"6",
//             memory:"8GB",
//             company:"sumsung",
//             rgb: false,
//         },
//         supportedOutputDevices: ["microphone", "hdmi", "speaker"]
//     }
//  ]



//  laptops.forEach((laptop)=>{
//     if (laptop.company == "hp") {
//         console.log(laptop.color);
//     }
   
//  })


// console.log(laptop.hasOwnProperty("sdf"));


// console.log(laptop.ram.company);

// for (var i = 0; i <laptop.supportedOutputDevices.length; i++) {
//     console.log(laptop.supportedOutputDevices[i])
// }