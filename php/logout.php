<?php
session_start(); // Riprende la sessione esistente
session_destroy(); // Distrugge la sessione
echo 'logout_success'; // Comunica al client il successo del logout
?>