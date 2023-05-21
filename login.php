<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Giriş Sayfası</title>
    <link rel="stylesheet" type="text/css" href="css/loginphp.css">
    <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap" rel="stylesheet">
</head>
<body>


<div class="sonuc-container">
    <div class="sonuc-panel">
        <div class="sonuc">
<?php 

$kullaniciadi = $_POST['email'];
$parola = $_POST['sifre'];

if($kullaniciadi=="b221210103@sakarya.edu.tr" && $parola == "b221210103")
{
    echo "<h1>Giriş başarılı!</h1>  ";
    echo "<h2> $kullaniciadi </h2>";
    echo "<h1>Hoşgeldiniz!</h1>";
    
       
}
else    
{
    echo "<h1>Giriş başarısız.</h1>";
    echo "<p>5 Saniye İçinde Giriş yap sayfasına yönlendirileceksiniz.</p>";
    header("Refresh: 5; url=login.html");
}
?>
<a class="active" href="index.html"><h3>Ana Sayfaya Dön</h3></a>
</div>
</div>
</div>

    
</body>
</html>


