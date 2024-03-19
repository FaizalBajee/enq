<?php
$con = mysqli_connect("localhost:8111","root","");
$DB=mysqli_select_db($con,"project");

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$email=$obj['Email'];
$password=$obj['Password'];



$CheckSQL = "SELECT * FROM login WHERE Email='$email' AND Password='$password'";
$check = mysqli_fetch_array(mysqli_query($con,$CheckSQL));
if(isset($check)){
	
$EmailExistMSG = 'Successfully Login';

$EmailExistJson = json_encode($EmailExistMSG);

echo $EmailExistJson ;
}
else{
	
	//$Sql_Query ="INSERT INTO `login`(`Email`, `Password`) VALUES ('$email','$password')";
	//mysqli_query($con,$Sql_Query);
	
	$MSG='User not exist';
	$json=json_encode($MSG);
	echo $json;
	
}
mysqli_close($con);
?>