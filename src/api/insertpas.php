<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$detalle =  $_GET["detalle"];
$idsol =  $_GET["idsol"];
$orden = $_GET["orden"];

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

$sql = "INSERT INTO pasos (detalle, idsol, orden)
VALUES ('".$detalle."', '".$idsol."', '".$orden."')";

$myArray = array();
if ($conn->query($sql) === TRUE) {

    
    echo "Ok";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}


$conn->close();
?>