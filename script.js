"use strict";

const ham = document.querySelector(".ham");
const navy = document.querySelector(".navy");
const body = document.querySelector("body");
const main = document.querySelector("main");

const close = document.querySelector(".close");
const illustrate = document.querySelector(".illustration");

const input = document.querySelector("input");
const goo = document.querySelector(".btn_foot");
const write = document.querySelector(".write");

const dot=document.querySelectorAll(".dot");
const dot1=document.querySelector(".dot1");
const col=document.querySelectorAll('.col');
const anisha=document.querySelector(".anisha");

////////////////////////////----------OPENING AND CLOSING OF NAVBAR-------------////////////////////////////////////
ham.addEventListener("click", function (e) {
  navy.classList.remove("hidden");
  body.style.overflow = "hidden";
  ham.classList.add("hidden");
  close.style.display = "block";
  illustrate.style.display = "none";
  main.style.backgroundImage ="linear-gradient(180deg , rgb(0,0,0,0.1), white)";
});

close.addEventListener("click", function (e) {
  navy.classList.add("hidden");
  body.style.overflow = "scroll";
  ham.classList.remove("hidden");
  close.style.display = "none";
  main.style.backgroundImage = "none";
  illustrate.style.display = "block";
});

/////////////////////////---------VALIDATION OF EMAIL---------------/////////////////////////////////
goo.addEventListener("click", function (e) {
  const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (!String(input.value).toLowerCase().match(re)) {
    write.classList.remove("hidden");
  } else {
    write.classList.add("hidden");
  }
});


////////////////////////////------------HIDE AND DISPLAY BLOCK---------------////////////////////////////////////
let prev=dot1.classList;
let last = anisha.getAttribute("data-type");

dot.forEach(n=>n.addEventListener('click',function(e){
    // console.log(e.target);
    let y = e.target.getAttribute("data-type");
    if (!e.target.classList.contains("dot-active")) {
        handle(y);
        e.target.classList.add("dot-active");
        prev.remove("dot-active");
        prev = e.target.classList;
      }
}))

function handle(curr) {
    col.forEach((n) => {
      if (curr === n.getAttribute("data-type")) {
        document
          .querySelector(`.col[data-type="${last}"]`).style.display='none'
        document
        .querySelector(`.col[data-type="${curr}"]`).style.display='block';
        last = curr;
      }
    });
  }

  const w = window.width;
  console.log(w);
  if(w>=1366)
  document.body.style.backgroundColor = "red";