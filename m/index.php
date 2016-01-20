<!DOCTYPE html>
<html>
  <head>
    <title>Dynatron</title>

    <!-- Viewport mobile tag for sensible mobile support -->
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2">

    <!-- icons -->
    <link rel="apple-touch-icon" sizes="57x57" href="/icons/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/icons/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/icons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/icons/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/icons/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/icons/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/icons/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/icons/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="/icons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="/icons/favicon-194x194.png" sizes="194x194">
    <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="/icons/android-chrome-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="/icons/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="/icons/manifest.json">
    <link rel="shortcut icon" href="/icons/favicon.ico">
    <meta name="msapplication-TileColor" content="#222222">
    <meta name="msapplication-TileImage" content="/icons/mstile-144x144.png">
    <meta name="msapplication-config" content="/icons/browserconfig.xml">
    <meta name="theme-color" content="#222222">

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
