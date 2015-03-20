// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function loads an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady () {
  player = new YT.Player('player', {
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady (event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
var done = false;
function onPlayerStateChange (event) {
  if (event.data == YT.PlayerState.ENDED) {
    done = true;
  }
  if (done) player.playVideo();
}

function toggleMute (event) {
  if (player.isMuted()) {
    player.unMute();
    toggleClass(event.target, 'active', false);
  } else {
    player.mute();
    toggleClass(event.target, 'active', true);
  }
}

function toggleClass (el, className, force) {
  var arr = el.className.split(' ');
  var i = arr.indexOf(className);
  if ((force === false  && i > -1) || i > -1) {
    // remove
    arr.splice(i, 1);
  } else if ((force === true && i < 0) || i < 0) {
    // add
    arr.push(className);
  }
  el.className = arr.join(' ');
}

function injectHTML (event) {
  var r = event.target.response;
  var t = document.querySelector('.body');
  t.innerHTML = '';
  t.insertAdjacentHTML('afterbegin', r);
}

var loaded;
function ajax (event) {
  var dest = event.target.href;
  if (dest === loaded) return;
  var r = new XMLHttpRequest();
  r.open("GET", dest, true);
  r.onreadystatechange = function () {
    if (r.readyState != 4 || r.status != 200) return;
    loaded = dest;
    injectHTML.apply(window, arguments);
  };
  r.send();
}

document.addEventListener('click', function(e) {
  if (e.target.className.indexOf('ajax') > -1) {
    e.preventDefault();
    ajax.apply(window, arguments);
  }
  if (e.target.className.indexOf('mute') > -1) {
    e.preventDefault();
    toggleMute.apply(window, arguments);
  }
});
