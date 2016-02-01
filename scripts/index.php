<?php

include_once('User.php');

if(isset($_POST['submit'])) {
	$name = $_POST['user'];
	$pass = $_POST['password'];

	$object = new User();
	$object->Login($name, $pass);
}

?>

<html>
<head>
	<title>Form</title>
</head>
<body>
	<form method="post" action="index.php">
		<p>
			Username: 
			<input type="text" name="user" /> 
		</p>
		<p>
			Password:
			<input type="password" name="password" />
		</p>
		<p>
			<input type="submit" name="submit" value="Login" />
		</p>
	</form>
</body>
</html>