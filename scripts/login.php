<?php

include_once('User.php');

if(isset($_POST['submit'])) {
  $name = $_POST['user'];
  $pass = $_POST['password'];

  $object = new User();
  $object->Login($name, $pass);
}

?>
