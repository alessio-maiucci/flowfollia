<?php
session_start(); 

if (isset($_SESSION['carrello'])) {
  $carrello=$_SESSION['carrello'];

} else {
  $carrello="";

}

echo $carrello;
?>