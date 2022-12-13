// numbers
let first = document.querySelector("#one");
let second = document.querySelector("#two");
let third = document.querySelector("#three");
let fourth = document.querySelector("#four");

// current page(firstpage)
let info = document.querySelector("#info");
info.style.display = "block";
//plan page
let plan = document.querySelector("#plan");
plan.style.display = "none";
// pick page
let pick = document.querySelector("#pick");
pick.style.display = "none";
// finish page
let finish = document.querySelector("#finish");
finish.style.display = "none";
// congrats page
let congrats = document.querySelector("#thanks");
congrats.style.display = "none";

// back to previous page(plan page)
let back = document.querySelector("#back");
back.addEventListener("click", prev);
function prev() {
  plan.style.display = "none";
  info.style.display = "block";
  first.style.background = "#bfe2fd";
  first.style.color = "#000000";
  second.style.background = "none";
  second.style.color = "#ffffff";
}

// back to previous page(pick page)
let pickback = document.querySelector("#pick-back");
pickback.addEventListener("click", pickb);
function pickb() {
  pick.style.display = "none";
  plan.style.display = "block";
  second.style.background = "#bfe2fd";
  second.style.color = "#000000";
  third.style.background = "none";
  third.style.color = "#ffffff";
}
// back to previous page(finish page)
let confBack = document.querySelector("#conf-back");
confBack.addEventListener("click", conf);
function conf() {
  finish.style.display = "none";
  pick.style.display = "block";
  third.style.background = "#bfe2fd";
  third.style.color = "#000000";
  fourth.style.background = "none";
  fourth.style.color = "#ffffff";
}

// personal
let names = document.querySelector("#name");
let email = document.querySelector("#email");
let tel = document.querySelector("#tel");
let submit = document.querySelector("#submit");
let warn = document.querySelector("h4");
submit.addEventListener("click", action);

function action(event) {
  event.preventDefault();
  if (
    names.value.length == " " ||
    email.value.length == " " ||
    tel.value.length == " "
  ) {
    warn.style.visibility = "visible";
    return false;
  } else {
    warn.style.visibility = "hidden";
    first.style.background = "none";
    first.style.color = "#ffffff";
    second.style.background = "#bfe2fd";
    second.style.color = "#000000";
    info.style.display = "none";
    plan.style.display = "block";
  }
}

// plan
let next = document.querySelector(".next");
next.addEventListener("click", foward);
function foward() {
  plan.style.display = "none";
  pick.style.display = "block";
  second.style.background = "none";
  second.style.color = "#ffffff";
  third.style.background = "#bfe2fd";
  third.style.color = "#000000";
}

// pick
let pickfront = document.querySelector("#pick-front");
pickfront.addEventListener("click", pickF);
function pickF() {
  pick.style.display = "none";
  finish.style.display = "block";
  third.style.background = "none";
  third.style.color = "#ffffff";
  fourth.style.background = "#bfe2fd";
  fourth.style.color = "#000000";
}

// finish
let last = document.querySelector("#confirm");
last.addEventListener("click", final);
function final() {
  finish.style.display = "none";
  congrats.style.display = "block";
  fourth.style.background = "none";
  fourth.style.color = "#ffffff";
}
