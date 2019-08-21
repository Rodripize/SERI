<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$nombre =  $_GET["nombre"];
$orden =  $_GET["orden"];
$inci = $_GET["idinci"];

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

$sql = "INSERT INTO sintomas (nombre, orden, idinci)
VALUES ('".$nombre."', '".$orden."', '".$inci."')";

$myArray = array();
if ($conn->query($sql) === TRUE) {

    $myArray=array("estado" => "1");
  //  echo "Ok";
} else {
    $myArray=array("estado" => "0");
    //echo "Error: " . $sql . "<br>" . $conn->error;
}

echo json_encode($myArray);
$conn->close();
?>