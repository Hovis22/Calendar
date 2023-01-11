<?php 

$out = $_POST;

$con1 = new mysqli("localhost","root","","calendar");

$sql = "SELECT Id,Name, DayNumber FROM `reminders` WHERE Month='" . $out['month'] . "' AND `Year`='" . $out['year'] . "';";

$sql1 = "SELECT * FROM `reminders` WHERE Month='January';";

$result = mysqli_query($con1, $sql);


$response_arr = array();
while ($row = mysqli_fetch_object($result)) {
  array_push($response_arr,$row);
 
  }




echo json_encode($response_arr);
