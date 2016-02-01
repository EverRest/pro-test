<?php

include_once('connect.php');

class Pet {
  private $db;

  public function __construct() {
    $this->db = new Connection();
    $this->db = $this->db->dbConnect();
    }


  public function Save() {

  }

  public function Get() {
	
  }

  public function Update() {

  }

  public function SetFound() {
  	
  }
}
?>