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
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2">
    <!--STYLES-->
    <link rel="stylesheet" href="/styles/style.min.css">
    <!--STYLES END-->
  </head>

  <body class="desktop">
    <div class="overlay">
      <iframe id="player" width="100%" height="100%" src="https://www.youtube.com/embed/-7HQrnlSeRA?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;wmode=transparent&amp;enablejsapi=1" frameborder="0" allowfullscreen></iframe>
      <div class="shield"></div>
    </div>

    <div class="wrapper">
      <div class="header">
        <h1><a href="/">DYNATRON</a></h1>
        <p class="lead">Electronic Synth inspired by 80's atmosphere</p>
      </div>
      <div class="body">
      </div>
      <div class="footer">
        <?php require('nav.php'); ?>
        <p class="copyright">&copy;2015 DYNATRONSYNTH.COM</p>
      </div>
    </div>
    <!--SCRIPTS-->
    <script src="/js/picturefill.min.js"></script>
    <script type="text/javascript" src="https://w.soundcloud.com/player/api.js"></script>
    <script src="/js/main.min.js"></script>
    <?php include_once("analytics.php") ?>
    <!--SCRIPTS END-->
  </body>
</html>
