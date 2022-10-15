<?php

$username2 = $_POST['username2'];
$email = $_POST['email'];
$mobile = $_POST['mobile'];
$password2 = $_POST['password2'];
$conpassword = $_POST['conpassword'];


if (!empty($username2) || !empty($email) || !empty($mobile) || !empty($password2) || !empty($conpassword))

{
    $host = "localhost";
    $dbusername = "root";
    $dbpassword = "";
    $dbname = "login";


    $conn = new mysqli($host, $dbusername, $dbpassword, $dbname);

    if(mysqli_connect_error()){

        die('Connect Error ('. mysqli_connect_error() .')' . mysqli_connect_error());

    }
    else{
        $SELECT = "SELECT email FROM registration WHERE email = ?  Limit 1";
         
        $INSERT = "INSERT Into registration (username2 , email, mobile, password2, conpassword)values(?,?,?,?,?)";

        $stmt = $conn->prepare($SELECT);
        $stmt->bind_param("s",$email);
        $stmt->execute();
        $stmt->bind_result($email);
        $stmt->store_result();
        $rnum = $stmt->num_rows;

         


        if ($rnum==0){
        $stmt->close();
        $stmt = $conn->prepare($INSERT);
        $stmt->bind_param("ssiss", $username2,$email,$mobile,$password2,$conpassword);
        $stmt->execute();
        echo "New record has been Created Sucessfully.";
        }

        else{
            echo "Someone already registered using this Email or Mobile Number.";
        }
        $stmt->close();
        $conn->close();
    }
}
else{
    echo "ALL Fields Are Required.";
    die();
}




?>