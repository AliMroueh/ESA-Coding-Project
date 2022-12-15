<?php

//session_start();

include "db.php";

$input = file_get_contents("php://input");//l7ta jyb data min lbody
$decode = json_decode($input, true);

$name = $decode["name"];
$nbTable = $decode["nbTable"];


//$msg = "";

// if($_SERVER["REQUEST_METHOD"] == "POST") {
// 	$name = $_POST['name'];
//     $time = $_POST['numberTable'];
	


// 	if(empty($_POST['name']) && empty($_POST['numberTable'])) {
// 		$msg = "Please complete the information for book table adress";
// 	}
	
// 	if(empty($_POST['name'])) {
// 		$msg = " Name is required";
// 	}
	
// 	if(empty($_POST['numberTable'])) {
// 		$msg = "number table is required";
// 	}else{
    
        $ad = $con->prepare("INSERT INTO orders (status,orderType,customerName,timeOrder,phoneNumber,datedelivery,address,city,deliveryPrice,nbOfTable,message) VALUES (":zstatus,:zorderType,:zname,:ztime,:zphone,:zdatedelivery,:zaddress,:zcity,:zdeliveryPrice,:ztable,:zmessage)");
        $ad->execute(array(
            
             'zstatus'=>'Pending',
             'zorderType'=>'delivery',
             'zname'=>$name,
             'ztime'=>'';
             'zphone'=>'',
             'zdatedelivery'=>'',
             'zaddress'=>'',
             'zcity'=>'',
             'zdeliveryPrice'=>'',
             'ztable'=>$numberTable,
             'zmessage'=>'booktable',
             
        ));
        
        if($ad){
                 echo json_encode(["success"=>true,"message"=>"user Add Successfully"]);
        }else{
                  json_encode(["success"=>false,"message"=>$msg]);
        }	
    //}
	
	
	

//}