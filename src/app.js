/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
const mainexcuse = () => {
  console.log("excuse");

  let excuse = document.querySelector("#excuse");
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomwho = Math.floor(Math.random() * who.length);
  console.log(who[randomwho]);

  let randomaction = Math.floor(Math.random() * action.length);
  console.log(randomaction[randomwho]);

  let randomwhat = Math.floor(Math.random() * what.length);
  console.log(randomwhat[randomwhat]);

  let randomwhen = Math.floor(Math.random() * when.length);
  console.log(randomwhen[randomwhen]);

  excuse.innerHTML =
    "<h1>" +
    who[randomwho] +
    " " +
    action[randomaction] +
    " " +
    what[randomwhat] +
    " " +
    when[randomwhen] +
    "</h1>";
};

window.onload = () => {
  //write your code here
  console.log("");
  mainexcuse();
};
