<?php
$con = mysqli_connect("localhost:8111","root","");
$DB = mysqli_select_db($con ,"project");

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$name=$obj['Name'];
$number=$obj['Number'];
$email=$obj['Email'];
$location=$obj['Location'];

$book="insert into carbooking (Name,Number,Email,Location) values ('$name','$number','$email','$location')";

$B=mysqli_query($con,$book);

if($B){
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