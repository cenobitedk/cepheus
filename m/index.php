<!DOCTYPE html>
<html>
  <head>
    <title>Dynatron</title>

    <!-- Viewport mobile tag for sensible mobile support -->
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2">
    <!--STYLES-->
    <link rel="stylesheet" href="../styles/style.min.css">
    <!--STYLES END-->
  </head>

  <body class="mobile">
    <div class="wrapper">
      <div class="header">
        <h1><a href="/">DYNATRON</a></h1>
        <p class="lead">Electronic Synth inspired by 80's atmosphere</p>
        <?php require('../nav.php'); ?>
      </div>
      <div class="body">
        <iframe id="player" width="100%" height="180px" src="https://www.youtube.com/embed/-7HQrnlSeRA?rel=0&amp;controls=0&amp;showinfo=0&amp;modestbranding=1&amp;wmode=transparent&amp;enablejsapi=1" frameborder="0" allowfullscreen></iframe>
      </div>
      <div class="footer">

        <p class="copyright">&copy;2015 DYNATRONSYNTH.COM</p>
      </div>
    </div>
    <!--SCRIPTS-->
    <script src="../js/picturefill.min.js"></script>
    <script src="../js/Tocca.min.js"></script>
    <script src="../js/m.nav.js"></script>
    <script src="../js/main.min.js"></script>
    <?php include_once("../analytics.php") ?>
    <!--SCRIPTS END-->
  </body>
</html>
