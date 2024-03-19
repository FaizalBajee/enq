<?php
$con = mysqli_connect("localhost:8111","root","");
$DB=mysqli_select_db($con,"project");

$json = file_get_contents('php://input');

$obj = json_decode($json,true);

$getSQL="SELECT * FROM `enquiry`";

$result = $con->query($getSQL);


//create an array
    $Earray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $Earray[] = $row;
    }
    echo json_encode($Earray);


//if ($result !== false && $result->num_rows > 0) {
//  while($row = $result->fetch_assoc()) {
//	  $name=$row["Name"];
//	  $number=$row["Number"];
//	  $model=$row["Model"];
//	  $variant=$row["Variant"];
//	  $location=$row["Location"];
   // echo  $row["Name"]."     ". $row["Number"]. "     " . $row["Model"]."     ". $row["Variant"]."     ". $row["Location"]."     ";
//  }
//} 
//else {
//  	  $name="";
//	  $number="";
//	  $model="";
//	  $variant="";
//	  $location="";
//}
//$Response[]=array("Name"=>$name,"Number"=>$number,"Model"=>$model,"Variant"=>$variant,"Location"=>$location);

//echo json_encode($Response);
	
?>