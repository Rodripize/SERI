<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$idinc =  $_GET["idinc"];
$idsin1 = $_GET["idsin1"];
$idsin2 = $_GET["idsin2"];
$idsin3 = $_GET["idsin3"];
$idsin4 = $_GET["idsin4"];



$servername = "localhost";
$username = "root";
$password = "270491";
$dbname = "seri_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$firststat = "";
$secondstat = "";
$thirdstat = "";
$fourthstat = "";
$stat = false;
$counter = 0;

$var1="";
$var2="";
$var3="";
$var4="";

if($idsin1 > 0){

    $counter = $counter +1;
    $firststat = "and idsin1 in ('".$idsin1."', '".$idsin2."', '".$idsin3."', '".$idsin4."')";
    $stat = True;

    if($counter==1){
        $var1 = $idsin1;
    }
}
if($idsin2 > 0){


    $counter = $counter +1;
    if($stat){
        $secondstat = "and idsin2 in ('".$idsin1."', '".$idsin2."', '".$idsin3."', '".$idsin4."')";
    }
    else{
        $secondstat = "and idsin2 in ('".$idsin1."', '".$idsin2."', '".$idsin3."', '".$idsin4."')";
        $stat = True;
    }

    if($counter==1){

        $var1 = $idsin2;
    }
    else if($counter==2){
        $var2 = $idsin2;
    }

   



    
}
if($idsin3 > 0){

    $counter = $counter +1;
    if($stat){
        $thirdstat = "and idsin3 in ('".$idsin1."', '".$idsin2."', '".$idsin3."', '".$idsin4."')";
    }
    else{
        $thirdstat = "and idsin3 in ('".$idsin1."', '".$idsin2."', '".$idsin3."', '".$idsin4."')";
        $stat = True;
    }


    if($counter==1){

        $var1 = $idsin3;
    }
    else if($counter==2){
        $var2 = $idsin3;
    }

    else if($counter==3){
        $var3 = $idsin3;
    }
    


    
}
if($idsin4 > 0){


    $counter = $counter +1;
    if($stat){

        $fourthstat = "and idsin4 in ('".$idsin1."', '".$idsin2."', '".$idsin3."', '".$idsin4."')";

    }
    else{
        $fourthstat = "and idsin4 in ('".$idsin1."', '".$idsin2."', '".$idsin3."', '".$idsin4."')";

        $stat = True;
    }


    if($counter==1){

        $var1 = $idsin4;
    }
    else if($counter==2){
        $var2 = $idsin4;
    }

    else if($counter==3){
        $var3 = $idsin4;
    }
    else if($counter==4){
        $var4 = $idsin4;
    }
    
}

$state = "";

if($counter==1){

    $state ="and (idsin1) in (".$var1.") or (idsin2) in (".$var1.") or (idsin3) in (".$var1.") or (idsin4) in (".$var1.")";
    
}
else if($counter==2){
    $state ="and (idsin1,idsin2) in ((".$var1.",".$var2."),(".$var2.",".$var1.")) 
    or (idsin2,idsin3) in ((".$var1.",".$var2."),(".$var2.",".$var1."))  or 
    (idsin2,idsin4) in ((".$var1.",".$var2."),(".$var2.",".$var1."))  or
    (idsin1,idsin4) in ((".$var1.",".$var2."),(".$var2.",".$var1."))  or 
    (idsin1,idsin3) in ((".$var1.",".$var2."),(".$var2.",".$var1."))  or
    (idsin3,idsin4) in ((".$var1.",".$var2."),(".$var2.",".$var1."))  ";
}

else if($counter==3){
    $state ="and (idsin1,idsin2,idsin3) in ((".$var1.",".$var2.",".$var3."),(".$var1.",".$var3.",".$var2."),(".$var2.",".$var1.",".$var3."),(".$var2.",".$var3.",".$var1."),(".$var3.",".$var1.",".$var2."),(".$var3.",".$var2.",".$var1.")) 
    or (idsin1,idsin3,idsin4) in ((".$var1.",".$var2.",".$var3."),(".$var1.",".$var3.",".$var2."),(".$var2.",".$var1.",".$var3."),(".$var2.",".$var3.",".$var1."),(".$var3.",".$var1.",".$var2."),(".$var3.",".$var2.",".$var1."))  or 
    (idsin2,idsin3,idsin4) in ((".$var1.",".$var2.",".$var3."),(".$var1.",".$var3.",".$var2."),(".$var2.",".$var1.",".$var3."),(".$var2.",".$var3.",".$var1."),(".$var3.",".$var1.",".$var2."),(".$var3.",".$var2.",".$var1."))  or
    (idsin1,idsin2,idsin4) in ((".$var1.",".$var2.",".$var3."),(".$var1.",".$var3.",".$var2."),(".$var2.",".$var1.",".$var3."),(".$var2.",".$var3.",".$var1."),(".$var3.",".$var1.",".$var2."),(".$var3.",".$var2.",".$var1."))   ";
}
else if($counter==4){
    $state ="and (idsin1,idsin2,idsin3,idsin4) 
     in ((".$var1.",".$var2.",".$var3.",".$var4."),(".$var1.",".$var3.",".$var4.",".$var2."),(".$var1.",".$var4.",".$var3.",".$var2."),
     (".$var2.",".$var1.",".$var3.",".$var4."),(".$var2.",".$var3.",".$var4.",".$var1."),(".$var2.",".$var4.",".$var1.",".$var3."),
     (".$var3.",".$var1.",".$var2.",".$var4."),(".$var3.",".$var2.",".$var4.",".$var1."),(".$var3.",".$var4.",".$var1.",".$var2."),
     (".$var4.",".$var1.",".$var2.",".$var3."),(".$var4.",".$var2.",".$var3.",".$var1."),(".$var4.",".$var3.",".$var1.",".$var2.")) " ;
     
    }


$sql = "SELECT * FROM solucion where idinci='".$idinc."' ".$state." order by cost asc";

$myArray = array();
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $myArray[] = $row;
    
    }
} else {
  
}
echo json_encode($myArray);
$conn->close();
?>