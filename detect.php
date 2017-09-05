<?php
/**
 * Include and instantiate the class.
 */
require_once 'lib/Mobile-Detect-2.8.12/Mobile_Detect.php';
$detect = new Mobile_Detect;

$mobile_entry = "/m/";
$_SERVER['REQUEST_URI'];

// Any mobile device (phones or tablets).
if ($detect->isMobile() && $_SERVER['REQUEST_URI'] !== $mobile_entry) {
  header('Location: /m/');
  die();
}

if (!$detect->isMobile() && $_SERVER['REQUEST_URI'] == $mobile_entry) {
  header('Location: /');
  die();
}
