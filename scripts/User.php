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

  public function Register( $name, $pass, $phone, $email) {
    if(!empty($name) && !empty($pass) && !empty($phone) && !empty($email)) {
      $st = $this->db->prepare("select * from users where name =?");
      $st->bindParam($name);
      $st->execute();
      if($st->rowCount() == 0) {
         $st = $this->db->prepare("insert into users ( id, name, password, phone, email) values ('', name =?, password =?, phone =?, email ?=)");
         $st->bindParam(1, $name);
         $st->bindParam(2, $pass);
         $st->bindParam(3, $phone);
         $st->bindParam(4, $email);
         $st->execute();
      }else{
        echo "Please use another nickname";
      }
    }else{
      echo "Please entry name/pass/phone/email!";
    }

  }
}

?