document.addEventListener("DOMContentLoaded", function() {
    var apodTitle = document.getElementById("api-baslik");
    var apodImage = document.getElementById("api-resim");
    var apodExplanation = document.getElementById("api-aciklama");
  
    fetch("https://api.nasa.gov/planetary/apod?api_key=yV9YYOOxLNrbp6x68brNDcaHxcxdvFK21HOMRuuU")
      .then(response => response.json())
      .then(data => {
        apodTitle.textContent = data.title;
        apodImage.src = data.url;
        apodExplanation.textContent = data.explanation;
      })
      .catch(error => {
        console.log("Hata: " + error);
      });
  });
  