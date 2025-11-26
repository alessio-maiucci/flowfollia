<?php
session_start(); // Avvia una nuova sessione o riprende una sessione esistente

if ($_SESSION['loginStatus'] == 'success') {

  $arr['loginStatus']=$_SESSION['loginStatus'];
  $arr['username']=$_SESSION['username'];
  echo json_encode($arr);
} else {
  // L'utente non esiste
  $_SESSION['loginStatus'] = 'fail';
  $arr['loginStatus']=$_SESSION['loginStatus'];
  echo json_encode($arr);
}
?>