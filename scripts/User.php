<?php

include_once('connect.php');

class User {
  private $db;

  public function __construct() {
    $this->db = new Connection();
    $this->db = $this->db->dbConnect();
  }


  public function Login( $name, $pass) {
    if(!empty($name) && !empty($pass)) {
      $st = $this->db->prepare("select * from users where name =? and password =?");
      $st->bindParam(1, $name);
      $st->bindParam(2, $pass);
      $st->execute();

    if($st->rowCount() == 1) {
      echo "User verified, Access granted.";
    }else {
      echo "Incorrect username or password.";
  }

  }else{
     echo "Please enter username and password";
  }
}

  public function Register() {

  }
}

?>