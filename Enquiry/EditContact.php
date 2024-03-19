<?php
$con = mysqli_connect("localhost:8111","root","");
$DB=mysqli_select_db($con,"project");

$json=file_get_contents('php://input');
$obj=json_decode($json,true);


$id=$obj['id'];
$name=$obj['Name'];
$phone=$obj['Phone'];
$location=$obj['Location'];

$update="UPDATE `addcontact` SET `Name`='$name',`Phone`='$phone',`Location`='$location' WHERE id=$id";

$R=mysqli_query($con,$update);

if($R){
	$MSG='Edited Successfully';
	$json=json_encode($MSG);
	echo $json;
}
else{
	$MSG='Error';
	$json=json_encode($MSG);
	echo $json;
}
mysqli_close($con);
?>