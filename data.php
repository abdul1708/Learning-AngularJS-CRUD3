<?php

$host='localhost';
$user='root';
$pass='';
$db='angular';

$link=mysqli_connect($host, $user, $pass, $db) or die(mysqli_error($link));

$query="SELECT * FROM users";
$result=mysqli_query($link, $query) or die('koneksi gagal');
  



while ($row=mysqli_fetch_assoc($result)) {
	$output[] = $row;	
}


echo json_encode($output);



?>