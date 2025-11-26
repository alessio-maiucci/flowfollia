<?php
session_start(); // Avvia una nuova sessione o riprende una sessione esistente

// Connessione al database
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "flowfollia";

// Crea connessione
$conn = new mysqli($servername, $username, $password, $dbname);

// Controlla la connessione
if ($conn->connect_error) {
  die("Connessione fallita: " . $conn->connect_error);
}

// Prendi username e password inviati dal form
$user = $_POST['username'];
$pass = $_POST['password'];

// Query per verificare l'esistenza dell'utente
$sql = "SELECT * FROM utenti WHERE username='$user' AND password='$pass'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
  // L'utente esiste nel database
  $_SESSION['username'] = $user; // Imposta la variabile di sessione
  $_SESSION['loginStatus'] = 'success'; // Imposta nella variabile di sessione lo stato della login usato per il check se sei loggato

  $arr['loginStatus']=$_SESSION['loginStatus'];
  $arr['username']=$_SESSION['username'];
  echo json_encode($arr);
  //echo 'success'; // Comunica al client il successo del login
} else {
  // L'utente non esiste
  $_SESSION['loginStatus'] = 'fail';
  $arr['loginStatus']=$_SESSION['loginStatus'];
  echo json_encode($arr);
}

$conn->close(); // Chiudi la connessione
?>