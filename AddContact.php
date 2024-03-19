<?php
$con = mysqli_connect("localhost:8111","root","");
$DB=mysqli_select_db($con,"project");

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$name=$obj['Name'];
$phone=$obj['Phone'];
$location=$obj['Location'];

$QI="INSERT INTO `addcontact`( `Name`, `Phone`, `Location`) VALUES ('$name','$phone','$location')";

$R=mysqli_query($con,$QI);

if($R){
$MSG='Updated';
	$json=json_encode($MSG);
	echo $json;
}
else{
	$MSG='Failed';
	$json=json_encode($MSG);
	echo $json;
}
mysqli_close($con);
?>