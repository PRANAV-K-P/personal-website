function ValidateEmail() 
{
    var y = document.getElementById("email").value;
    var len = y.length;
    
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(y) || len == 0)
    {
        document.getElementById("emailWarning").innerHTML=""
    }
    else{
        document.getElementById("emailWarning").innerHTML="Enter email format correctly"
    }
}

function isname(){
    var y = document.getElementById("name").value;
    var z = 0;
    z = /\d/.test(y);
    if (z == 0 )
    {
        document.getElementById("nameWaring").innerHTML= ""
    }
    else{
        document.getElementById("nameWarning").innerHTML= "Invalid name"
    }
    
}

function ValidateName(){
    var letters = /^[A-Za-z]+$/;
    var y = document.getElementById("name").value;
    z=y.length
    if(z == 0)
    {
        document.getElementById("nameWarning").innerHTML= "Name cannot be empty"
    } 
    else if(/^[A-Za-z ]+$/.test(y))
    {
        document.getElementById("nameWarning").innerHTML= ""
    }
    else{
        document.getElementById("nameWarning").innerHTML= "Invalid name"
    }   
}
