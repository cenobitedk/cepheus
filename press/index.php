<?php
/**
 * Include and instantiate the class.
 */
require_once '../lib/Mobile-Detect-2.8.12/Mobile_Detect.php';
$detect = new Mobile_Detect;

// Any mobile device (phones or tablets).
if ($detect->isMobile()) {
  // header('Location: /m/');
  // die();
}

?>


<!DOCTYPE html>
<html>
  <head>
    <title>Dynatron - Press</title>

    <!-- Viewport mobile tag for sensible mobile support -->
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2">
    <!--STYLES-->
    <link rel="stylesheet" href="press.css">
    <!--STYLES END-->
  </head>

  <body class="desktop">
    <div class="sidebar">
      <h1>DYNATRON</h1>
      <p class="teaser">PRESS</p>
      <ul>
        <li><a href="#" class="">Introduction</a></li>
        <li><a href="#biography" class="">Biography</a></li>
        <li><a href="#timeline" class="">Timeline</a></li>
        <li><a href="#discography" class="">Discography</a></li>
        <li><a href="#contact" class="">Contact</a></li>
        <li>...</li>
      </ul>
      <p class="copyright"><small>&copy;2015 DYNATRONSYNTH.COM</small></p>
    </div>

    <div class="wrapper">

      <div class="block header">
        <div class="contents">
          <h1><a href="/">DYNATRON</a></h1>
          <p class="lead">Electronic Synth inspired by 80's atmosphere</p>
        </div>
      </div>

      <div id="biography" class="block">
        <div class="contents">
          <h2>BIOGRAPHY</h2>
        </div>
      </div>

      <div id="timeline" class="block">
        <div class="contents">
          <h2>TIMELINE</h2>


          <ul class="timeline">
            <li>
              <h4>2012</h4>
              <p>The first 4 tracks is published on Soundcloud in April and May.</p>
              <p>On September 8 the "FIREBURNER EP" is released.</p>
              <p>On November 22 the debut album entitled "ESCAPE VELOCITY" is released by French APHASIA RECORDS.</p>
            </li>
            <li>
              <h4>2013</h4>
              <p>On May 5 the "FLASHBACKS EP" is released by APHASIA RECORDS.</p>
            </li>
            <li>
              <h4>2014</h4>
              <p>On May 23 the movie "COLD IN JULY" hit the theaters (USA) featuring "COSMO BLACK" from the "FIREBURNER EP".</p>
              <p>On September 25 the "THROTTLE UP EP" is released by Swedish RAD RUSH RECORDS.</p>
            </li>
            <li>
              <h4>2015</h4>
              <p>The second album "AETERNUS" is set for release on September 4th.</p>
            </li>
          </ul>
        </div>
      </div>

      <div id="discography" class="block">
        <div class="contents">
          <h2>DISCOGRAPHY</h2>


          <iframe style="border: 0; width: 100%; height: 274px;" src="https://bandcamp.com/EmbeddedPlayer/album=3364110565/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" seamless><a href="http://dynatron.bandcamp.com/album/throttle-up">Throttle Up by Dynatron</a></iframe>
          <iframe style="border: 0; width: 100%; height: 307px;" src="https://bandcamp.com/EmbeddedPlayer/album=290711140/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" seamless><a href="http://dynatron.bandcamp.com/album/flashbacks-ep">Flashbacks - EP by Dynatron</a></iframe>
          <iframe style="border: 0; width: 100%; height: 439px;" src="https://bandcamp.com/EmbeddedPlayer/album=406758170/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" seamless><a href="http://dynatron.bandcamp.com/album/escape-velocity">Escape Velocity by Dynatron</a></iframe>
          <iframe style="border: 0; width: 100%; height: 274px;" src="https://bandcamp.com/EmbeddedPlayer/album=3364110565/size=large/bgcol=333333/linkcol=ffffff/artwork=none/transparent=true/" seamless><a href="http://dynatron.bandcamp.com/album/throttle-up">Throttle Up by Dynatron</a></iframe>
        </div>
      </div>

      <div id="contact" class="block">
        <div class="contents">
          <h2>CONTACT</h2>
        </div>
      </div>

      <div class="block footer">
        <div class="contents">
        </div>
      </div>
    </div>
    <!--SCRIPTS-->
    <!--SCRIPTS END-->
  </body>
</html>
