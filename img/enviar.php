<?php
    $nome = addslashes($_POST['nome']);
    $email = addslashes($_POST['email']);
    $numero = addslashes($_POST['numero']);
    $avaliacao = addslashes($_POST['avaliacao']);

    $para = "manitinhu@gmail.com";
    $assunto = "Avaliação Site TECODE";

    $corpo = "Nome: ".$nome."\n"."E-mail: ".$email."\n"."Avaliação do site: ".$avaliacao;

    $cabeca = "From: email@tecode.com"."\n"."Reply-to: " .$email."\n"."X=Mailer:PHP/".phpversion();

    if(mail($para,$assunto,$corpo,$cabeca)){
        echo '<script> alert("email enviado com sucesso!")</script>';
    }else{
        echo '<script> alert("Houve um erro ao enviar o email!")</script>';
    }






?>