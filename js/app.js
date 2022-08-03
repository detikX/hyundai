$(() => {
  $(window).on("load", function () {
    $(".preloader").fadeOut(10000);
    $(".preloader").remove();
  });
  new WOW().init();
  //   skrollr.init();
  if (screen.width < 768) {
    $("body").css("overflow", "scroll");
  }
  // const tilt = $(".js-tilt").tilt();
  // // tilt.on("change", callback); // parameters: event, transforms
  // // tilt.on("tilt.mouseLeave", callback); // parameters: event
  // // tilt.on("tilt.mouseEnter", callback); // parameters: event

  // $(".js-tilt").tilt({
  //   max: 30,
  //   speed: 600,
  //   scale: 1,
  //   transition: true,
  //   // easing: "cubic-bezie$(.03,.98,.52,.99)",
  //   perspective: 600,
  //   // glare: true,
  // });
});

//progress
$(document).on("scroll", function () {
  var pixels = $(document).scrollTop();
  var pageHeight = $(document).height() - $(window).height();
  var progress = (100 * pixels) / pageHeight;

  $("div.progress").css("width", progress + "%");
});

// ---- Notes ---- //

// pixels = amount of px from top of page
// pageHeight = whole page height minus viewable page height
// progress = pixels from top / page-height * 100

var test = screen.width < 768 ? 2 : 20;

$(window)
  .scroll(function () {
    let o = $(window),
      i = $("body"),
      t = $(".section");
    s = o.scrollTop() + o.height() / test;
    // console.log("o.scrollTop()", o.scrollTop());
    // console.log("o.height", o.height());
    t.each(function () {
      console.log("top", $(this).position().top);
      console.log("height", $(this).height());
      console.log("s", s);
      // console.log("trigger1", $(this).position().top + $(this).height());
      $(this).position().top <= s &&
        $(this).position().top + $(this).height() > s &&
        i.removeClass(
          function (o, i) {
            return i.match(/(^|\s)color-\s+/g) || [].join(" ");
          },
          $(".section").removeClass("active"),
          $(this).addClass("active")
          // console.log($(this))
          // console.log("this?")
        );
    });
  })
  .scroll();

// setTimeout(() => {
//   document.getElementById("audio").addEventListener("play", myFunction);
// }, 1000);

// function myFunction() {
//   console.log(1);
// }

// var x = document.getElementById("myAudio");
// function playAudio() {
//   // alert(1);
//   $("#myAudio").get(0).play();
// }

// function pauseAudio() {
//   // alert(1);
//   $("#myAudio").get(0).pause();
// }
// const video = document.querySelector("audio");
// const play = document.querySelector("#play");
// const pause = document.querySelector("#pause");
// let isPlaying = false;

// video.onplaying = () => {
//   isPlaying = true;
// };

// video.onpause = () => {
//   isPlaying = false;
// };

// const playVid = () => {
//   if (video.paused && !isPlaying) {
//     video.play();
//   }
// };

// const pauseVid = () => {
//   if (!video.paused && isPlaying) {
//     video.pause();
//   }
// };

// play.addEventListener("click", playVid);
// pause.addEventListener("click", pauseVid);

let bg = document.getElementById("cars");
let moon = document.getElementById("one");
let mountain = document.getElementById("two");
let road = document.getElementById("headline");

window.addEventListener("scroll", function () {
  var value = window.scrollY;
  // console.log("value", value);
  bg.style.top = value * 0.5 + "px";
  // moon.style.bottom = -value + 10 + "%";
  // moon.style.left = -value + 5 + "%";
  // moon.style.transform = scale(1.2);
  // mountain.style.bottom = -value + 10 + "%";
  road.style.bottom = value * 0.05 + "px";
  // console.log(".bg.style.top", bg.style.top);
  // console.log("moon.style.top", moon.style.top);
  // text.style.top = value * 1 + "px";
});

$(document).ready(function () {
  var controller = new ScrollMagic.Controller();

  var second = new ScrollMagic.Scene({
    triggerElement: "#second",
    duration: "100%",
  })
    .setClassToggle(".coba__img", "full-page")
    //.addIndicators() // remove this before publishing
    .addTo(controller);

  //   var car1 = new ScrollMagic.Scene({
  //     triggerElement: "#car1",
  //     duration: "100%",
  //   })
  //     .setClassToggle(".showing", "red-bg")
  //     .addIndicators() // remove this before publishing
  //     .addTo(controller);

  var three = new ScrollMagic.Scene({
    triggerElement: "#three",
    duration: "100%",
  })
    .setClassToggle(".all-skrollr", "test-skrollr")
    // .addIndicators() // remove this before publishing
    .addTo(controller);
});

var lala = $(".coba__img").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  // fade: true,
  // autoplay: true,
  // autoplaySpeed: 2000,
  // centerMode: true,
});
setTimeout(() => {
  lala;
}, 10);

var myText =
  "Hyundai melalui Owner Assurance Program memberikan perlindungan ekstra bagi kendaraan dan juga pengguna Hyundai STARGAZER. Kini semakin tenang punya Hyundai.";
let myTextLength = myText.length;

function typing(displayedLength) {
  if (displayedLength <= myTextLength) {
    $("#text").text(myText.substring(0, displayedLength));
  }
}

var controller = new ScrollMagic.Controller();
var typewritingOnScroll = new TimelineMax();

var typewritingScene = new ScrollMagic.Scene({
  triggerElement: "#text",
  duration: 300,
})
  .on("progress", function () {
    let scrollProgress = Math.ceil(typewritingScene.progress() * myTextLength);
    typing(scrollProgress);
  })

  .setPin("#text")
  //   .addIndicators()
  .setTween(typewritingOnScroll)
  .addTo(controller);

//get json
$.ajax({
  url: "js/usp.json",
  method: "GET",
  success: (response) => {
    // console.log(response);
    var a;
    for (a = 0; a < response.length; a++) {
      var judul = response[a].judul;
      var image = response[a].image;
      $(".all").append(`
             <div class="card">
              <div class="card__help">
                <img src="${image}" alt="${judul}" title="${judul}" loading="lazy" />
              </div>
              <h3>${judul}</h3>
            </div>
        `);
    }
  },
});
