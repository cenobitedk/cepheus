var picturefill = window.picturefill;
var mobile = (document.querySelector('body.desktop') === null);
var mutebtn = document.querySelector('a.mute');
var mutestate = true;
var mutestate_previous;
var YT = window.YT, player, done = false;
var SC = window.SC, SCwidget = null;

/**
 * UTILITIES
 */
function hasClass (el, className) {
  return (el.className.indexOf(className) > -1);
}

function addClass (el, className) {
  var arr = el.className.split(' ');
  if (!hasClass.apply(window, arguments)) {
    arr.push(className);
  }
  el.className = arr.join(' ');
}

function removeClass (el, className) {
  var arr = el.className.split(' ');
  var i = arr.indexOf(className);
  if (hasClass.apply(window, arguments)) {
    arr.splice(i, 1);
  }
  el.className = arr.join(' ');
}

function toggleClass (el, className, force) {
  if (typeof force === 'undefined') {
    force = !(hasClass.apply(window, arguments));
  }
  return (force) ? addClass.apply(window, arguments) : removeClass.apply(window, arguments);
}

function resizePlayer () {
  var width, height, playerEl = document.getElementById('player');
  if (mobile) {
    width = playerEl.offsetWidth;
    height = Math.round(width / (16/9));
    playerEl.setAttribute('height', height + 'px');
  }
  else {
    height = playerEl.offsetHeight;
    width = Math.round(height * (16/9));
    var parentWidth = playerEl.parentElement.offsetWidth;
    var newWidth = Math.round((width * 100) / parentWidth + 10);
    var newLeft = (newWidth - 100) / -2;

    playerEl.style.width = newWidth + '%';
    playerEl.style.left = newLeft + '%';
  }
}

function toggleMute (el, force) {
  if (typeof el === 'undefined') {
    el = mutebtn;
  }
  mutestate_previous = player.isMuted();
  if (typeof force === 'undefined') {
    force = !player.isMuted();
  }
  if (document.querySelector('#player') === null) {
    return;
  }
  else if (force === false) {
    player.unMute();
    toggleClass(el, 'active', false);
    if (SCwidget !== null) {
      SCwidget.pause();
    }
  }
  else if (force === true) {
    player.mute();
    toggleClass(el, 'active', true);
  }
  mutestate = player.isMuted();
  return force;
}

/**
 * Youtube Player
 */

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function loads an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady () {
  window.addEventListener('resize', function() {
    setTimeout(resizePlayer, 15);
  });
  resizePlayer();
  player = new YT.Player('player', {
    events: {
      'onReady': function (event) {
        //event.target.playVideo();
        player.playVideo();
        toggleMute(undefined, mutestate);
      },
      'onStateChange': function (event) {
        if (event.data === YT.PlayerState.ENDED) {
          done = true;
        }
        if (done) {
          player.playVideo();
        }
      }
    }
  });
}



var timer, playlist;
function markPlayingTrack () {
  //unMarkPlayingTrack();
  playlist = document.querySelectorAll('.tracklist li');
  var fnc = function () {
    SCwidget.getPosition(function (pos) {
      for (var i = playlist.length - 1; i >= 0; i--) {
        if (pos >= parseInt(playlist[i].getAttribute('data-offset'))) {
          if (!hasClass(playlist[i], 'playing')) {
            unMarkPlayingTrack();
            addClass(playlist[i], 'playing');
          }
          return;
        }
      }
    });
  };
  clearInterval(timer);
  fnc();
  timer = setInterval(fnc, 2000);
}

function unMarkPlayingTrack () {
  var track = document.querySelector('.tracklist .playing');
  if (track !== null) {
    removeClass(track, 'playing');
  }
}

function injectHTML (event) {
  var r = event.target.response;
  var t = document.querySelector('.body');
  t.innerHTML = '';
  t.insertAdjacentHTML('afterbegin', r);
  if (typeof picturefill == 'function') {
    picturefill();
  }
}

var loaded;
function ajax (event) {
  var dest = event.target.href.replace('/m', '');
  if (dest === loaded) {
    return;
  }
  var r = new XMLHttpRequest();
  r.open("GET", dest, true);
  r.onreadystatechange = function () {
    if (r.readyState !== 4 || r.status !== 200) {
      return;
    }
    loaded = dest;
    injectHTML.apply(window, arguments);
  };
  r.send();
}

function ajaxOembed (el) {
  var dest = el.getAttribute('data-oembed');
  var delay = parseInt(el.getAttribute('data-delay'));
  setTimeout(function() {
    var r = new XMLHttpRequest();
    r.open("GET", dest, true);
    r.onreadystatechange = function (event) {
      if (r.readyState !== 4 || r.status !== 200) {
        return;
      }
      var response = JSON.parse(event.target.response);
      el.innerHTML = '';
      el.insertAdjacentHTML('afterbegin', response.html);
    };
    r.send();
  }, delay);
}

var SClastEvent;
function attachSC (el) {
  SCwidget = SC.Widget(el);
  SCwidget.bind(SC.Widget.Events.READY, function() {
    SCwidget.bind(SC.Widget.Events.PLAY, function() {
      toggleMute(mutebtn, true);
      markPlayingTrack();
      SClastEvent = 'play';
    });
    SCwidget.bind(SC.Widget.Events.PAUSE, function() {
      toggleMute(mutebtn, mutestate_previous);
      clearInterval(timer);
      unMarkPlayingTrack();
      SClastEvent = 'pause';
    });
    SCwidget.bind(SC.Widget.Events.FINISH, function() {
      toggleMute(mutebtn, mutestate_previous);
      clearInterval(timer);
      unMarkPlayingTrack();
      SClastEvent = 'finish';
    });
    SCwidget.bind(SC.Widget.Events.SEEK, function() {
      if (SClastEvent !== 'finish') {
        markPlayingTrack();
      }
      SClastEvent = 'seek';
    });
  });
}

document.addEventListener('click', function(e) {
  if (e.target.hash && e.target.hash.length > 0) {
    e.preventDefault();
  }
  if (e.target.className.indexOf('ajax') > -1) {
    e.preventDefault();
    ajax.apply(window, arguments);
  }
  if (e.target.className.indexOf('mute') > -1) {
    e.preventDefault();
    toggleMute.apply(window, [e.target]);
  }
  if (e.target.className.indexOf('img-wrap') > -1) {
    e.preventDefault();
    toggleClass(e.target.parentNode, 'expand');
  }
  if (e.target.hash === '#close') {
    e.preventDefault();
    if (SCwidget !== null) {
      SCwidget = null;
    }
    clearInterval(timer);
    var n = e.target.parentNode;
    n.parentNode.removeChild(n);
    loaded = null;
    if (SClastEvent === 'play' || SClastEvent === 'seek') {
      toggleMute(document.querySelector('a.mute'), mutestate_previous);
      SClastEvent = 'pause';
    }
  }
});

document.querySelector('.body').addEventListener("DOMNodeInserted", function (event) {
  // process oembed wrappers.
  var oembed = event.relatedNode.querySelector('#SCwidget');
  if (oembed !== null) {
    ajaxOembed.call(window, oembed);
  }
  // process iframe, attach SC widget api.
  var iframe = event.relatedNode.querySelector('iframe');
  if (iframe !== null && typeof SC !== 'undefined') {
    setTimeout(attachSC, 100, iframe);
  }
}, false);


// Preload images for subsequent faster pageloads.
document.preloadImages = [
  { "url": "/img/legacy-vol-i-cover-thumb.jpg" },
  { "url": "/img/legacy-vol-i-cover-thumb.jpg" },
  { "url": "/img/legacy-vol-i-cover-medium.jpg" },
  { "url": "/img/legacy-vol-i-cover-large.jpg" },
  { "url": "/img/legacy-vol-ii-cover-thumb.jpg" },
  { "url": "/img/legacy-vol-ii-cover-thumb.jpg" },
  { "url": "/img/legacy-vol-ii-cover-medium.jpg" },
  { "url": "/img/legacy-vol-ii-cover-large.jpg" },
  { "url": "/img/rigelaxiom-ep-cover-thumb.jpg" },
  { "url": "/img/rigelaxiom-ep-cover-banner.jpg" },
  { "url": "/img/rigelaxiom-ep-cover-medium.jpg" },
  { "url": "/img/aeternus-cover-thumb.jpg" },
  { "url": "/img/aeternus-cover-banner.jpg" },
  { "url": "/img/aeternus-cover-medium.jpg" },
  { "url": "/img/escape-velocity-cover-thumb.jpg" },
  { "url": "/img/escape-velocity-cover-banner.jpg" },
  { "url": "/img/escape-velocity-cover-medium.jpg" },
  { "url": "/img/fireburner-ep-cover-thumb.jpg" },
  { "url": "/img/fireburner-ep-cover-banner.jpg" },
  { "url": "/img/fireburner-ep-cover-medium.jpg" },
  { "url": "/img/flashbacks-ep-cover-thumb.jpg" },
  { "url": "/img/flashbacks-ep-cover-banner.jpg" },
  { "url": "/img/flashbacks-ep-cover-medium.jpg" },
  { "url": "/img/throttle-up-ep-cover-thumb.jpg" },
  { "url": "/img/throttle-up-ep-cover-banner.jpg" },
  { "url": "/img/throttle-up-ep-cover-medium.jpg" },
  { "url": "/img/D-500x500-thumb.jpg" },
  { "url": "/img/D-500x500-banner.jpg" },
  { "url": "/img/D-500x500-medium.jpg" }
];
var preloadDelay = document.querySelector('body.desktop') === null ? 10000 : 4000;
setTimeout(function() {
  if (document.preloadImages) {
    var load = function (image) {
      image.loaded = (new Image().src = image.url);
    };
    for (var i = 0, m = document.preloadImages.length; i < m; i++) {
      var img = document.preloadImages[i];
      setTimeout(load, 100, img);
    }
  }
}, preloadDelay);

picturefill();
