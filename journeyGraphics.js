function myMove() {
  var elem = document.getElementById("sliderFront");
  var elem2 = document.getElementById("sliderBack");
  var pos = 0;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 500) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + 'px';
    }
  }
}
