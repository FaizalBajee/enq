<?php
$con = mysqli_connect("localhost:8111","root","");
$DB=mysqli_select_db($con,"project");

$json=file_get_contents('php://input');
$obj=json_decode($json,true);

$del=$obj['id'];

$delete="DELETE FROM `addcontact` WHERE id=$del";

$R=mysqli_query($con,$delete);
if($R){
	$MSG='Deleted';
	$json=json_encode($MSG);
	echo $json;
}
else{
	$MSG='Unsuccessfull';
	$json=json_encode($MSG);
	echo $json;
}


?>