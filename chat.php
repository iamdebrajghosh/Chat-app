<?php
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $message = $_POST["message"];
    $username = $_SESSION["username"];

    if (!empty($message)) {
        $formattedMessage = "<strong>$username:</strong> $message <br>";
        file_put_contents("chatlog.html", $formattedMessage, FILE_APPEND);
    }
}
?>
