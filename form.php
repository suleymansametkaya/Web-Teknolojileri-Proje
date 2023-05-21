<!DOCTYPE html>
<html lang="tr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="css/form.css">
    <title>İletişim Formu</title>
</head>
<body>
    
<div class="sonuc-container">
    <div class="sonuc-panel">
        <div class="sonuc">
        <?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $adSoyad = $_POST['ad-soyad'];
    $telefon = $_POST['telefon'];
    $email = $_POST['email'];
    $yas = $_POST['yas'];
    $cinsiyet = $_POST['cinsiyet'];
    $sehir = $_POST['sehir'];
    if (isset($_POST['yetenek'])) {
        $yetenekler = $_POST['yetenek'];
    }
    $mesajBaslik = isset($_POST['mesaj-baslik']) ? $_POST['mesaj-baslik'] : "";
    $mesaj = $_POST['mesaj'];

    echo "<h5>İletişim Formu</h5>";
    echo "<p><b>Ad Soyad: </b>" . $adSoyad . "</p>";
    echo "<p><b>Telefon: </b>" . $telefon . "</p>";
    echo "<p><b>E-Posta: </b>" . $email . "</p>";
    echo "<p><b>Yaş: </b>" . $yas . "</p>";
    echo "<p><b>Cinsiyet: </b>" . $cinsiyet . "</p>";
    echo "<p><b>Şehir: </b>" . $sehir . "</p>";
    echo "<p><b>Yetenek: </b>";
    foreach ($yetenekler as $yetenek) {
        echo  $yetenek ." " ;
    }
    echo "<p><b>Mesaj Başlık: </b>" . $mesajBaslik . "</p>";

    echo "<p><b>Mesaj: </b>" . $mesaj . "</p>";
   
}
?>
<a class="active" href="index.html"><h6>Ana Sayfaya Dön</h6></a>
</div>
</div>
</div>    
</body>
</html>

