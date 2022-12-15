

<?php 
$dsn = 'mysql:host=localhost;dbname=addictburger';
$user = 'root';
$pass = 'root';
$options = array(
    //set tarmiz
    PDO::MYSQL_ATTR_INIT_COMMAND =>'SET NAMES utf8'
   
);

try{
 $con = new PDO($dsn,$user,$pass,$options);
 $con ->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
// echo 'You are connect Welcome to databas';
}
catch(PDOException $e){
    echo 'Failed to Connect   '.$e->getMessage();
}

