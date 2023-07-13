# Readme - Hintergrundbild basierend auf Tageszeit

Diese Funktion **"setDaytimeBackground()"** setzt das Hintergrundbild eines Elements basierend auf der aktuellen Tageszeit.

## Verwendung

1. Füge den folgenden Code in dein JavaScript-Datei oder in den <script>-Tag deiner HTML-Seite ein:

```js
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
setInterval(setDaytimeBackground, 300000);
```

2. Ersetze **'./img/bgs/website_night.png'**, **'./img/bgs/website_sunset.png'** und **'./img/bgs/website_daylight.png'** mit den tatsächlichen Pfaden zu deinen Hintergrundbildern.

3. Füge der gewünschten HTML-Elementklasse das Attribut background-image hinzu.

```html
<div class="background-image"></div>
```

4. Das Hintergrundbild wird beim Laden der Seite automatisch gesetzt. Außerdem wird alle 5 Minuten überprüft und gegebenenfalls aktualisiert.

## Hinweise

* Stelle sicher, dass du die richtigen Pfade zu den Hintergrundbildern angibst.
* Du kannst die Tageszeit-Bedingungen in der setDaytimeBackground()-Funktion anpassen, falls du andere Zeiträume für Nacht, Sonnenuntergang und Tag verwenden möchtest.
* Das Interval für die Überprüfung und Aktualisierung des Hintergrundbildes ist auf 5 Minuten (300000 Millisekunden) eingestellt. Du kannst dies nach Bedarf ändern, indem du den Wert im **"setInterval-Aufruf"** anpasst.
* Vergiss nicht, die CSS-Styles für das ausgewählte Element entsprechend anzupassen, um die Hintergrundbilder optimal darzustellen.
