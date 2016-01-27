(function() {
  var menu = document.querySelector('.nav');
  var toggle = menu.querySelector('.toggle span');
  var toggleClass = window.toggleClass;
  var open = false, delay = 1;

  function eventHandler(event) {
    event.preventDefault();

    if (event.target === toggle) {
      open = !open;
      delay = 1;
    } else {
      open = false;
      delay = 150;
    }
    setTimeout(toggleClass, delay, menu, 'expand', open);

    return false;
  };

  menu.addEventListener('tap', eventHandler);
}());
