<?php
/**
 * Include and instantiate the class.
 */
require_once 'lib/Mobile-Detect-2.8.12/Mobile_Detect.php';
$detect = new Mobile_Detect;

// Any mobile device (phones or tablets).
if ($detect->isMobile()) {
  header('Location: /m/');
  die();
}

?>


<!DOCTYPE html>
<html>
  <head>
    <title>Dynatron</title>

    <!-- Viewport mobile tag for sensible mobile support -->
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <!--STYLES-->
    <link rel="stylesheet" href="/styles/style.css">
    <!--STYLES END-->
  </head>

  <body class="desktop">
    <div class="overlay">
      <iframe id="player" width="100%" height="100%" src="https://www.youtube.com/embed/-7HQrnlSeRA?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;wmode=transparent&amp;enablejsapi=1" frameborder="0" allowfullscreen></iframe>
      <div class="shield"></div>
    </div>

    <div class="wrapper">
      <div class="header">
        <h1>DYNATRON</h1>
        <p class="lead"><em>Electronic Synth inspired by 80's atmosphere.</em></p>        
      </div>
      <div class="body">
      </div>
      <div class="footer">
        <div class="nav">
          <ul class="upper">
            <li><a href="#">Aeternus</a></li>
            <li><a href="#">Throttle Up EP</a></li>
            <li><a href="#">Flashbacks EP</a></li>
            <li><a href="#">Escape Velocity</a></li>
            <li><a href="#">Fireburner EP</a></li>
          </ul>
          <ul class="lower">
            <li><a href="https://soundcloud.com/dynatronsynth">Soundcloud</a></li>
            <li><a href="https://dynatron.bandcamp.com/">Bandcamp</a></li>
            <li><a href="https://www.facebook.com/dynatronsynth">Facebook</a></li>
            <li><a href="https://twitter.com/dynatronsynth">Twitter</a></li>
          </ul>
        </div>
        <p class="copyright">&copy;2015 DYNATRONSYNTH.COM</p>
      </div>
    </div>
    <!--SCRIPTS-->
    <script src="/js/main.js"></script>
    <!--SCRIPTS END-->
  </body>
</html>
