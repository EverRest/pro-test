<?php

include_once('connect.php');

class GetAll {
  private $db;

  public function __construct() {
    $this->db = new Connection();
    $this->db = $this->db->dbConnect();
    }


  public function Search() {

  }
}
?>