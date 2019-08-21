<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');

$idsol = $_GET["idsol"];


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

$sql = "SELECT * FROM consideracion where idsol='".$idsol."' order by orden asc";
$myArray = array();
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $myArray[] = $row;
    //    echo "id: " . $row["id"]. " - Name: " . $row["nombre"]. " " . $row["costo"]. "<br>";
    }
} else {
   // echo "0 results";
}
echo json_encode($myArray);
$conn->close();
?>