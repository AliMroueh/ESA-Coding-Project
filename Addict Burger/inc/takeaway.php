<?php

//session_start();

include "db.php";
$input = file_get_contents("php://input");//l7ta jyb data min lbody
$decode = json_decode($input, true);

$name = $decode["name"];
$time = $decode["time"];
$phone = $decode["phone"];
$date = $decode["date"];
$massage=$decode["massage"];
 
    console.log(input)
	$ad = $con->prepare("INSERT INTO orders(status,orderType,customerName,timeOrder,phoneNumber,datedelivery,address,city,deliveryPrice,nbOfTable,message) VALUES (:zstatus,:zorderType,:zname,:ztime,:zphone,:zdatedelivery,:zaddress,:zcity,:zdeliveryPrice,:ztable,:zmessage)");
        $ad->execute(array(
		'zstatus'=>'Pending',
		'zorderType'=>'delivery',
		'zname'=>$name,
		'ztime'=>$time,
		'zphone'=>$phone,
		'zdatedelivery'=>$date,
		'zaddress'=>'null',
		'zcity'=>'null',
		'zdeliveryPrice'=>'null',
		'ztable'=>'null',
		'zmessage'=>'booktable',
            
            
    ));
        
        if($ad){
                 echo json_encode(["success"=>true,"message"=>"user Add Successfully"]);
        }else{
                  json_encode(["success"=>false,"message"=>$msg]);
        }	

	
	

// }