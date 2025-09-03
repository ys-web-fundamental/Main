"use strict";

const student1 = new Object({
  firstname : "Sanket",
  lastname: "bhagat",
  class: "first Year",
  age : 22,
  gender : "male",
  color : "fair",
  address : "chikatgaon1",
  email : "sanket@gmail.com",
  mobilenumber : "9578452365"

});

const student2 = new Object({
firstname : "sandip",
  lastname: "bhagat",
  class: "first Year first sem",
  age : 21,
  gender : "male",
  color : "black",
  address : "chikatgaon2",
  email : "sandip@gmail.com",
  mobilenumber : "95775421369"
});

const student3 = new Object({
  firstname : "vikas",
  lastname: "bhagat",
  class: "first Year first sem",
  age : 21,
  gender : "male",
  color : "black",
  address : "chikatgaon3",
  email : "pawan@gmail.com",
  mobilenumber : "95775421369"
});

const student4 = new Object({
  firstname : "Tejas",
  lastname: "bhagat",
 class: "BE first year",
  age : 23,
  gender : "male",
  color : "fair",
  address : "chikatgaon4",
  email : "tejas@gmail.com",
  mobilenumber : "7452189635"
});


var studentDetails = [student1,student2,student3, student4];
studentDetails.forEach(studentdetials);

function studentdetials(iteam,index){

    if(iteam.firstname == 'sandip'){
        console.log(iteam.firstname);
        return true;
        
    }
    return false;
    
}

// for( var i= 0; i< studentDetails.length; i++){
//     if(i==1){
//         break; // exit the iteration
//     }
//    var studentName =  studentDetails[i].firstname;
//    var studentaddress =  studentDetails[i].address;
//   // console.log(i);
//    console.log(studentName);
//    //console.log(studentaddress);
// }


for(var index=0; index < studentDetails.length; index++){

    if(studentDetails[index].email == 'sandip@gmail.com'){
        console.log(studentDetails[index].email);
        break;
    }

}

