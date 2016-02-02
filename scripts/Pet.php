<?php

include_once('connect.php');

class Pet {
  private $db;

  public function __construct() {
    $this->db = new Connection();
    $this->db = $this->db->dbConnect();
    }


  public function Save($petsName, $description, $ownerId, $type, $sort, $address) {
    $st->$this->db->prepare("insert into pets ( id, pets_name, description, owner_id, type, sort, address, photo, finded) values ('', pets_name =?, description =?, owner_id =?, type =?, sort =?, address =?, photo =?)");
    $st->bindParam(1, $petsName);
    $st->bindParam(2, $description);
    $st->bindParam(3, $ownerId);
    $st->bindParam(4, $type);
    $st->bindParam(5, $sort);
    $st->bindParam(6, $address);
    $st->execute();
  }

  public function Get() {
	
  }

  public function Update() {

  }

  public function SetFound() {
    $st->$this->db->prepare('select *');
  }
}
?>