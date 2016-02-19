<!DOCTYPE html>
<html>
  <head>
    <title>Dynatron</title>

    <!-- Viewport mobile tag for sensible mobile support -->
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2">

    <link rel="apple-touch-icon" sizes="57x57" href="../img/icons/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="../img/icons/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="../img/icons/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="../img/icons/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="../img/icons/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="../img/icons/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="../img/icons/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="../img/icons/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="../img/icons/apple-touch-icon-180x180.png">
    <link rel="icon" type="image/png" href="../img/icons/favicon-32x32.png" sizes="32x32">
    <link rel="icon" type="image/png" href="../img/icons/favicon-194x194.png" sizes="194x194">
    <link rel="icon" type="image/png" href="../img/icons/favicon-96x96.png" sizes="96x96">
    <link rel="icon" type="image/png" href="../img/icons/android-chrome-192x192.png" sizes="192x192">
    <link rel="icon" type="image/png" href="../img/icons/favicon-16x16.png" sizes="16x16">
    <link rel="manifest" href="../img/icons/manifest.json">
    <link rel="mask-icon" href="../img/icons/safari-pinned-tab.svg" color="#000000">
    <link rel="shortcut icon" href="../img/icons/favicon.ico">
    <meta name="msapplication-TileColor" content="#012351">
    <meta name="msapplication-TileImage" content="../img/icons/mstile-144x144.png">
    <meta name="msapplication-config" content="../img/icons/browserconfig.xml">
    <meta name="theme-color" content="#012351">

    <!--STYLES-->
    <!-- <link rel="stylesheet" href="/styles/style.min.css"> -->
    <style>
      body {
        background-color: #222;
        color: #eee;
        text-align: center;
        font-family: Helvetica, Franklin Gothic Medium, Arial, sans-serif;
        max-width: 240px;
        margin: 0 auto;
      }

      h1,
      .lead,
      .sub {
        color: #e32;
        text-shadow: 0 0 20px rgba(200, 60, 40, 1);
        border: 1px solid #e32;
        border-width: 1px 0;
        padding: 0.3em;
      }

      ul {
        padding: 0;
      }
      li {
        font-size: 24px;
        line-height: 60px;
        text-align: left;
        list-style-type: none;
      }
      a {
        color: #ccc;
        text-decoration: none;
      }
      a:hover,
      a:active {
        color: #eee;
        text-decoration: underline;
      }
      a:before {
        width: 56px;
        height: 56px;
        display: inline-block;
        content: " ";
        background-image: url(/img/social-icons.gif);
        background-position-x: -1px;
        background-position-y: -1px;
        vertical-align: middle;
        margin-right: 0.5em;
      }
      .fb:before {
        background-position-y: -57px;
      }
      .tw:before {
        background-position-y: -113px;
      }
      .sc:before {
        background-position-y: -169px;
      }
      .bc:before {
        background-position-y: -225px;
      }
      .yt:before {
        background-position-y: -281px;
      }
      .ig:before {
        background-position-y: -337px;
      }
      .tl:before {
        background-position-y: -393px;
      }
      .gp:before {
        background-position-y: -449px;
      }
    </style>
    <!--STYLES END-->
  </head>

  <body class="desktop">

    <h1>Welcome!</h1>
    <p class="lead">Where do you want to go?</p>

    <ul>
      <li><a href="/">Official website</a></li>
      <li><a href="https://www.facebook.com/dynatronsynth" class="fb">Facebook</a></li>
      <li><a href="https://twitter.com/dynatronsynth" class="tw">Twitter</a></li>
      <li><a href="https://soundcloud.com/dynatronsynth" class="sc">Soundcloud</a></li>
      <li><a href="https://dynatron.bandcamp.com" class="bc">Bandcamp</a></li>
      <li><a href="https://www.youtube.com/c/Dynatronsynth" class="yt">Youtube</a></li>
      <li><a href="https://www.instagram.com/dynatronsynth/" class="ig">Instagram</a></li>
      <li><a href="http://dynatronsynth.tumblr.com/" class="tl">Tumblr</a></li>
      <li><a href="https://plus.google.com/+Dynatronsynth" class="gp">Google+</a></li>
    </ul>

    <p class="sub"><small>&copy; DYNATRON 2016</small></p>

    <?php include_once("../analytics.php") ?>
    <!--SCRIPTS END-->
  </body>
</html>
