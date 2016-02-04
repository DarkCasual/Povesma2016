<?php
session_start();
/**
 * Created by PhpStorm.
 * User: Roman
 * Date: 04.02.16
 * Time: 19:00
 */
?>
<html>
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="css/stylesheet.css">
    <link rel="stylesheet" href="css/auth.css">
    <link rel="icon" href="images/favicon.png">
    <Title>
        Вход
    </Title>
</head>
<body style="text-align: center; display: inline-block; background-image: none;" >
<div class="login-form-container">
    <div class="auth-title">Авторизация
    </div>
    <form method="post" class="login-form">
        <table>
            <tr>
                <td>Логин:</td>
                <td>
                        <input name="login" type="text">
                </td>
            </tr>
            <tr>
                <td>Пароль</td>
                <td>
                    <input name="password" type="password">
                </td>
            </tr>
        </table>
        <br>
        <img class="captcha"  onclick="this.src = 'secpic.php?' + Math.random();" src="secpic.php"/>
        <p>Введи капчу:<br><input type="text" name="captcha"></p>
        <input type="submit" class="submit" value="залогиниться">
    </form>
</div>
</body>
</html>
