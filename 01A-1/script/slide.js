$(document).ready(function () {
  var slideLength = 3
  var slideWidth = 100
  var pos = 0

  setInterval(function () {
    $('#slide_sec .img_wrap').animate({
      marginLeft: (pos * -slideWidth) + '%'
    })
    pos++

    if (pos === slideLength) {
      pos = 0
    }
  }, 3000)
})