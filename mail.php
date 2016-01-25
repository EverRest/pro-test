<?php

$recepient = "medynskyypavlo@gmail.com";
$sitename = "Pet Search";

$name = trim($_GET["name"]);
$phone = trim($_GET["phone"]);

$pagetitle = "New order from site \"$sitename\"";
$message = "Name: $name \nPhone: $phone";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");