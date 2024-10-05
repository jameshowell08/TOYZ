function validateData(){
    var username=document.getElementById("username");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var confpassword=document.getElementById("confpassword");
    var agreement=document.getElementById("agreement");
    var dob=document.getElementById("dob");
    
event.preventDefault();
    if(username.value.length <8){
        alert("Username length must be at least 8 characters");
    }else if(!email.value.endsWith("@gmail.com")){
        alert("Email must ends with @gmail.com");
    }else if(!checkAlphaNum(password.value)){
        alert("Password must be alphanumeric");
    }else if(confpassword.value!=password.value){
        alert("Confimrm password must be the same as password");
    }else if(!agreement.checked){
        alert("Agreement must be checked");
    }
    else if(dob.value==""){
        alert("Date of birth must be filled");
    }
    else{
        alert("Register successed")
    }

}

function checkAlphaNum(password){
    var isAlpha=false;
    var isNum=false;
    for(let i=0;i<password.length;i++){
        if(isNaN(password[i])){
            isAlpha=true;
        }
        else{
            isNum=true;
        }
        if(isAlpha&&isNum){
            return true
        }
    }
    return false;    
}