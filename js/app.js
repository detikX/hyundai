$(() => {
    $(window).on("load", function() {
        $(".preloader").fadeOut(10000);
        $(".preloader").remove();
    });
    new WOW().init();
    // skrollr.init();
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

var test = screen.width < 768 ? 2 : 50;

$(window)
    .scroll(function() {
        let o = $(window),
            i = $("body"),
            t = $(".section");
        s = o.scrollTop() + o.height() / test;
        // console.log("o.scrollTop()", o.scrollTop());
        // console.log("o.height", o.height());
        t.each(function() {
            // console.log("top", $(this).position().top);
            // console.log("s", s);
            // console.log(
            //   "$(this).position().top + $(this).height()",
            //   $(this).position().top + $(this).height()
            // );
            $(this).position().top <= s &&
                $(this).position().top + $(this).height() > s &&
                i.removeClass(
                    $(".section").removeClass("active"),
                    $(this).addClass("active")
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

window.addEventListener("scroll", function() {
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

// const element = document.getElementById("coba");
// element.scrollIntoView(function () {
//   // element.classList.add("mystyle");
// });

// Shout out to ihatetomatoes
// Where I learned ScrollMagic basics:
// https://www.youtube.com/watch?v=QpedXxC0e5o

$(document).ready(function() {
    var controller = new ScrollMagic.Controller();

    var second = new ScrollMagic.Scene({
            triggerElement: "#second",
            duration: "100%",
        })
        .setClassToggle(".coba__img", "full-page")
        .addIndicators() // remove this before publishing
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