
// var fName=document.getElementById("fname");
// var mail=document.getElementById("email");
// var mailfb=document.getElementById("emailfeedback");

function validate(){

    username = document.getElementById('username').value;
    email = document.getElementById('email').value;

    var regFname=/^[a-zA-Z]+$/;    
    var regMail= /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9-]+)\.([a-z]{1,3})([.a-zA-Z]{2,10})$/;

    if(regFname.test(username) && regMail.test(email)){
        return true;
    }
    return false;
}
  



// if fname invalid
// else{
//     fnamefb.style.visibility="visible";
//     return false;

// }


// }
// function passvalue(){
//    alert("hai");

//   const name=document.getElementById("fname").value;
//     localStorage.setItem("NAME",friendname);


// }




// var fnameval=document.getElementById("firstname");
// var  errorfsname=document.getElementById("errorfname");

// var emailval=document.getElementById("emailid");
//  var  erroremailval=document.getElementById("erroremail");

//  function signvalidate(){
//     let status = true;
    
//    console.log(fnameval.value);

//     if (fnameval.value.trim()== "") {

//         errorfsname.innerHTML="Please enter Your First Name";
//          status = false;
//     }
//     if (emailval.value.trim()== "") {
    
//         erroremailval.innerHTML="Please enter Your  Email";
//         status = false;
//     }
//     console.log(status);
//     status = fnamevaldation() && status;

//     status = emailvaldation1() && status;
//     return status;
// }
// // function fnamevaldation(){
   
// //      let regexfn= /^[a-zA-Z]+$/;
// //         if(regexfn.test(fnameval.value))
// //         {
// //             errorfsname.innerHTML="";
// //             return true;
           
// //         }
// //         else{
// //             errorfsname.innerHTML="Please enter a valid name";
// //             errorfsname.style.color="red";
// //             return false;
// //         }
        
// }
// // function emailvaldation1(){

// //     var regexemail=  /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/

// //     if(regexemail.test(emailval.value))
// //     {
// //         erroremailval.innerHTML="";
// //         return true;
       
// //     }
// //     else{
// //         erroremailval.innerHTML="Please enter a valid email id";
// //         erroremailval.style.color="red";
// //         return false;
// //     }
// // }
function save(){
    if(validate()){
        console.log('called save')
        username = document.getElementById('username').value;
        email = document.getElementById('email').value;
        console.log(username); 
        url = location.href + 'submituser?username=' + username + '&email='+email + '&button=save';
        console.log(url);
        location.assign(url);
    }    
    else{
        alert('Please enter valid username & email')
    }
}

function sendEmail(){
    if(validate()){
        console.log("Email ");
        username = document.getElementById('username').value;
        email = document.getElementById('email').value;
        url = location.href + 'submituser?username=' + username + '&email='+email+'&button=sendmail';
        console.log(url);
        location.assign(url);
    }
    else{
        alert('Please enter valid username & email')
    }
}