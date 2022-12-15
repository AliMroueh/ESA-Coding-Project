<?php

//session_start();

include "db.php";
$input = file_get_contents("php://input");//l7ta jyb data min lbody
$decode = json_decode($input, true);

$name = $decode["name"];
$time = $decode["time"];
$phone = $decode['phone'];
$date =$decode['date'];
$people =$decode['people'];
$nbtable =$decode['nbtable'];

// echo json_encode($nbtable);



// $msg = "";

// 	if(empty($_POST['name']) && empty($_POST['numberTable']) && empty($_POST['phone']) && empty($_POST['date']) && empty($_POST['time']) && empty($_POST['nbpepole'])) {
// 		$msg = "Please complete the information for book A table adress";
// 	}
	
// 	if(empty($_POST['name'])) {
// 		$msg = " Name is required";
// 	}
	
// 	if(empty($_POST['numberTable'])) {
// 		$msg = "number table is required";
// 	}
	
// 	if(empty($_POST['phone'])) {
// 		$msg = "A phone is required";
// 	}
	
// 	if(empty($_POST['date'])) {
// 		$msg = "A date is required";
// 	}
// 	if(empty($_POST['time'])) {
// 		$msg = "A time is required";
// 	}
//     if(empty($_POST['nbpepole'])) {
// 		$msg = "A number pepole is required";
// 	}else{
    
        $ad = $con->prepare("INSERT INTO bookatable(nameCustomer, numberTable, numberPepole, phone, date, time, message, userId, status) VALUES(:zname,:ztable,:zpeople,:zphone,:zdate,:ztime,:zmessage,:zuserId,:zstatus)");
    
		$ad->execute(array(
                'zname'=>$name,
                'ztable'=>$nbtable,
                'zpeople'=>$people,
                'zphone'=>$phone,
                'zdate'=>$date,
                'ztime'=>$time,
                'zmessage'=>'hello wolrd',
                'zuserId'=>2,
                'zstatus'=>5     
        ));
        
        if($ad){
                 echo json_encode(["success"=>true,"message"=>"BookA table information Add Successfully"]);
        }else{
                  json_encode(["success"=>false,"message"=>"Server Problems"]);
        }	
//     }
	

// }