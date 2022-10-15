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
function fun2(){
    var username2 = document.forms["register"]["username2"].value;
    var email = document.forms["register"]["email"].value;
    var mobile = document.forms["register"]["mobile"].value;
    var password2 = document.forms["register"]["password2"].value;
    var conpassword = document.forms["register"]["conpassword"].value;

    if(username2==null || username2==""){
        document.getElementById("errorBox").innerHTML =
        "Enter The User Name"
        return false;
    }
    
    if(email==null || email==""){
        document.getElementById("errorBox").innerHTML =
        "Enter The Email"
        return false;
    }

    if(mobile==null || mobile==""){
        document.getElementById("errorBox").innerHTML =
        "Enter The Mobile Number"
        return false;
    }

    if(password2==null || password2==""){
        document.getElementById("errorBox").innerHTML =
        "Enter The Password"
        return false;
    }

    if(conpassword==null || conpassword==""){
        document.getElementById("errorBox").innerHTML =
        " RE-Enter The Password "
        return false;
    }

    if(password2 != conpassword){
        document.getElementById("errorBox").innerHTML =
         "Password Do Not Match"
        return false;
    }

    if (username2 != '' && email != '' && mobile != '' && password2 != '' && conpassword!= '' ){
        alert ("You Are Successuflly Registered.")
    }

}




