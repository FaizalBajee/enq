<?php
$con = mysqli_connect("localhost:8111","root","");
$DB=mysqli_select_db($con,"project");

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$name=$obj['Name'];
$number=$obj['Number'];
$model=$obj['Model'];
$variant=$obj['Variant'];
$location=$obj['Location'];


$insertQ = "INSERT INTO `enquiry`(`Name`, `Number`, `Model`, `Variant`, `Location`) VALUES ('$name',$number,'$model','$variant','$location')";
$R=mysqli_query($con,$insertQ);
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
?>