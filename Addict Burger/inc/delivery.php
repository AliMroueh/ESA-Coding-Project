<?php

//session_start();


include "db.php";

$input = file_get_contents("php://input");//l7ta jyb data min lbody
$decode = json_decode($input, true);

$name=$decode["name"];
$time=$decode["time"];
$phone=$decode["phone"];
$date=$decode["date"];
//$city =$decode["city"];
$address=$decode["address"];

    
 $stmt = $con->prepare("INSERT INTO orders (status, orderType, customerName, timeOrder, phoneNumber, datedelivery, address, city, deliveryPrice, nbOfTable, message) VALUES(zstatus, zorderType, zname, ztime, zphone, zdatedelivery, zaddress, zcity, zdeliveryPrice, ztable, zmessage)");

	     $stmt->execute(array(
		 'zstatus'=>'Pending',
			'zorderType'=>'delivery',	
				'zname'=>$name,
			'ztime'=>$time,
			'zphone'=>$phone,
			'zdatedelivery'=>$date,
			'zaddress'=>$address,
			'zcity'=>'null',
			'zdeliveryPrice'=>2,
			'ztable'=>2,
			'zmessage'=>'hello'   
));
	
	// if($ad){
	// 		 echo json_encode(["success"=>true,"message"=>"BookA table information Add Successfully"]);
	// }else{
	// 		  json_encode(["success"=>false,"message"=>"Server Problems"]);
	// }
