<?php

include "connect.php";

if(isset($_GET['id'])){
    $id=$_GET['id'];
}

$stmt = $con->prepare("DELETE FROM  BookATable WHERE id = :zid");
$stmt->bindParam(':zid',$id);
$stmt->execute();

if($stmt){
    echo json_encode('the category was deleted successfully');
}