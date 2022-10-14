function fun1(){
    var username1 = document.forms["login"]["username1"].value;
    var password1 = document.forms["login"]["password1"].value;

    if(username1==null || username1=="" ){
        document.getElementById("errorBox").innerHTML = "Enter The User Name";
        return false;
    }

    if(password1==null || password1=="" ){
        document.getElementById("errorBox").innerHTML = "Enter The Password";
        return false;
    }

    if(username1 != '' && password1 != ''){
        alert("Hurrey, Login Successfully.")
    }
    
}




