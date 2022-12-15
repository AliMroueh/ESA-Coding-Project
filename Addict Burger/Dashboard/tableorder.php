<?php

include "db.php";
$stmt=$con->prepare(" SELECT * FROM bookatable WHERE 1");
$stmt->execute();
$row = $stmt->fetchAll();

echo json_encode($row);