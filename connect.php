<?php
try {
	$pdo = new PDO("mysql:dbname=users&pets;host=localhost","root","");
} catch(PDOException $e) {
	echo "Connecting error: ".$e->getMessage();
	exit;
}

?>