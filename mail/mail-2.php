<?php

$recepient = "youare.tbc@gmail.com"; // Замените на свой адрес электронной почты
$siteName = "YOUARE замовлення";

$phone = trim($_POST["contact"]); // Используем "contact" из второй формы

$message = "Телефон: $phone";

$pagetitle = "Заявка с сайта \"$siteName\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");

?>

