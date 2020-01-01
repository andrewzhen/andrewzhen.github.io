// On Load
$(document).ready(function() {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("section")

  $(tags).addClass("transparent")

  // Fade-In Effect
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    }
  }
})

// Scrolling
$(document).on("scroll", function() {
  var pageTop = $(document).scrollTop()
  var pageBottom = pageTop + $(window).height()
  var tags = $("section")

  // Fade-In Effect
  for (var i = 0; i < tags.length; i++) {
    var tag = tags[i]

    if($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    }
    // else {
    //   // Fades over and over again
    //   $(tag).removeClass("visible")
    // }
  }
})