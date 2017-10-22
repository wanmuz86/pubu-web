function carousel() {
  var showcase = $("#showcase"),
    title = $('#item-title')
  showcase.Cloud9Carousel({

    yOrigin: 0,
    yRadius: 10,
    xRadius: 800,
    mirror: {
      gap: 5,
      height: 0.2
    },
    buttonLeft: $("#nav > .left"),
    buttonRight: $("#nav > .right"),
    autoPlay: 1,
    speed: 10,
    autoPlayDelay: 1200,
    bringToFront: true,
    onRendered: rendered,
    onLoaded: function() {
      showcase.css('visibility', 'visible')
      showcase.css('display', 'none')
      showcase.fadeIn(1000)
    }
  })

  var width = $(window).width();
  if (width < 520) {
    $("#showcase").css("height", width / 1.2);
    $("#showcase > img").css("height", "80%" );
    $("#showcase_desp").css("margin-top", "-47vw");
  } else if (width < 768) {
    $("#showcase").css("height", width / 1.8);
    $("#showcase > img").css("height", "80%" );
    $("#showcase_desp").css("margin-top", "-42vw");
  } else if (width < 1000) {
    $("#showcase").css("height", "400px");
    $("#showcase > img").css("height", "80%" );
    $("#showcase_desp").css("margin-top", "0vw");
  } else {
    $("#showcase").css("height", "420px");
    $("#showcase > img").css("height", "80%" );
    $("#showcase_desp").css("margin-top", "0vw");
  }


  $(window).on('resize', function() {
    if ($(this).width() != width) {
      location.reload();
    }
  });

  function rendered(carousel) {
    title.text(carousel.nearestItem().element.alt)
    // Fade in based on proximity of the item
    var c = Math.cos((carousel.floatIndex() % 1) * 2 * Math.PI)
    title.css('opacity', 0.5 + (0.5 * c))
  }

  $('#nav > button').click(function(e) {
    var b = $(e.target).addClass('down')
    setTimeout(function() {
      b.removeClass('down')
    }, 100)
  })
  $(document).keydown(function(e) {

    switch (e.keyCode) {
      /* left arrow */
      case 37:
        $('#nav > .left').click()
        break
        /* right arrow */
      case 39:
        $('#nav > .right').click()
    }
  })
}