<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Form verilerini al
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

    // Form verilerini işle veya başka bir işlem yap
    // Örneğin, form verilerini veritabanına kaydetmek, e-posta göndermek vb.

    // Örnek çıktı
    echo "Ad Soyad: " . $adSoyad . "<br>";
    echo "Telefon: " . $telefon . "<br>";
    echo "E-Posta: " . $email . "<br>";
    echo "Yaş: " . $yas . "<br>";
    echo "Cinsiyet: " . $cinsiyet . "<br>";
    echo "Şehir: " . $sehir . "<br>";
    foreach ($yetenekler as $yetenek) {
        echo $yetenek . "<br>";
    }
    echo "Mesaj Başlık: " . $mesajBaslik . "<br>";

    echo "Mesaj: " . $mesaj . "<br>";
   
}
?>
