function setDaytimeBackground() {
    var element = document.querySelector('.background-image');
    
    if (element) {
      var now = new Date();
      var hour = now.getHours();
  
      if ((hour >= 0 && hour < 6) || (hour >= 22 && hour <= 23)) {
        // Nacht (zwischen 0 Uhr und 6 Uhr sowie zwischen 22 Uhr und 23 Uhr)
        element.style.backgroundImage = 'url("./img/bgs/website_night.png")';
      } else if ((hour >= 6 && hour < 10) || (hour >= 19 && hour < 22)) {
        // Sonnenuntergang (zwischen 6 Uhr und 10 Uhr sowie zwischen 19 Uhr und 22 Uhr)
        element.style.backgroundImage = 'url("./img/bgs/website_sunset.png")';
      } else {
        // Tag (zwischen 10 Uhr und 19 Uhr)
        element.style.backgroundImage = 'url("./img/bgs/website_daylight.png")';
      }
    }
  }
  
  setDaytimeBackground(); // Setze das Hintergrundbild beim Laden der Seite
  
  // Überprüfe und setze das Hintergrundbild alle 5 Minuten
  setInterval(setDaytimeBackground, 30);
  
