<?php

try{
  $conn = new mysqli("localhost", "root", "", "flowfollia"); // Crea la connessione al database

// Controlla la connessione
if ($conn->connect_error) {
  die("Connessione fallita: " . $conn->connect_error);

}

// Prepara i parametri
$stmt = $conn->prepare("INSERT INTO utenti (cognome, nome, username, email, password) VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $cognome, $nome, $username, $email, $password);

// Imposta i parametri e esegui
$cognome = $_POST['cognome'];
$nome = $_POST['nome'];
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

if ($stmt->execute()) {
  //echo "Nuovo record creato con successo";
  $arr['regStatus']='success';
  $arr['regMsg']='success';

  echo json_encode($arr);
} 

$stmt->close();
$conn->close();
}
catch(Exception $ex) {
  $arr['regStatus']='fail';
  $arr['regMsg']='fail';

  echo json_encode($arr);
}
?>