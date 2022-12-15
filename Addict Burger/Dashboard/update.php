<?php

include "connect.php";
$input = file_get_contents("php://input");
$decode = json_decode($input, true);

$id = $decode["id"];
$name = $decode["name"];

//$smt->execute();

$stmt = $con->prepare("UPDATE user SET name = ? WHERE ID=?");
$stmt->execute(array($name,$id));

if($stmt){
           echo json_encode('updated successfully');
}else{
            echo json_encode("Did not update succesfuly");
}