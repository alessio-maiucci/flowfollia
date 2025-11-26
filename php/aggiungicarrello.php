<?php
    session_start();
    $carrello = $_POST['carrello'];
    $_SESSION['carrello'] = $carrello;
    echo $carrello;
?>