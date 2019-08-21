<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$nombre =  $_GET["nombre"];


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

$sql = "INSERT INTO incidencias (nombre)
VALUES ('".$nombre."')";

$sql1 = "select * from incidencias order by id desc limit 1";
$myArray = array();
if ($conn->query($sql) === TRUE) {

    $result = $conn->query($sql1);

   if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $myArray[] = $row;
    
    }
   } else {
  
   }


    echo "";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

echo json_encode($myArray);
$conn->close();
?>