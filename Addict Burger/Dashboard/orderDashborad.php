<?php

include "db.php";
$stmt=$con->prepare("SELECT * FROM orders");
$stmt->execute();
$row = $stmt->fetchAll();

echo json_encode($row);