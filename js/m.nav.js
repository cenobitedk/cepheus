(function() {
  var menu = document.querySelector('.nav');
  var toggle = menu.querySelector('.toggle span');

  menu.addEventListener('tap', eventHandler);

  var open = false, del = 1;
  function eventHandler(event) {
    event.preventDefault();

    if (event.target === toggle) {
      open = !open;
      del = 1;
    } else {
      open = false;
      del = 150;
    }
    setTimeout(toggleClass, del, menu, 'expand', open);

    return false;
  };
}());
