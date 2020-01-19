let nCount = selector => {
  $(selector).each(function() {
    $(this).animate(
      {
        Counter: $(this).text()
      },
      {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element.
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function(value) {
          $(this).text(Math.ceil(value));
        }
      }
    );
  });
};

let a = 0;
$(window).scroll(function() {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});

/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function() {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});

var items = document.querySelectorAll(".circle a");

for (var i = 0, l = items.length; i < l; i++) {
  items[i].style.left =
    (50 - 35 * Math.cos(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(
      4
    ) + "%";

  items[i].style.top =
    (50 + 35 * Math.sin(-0.5 * Math.PI - 2 * (1 / l) * i * Math.PI)).toFixed(
      4
    ) + "%";
}

document.querySelector(".menu-button").onclick = function(e) {
  e.preventDefault();
  document.querySelector(".circle").classList.toggle("open");
};
