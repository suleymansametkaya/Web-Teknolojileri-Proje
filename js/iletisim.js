function guncelle(yas) {
    document.getElementById("deger").innerText = yas;
  }


  new Vue({
    el: '#app',
    data: {
      formData: {
        adSoyad: '',
        telefon: '',
        email: '',
        yas: 0,
        cinsiyet: '',
        sehir: '',
        yetenek: [],
        baslik: '',
        mesaj: ''
        
      },
      errors: {
  
      }
    },
    methods: {
      validateForm(event) {
        
        this.errors = {};
        if (!this.formData.adSoyad) {
          this.errors.adSoyad = 'Adınızı ve soyadınızı giriniz.';
        }
        if (!this.formData.email) {
          this.errors.email = 'E-posta adresinizi giriniz.';
        } else if (!this.validateEmail(this.formData.email)) {
          this.errors.email = 'Geçerli bir e-posta adresi giriniz.';
        }
        if (!this.formData.telefon) {
          this.errors.telefon = 'Telefon numaranızı giriniz.';
        } else if (!this.validatePhoneNumber(this.formData.telefon)) {
          this.errors.telefon = 'Geçerli bir telefon numarası giriniz.';
        }
        if (!this.formData.yas) {
          this.errors.yas = 'Yaşınızı giriniz.';
        } else if (!this.validateAge(this.formData.yas)) {
          this.errors.yas = 'Geçerli bir yaş giriniz.';
        }
        if (!this.formData.cinsiyet) {
        this.errors.cinsiyet = 'Cinsiyetinizi seçiniz.';
        }
        if (!this.formData.yetenek || this.formData.yetenek.length === 0) {
          this.errors.yetenek = 'En az bir yetenek seçiniz.';
        }
        if (!this.formData.sehir) {
            this.errors.sehir = 'Lütfen şehir seçin.';
          }
        if (!this.formData.mesajbaslik) {
          this.errors.mesajbaslik = 'Lütfen bir başlık girin.';
        }
        if (!this.formData.mesaj) {
        this.errors.mesaj = 'Lütfen bir mesaj girin.';
        }
        
        if (Object.keys(this.errors).length > 0) {
          event.preventDefault();
        }
      },
      validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
      },
      validatePhoneNumber(phoneNumber) {
        const re = /^\d{10}$/; 
        return re.test(phoneNumber);
      },
          updateAge(event) {
        this.formData.yas = event.target.value;
      },
      validateAge(age) {
        // Yaş doğrulama
        const parsedAge = parseInt(age);
        return parsedAge >= 1 && parsedAge <= 100;
      },
      resetForm() {
        this.formData = {
          adSoyad: '',
          telefon: '',
          email: '',
          yas: 0,
          cinsiyet: '',
          sehir: '',
          yetenek: [],
          baslik: '',
          mesaj: ''
        };
        this.errors = {};
      }
    }
    
  });

function jskontrol() {
  var isim = document.getElementById("ad-soyad");
  var email = document.getElementById("email");
  var isimhata = document.getElementById("error-isim");
  var emailhata = document.getElementById("error-email");
  var telefon = document.getElementById("telefon");
  var telefonhata = document.getElementById("error-telefon");
  var yas = document.getElementById("yas");
  var yashata = document.getElementById("error-yas");
  var erkek = document.getElementById("erkek");
  var kadin = document.getElementById("kadin");
  var cinsiyethata = document.getElementById("error-cinsiyet");
  var sehir = document.getElementById("sehir");
  var sehirhata = document.getElementById("error-sehir");
  var yetenek = document.getElementsByName("yetenek[]");
  var yetenekhata = document.getElementById("error-yetenek");
  var mesajbaslik = document.querySelector('.form-mesaj-baslik input');
  var mesajbaslikhata = document.getElementById("error-baslik");
  var mesaj = document.querySelector('.form-mesaj textarea');
  var mesajhata = document.getElementById('error-mesaj');
  var enAzBirSecildi = false;
  if (isim.value === "") {
      isimhata.innerText = "Ad alanı boş bırakılamaz!";
      return false;
  }
  else{
    isimhata.innerText =""
  }

  if (email.value === "") {
      emailhata.innerText = "E-posta alanı boş bırakılamaz!";
      return false;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
      emailhata.innerText = "Geçerli bir e-posta adresi girin!";
      return false;
  }
  else{
    emailhata.innerText=""
  }
  if (telefon.value === "") {
      telefonhata.innerText = "Telefon alanı boş bırakılamaz!";
      return false;
  }

  var telefonRegex = /^\d{10}$/;
  if (!telefonRegex.test(telefon.value)) {
      telefonhata.innerText = "Geçerli bir telefon no girin!";
      return false;
  }
  else{
    telefonhata.innerText=""
  }
  if (yas.value === "") {
      yashata.innerText = "Yaş alanı boş bırakılamaz!";
      return false;
  }

  var parsedAge = parseInt(yas.value);
  if (isNaN(parsedAge) || parsedAge < 1 || parsedAge > 100) {
      yashata.innerText = "Lütfen geçerli bir yaş giriniz!";
      return false;
  }
  else{
    yashata.innerText=""
  }
  if (!erkek.checked && !kadin.checked) {
  cinsiyethata.innerText = "Cinsiyet alanı boş bırakılamaz!";
  return false;
  } 
  else {
      cinsiyethata.innerText = "";
  }
  if (sehir.value ==="" || sehir.value==="Şehir Seçiniz") {
  sehirhata.innerText = "Sehir alanı boş bırakılamaz!";
  return false;
  }
  else{
    sehirhata.innerText="";
  }
  for (var i = 0; i < yetenek.length; i++) {
      if (yetenek[i].checked) {
          enAzBirSecildi = true;
          break;
      }
  }

  if (!enAzBirSecildi) {
      yetenekhata.innerText = "En az bir yetenek seçilmelidir!";
      return false;
  } 
  if (enAzBirSecildi) {
      yetenekhata.innerText = "";
  }
  if (mesajbaslik.value === "") {
  mesajbaslikhata.innerText = "Mesaj Başlık alanı boş bırakılamaz!";
  return false;
  } 
  else {
      mesajbaslikhata.innerText = "";
  }
  if (mesaj.value === "") {
      mesajhata.innerText = "Mesaj alanı boş bırakılamaz!";
      return false;
  } else {
      mesajhata.innerText = "";
  }
      return true;
  }


function validateAge(age) {
        const parsedAge = parseInt(age);
        return parsedAge >= 1 && parsedAge <= 100;
      }
