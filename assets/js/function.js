"use strict";

/*
This function will take care the addition of two number
parameter NUmber1 and number 2
paramter should be integer
*/
// function addition(number1, number2){
//     var result = number1 + number2;
//     return result;
// }

// function subtrction(number1,number2){
//     let sub = number1 - number2;
//     return sub;
// }

// function multiplication(num1, num2){
//     let multiplication = num1 * num2;
//     return multiplication;
// }

// var data = addition(67,45);
// console.log(data);
// var data = addition(70,45);
// console.log(data);
// var data = addition(80,98);
// console.log(data);
// var data = addition(85,15);
// console.log(data);
// var data = addition(87,90);
// console.log(data);
// var data = addition(83,4444444);
// console.log(data);
// var data = addition(2222222222,8888888888);
// console.log(data);
// var data = addition(11111,6666666);
// console.log(data);


// console.log('------------------------Subtrction------------');

// var subtrction = subtrction(78,50);
// console.log(subtrction);
// console.log('------------------------Subtrction------------');

// var mul = multiplication(78,50);
// console.log(mul);

function getStudentNameByRoleNumber(roleNumber,studentData){
   var Slenght = studentData.length;
   var studentName;

   if(Slenght < roleNumber){
    studentName = 'There is no any student for this role number';
   } else{
     studentName = studentData[roleNumber];
   }
    return studentName;
}

let student1 = "Sandip,studet,asjhash";
let student2 = "Tejas";
let student3 = "Kartik";
let student100 = "pawan";
 //console.log(student1);
// console.log(student2);
// console.log(student3);
// console.log(student100);

let students = ["sandip","Tejas","kartik","pawan","vikas","student190","sandip9","Tejas8","kartik7","pawan5","vikasf","student100"];
//var studentName = getStudentNameByRoleNumber(50,students);

console.log(students[0]);

// var person = { 
//   name:"Vikas",
//   color: "fair",
//   age:25,
//   education: "Diploma",
//   bike:"Platina",
//   village : "chikatgaon",
//   fathername :"Dilip"
// };

// var fullname =person.name + " " + person.fathername;
// console.log(fullname);


// var sandip ={};
// sandip.education = "Be Mechanical";
// sandip.birthday = "1/1";
// sandip.village = "chikatgaon";


// console.log(sandip);

const person = new Object({
  firstname : "Sanket",
  lastname: "bhagat"
});

const person2 = new Object({
  firstname : "sandip",
  lastname: "bhagat"
});

const person3 = new Object({
  firstname : "vikas",
  lastname: "bhagat"
});

const person4 = new Object({
  firstname : "vikas",
  lastname: "bhagat",
  village: "Chikatgaon"
});

const person5 = new Object({
  firstname : "vikas",
  lastname: "bhagat",
  village: "Chikatgaon"
});


var studentDetails = [person,person2,person3];

console.log(studentDetails[2].firstname);