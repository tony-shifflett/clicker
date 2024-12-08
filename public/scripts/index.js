//imports
import "bootstrap/dist/css/bootstrap.min.css";
import $ from "jquery";
import "popper.js";
import "bootstrap";
import { TediousButton } from "./TediousButton.js";

//an array to store buttons as they're created by the user
let tediousButtonArray = [];
let firstButtonClicks = 0;
let secondButtonClicks = 0;
let sumOfClicks =
  firstButtonClicks +
  secondButtonClicks +
  tediousButtonArray.forEach((button) => button.timesClicked);

const buttonClickHandler = (event) => {
  //special case - the first hard-coded button
  const buttonID = $(event.target).attr("id");
  if (buttonID == "first-counter") {
    firstButtonClicks++;
    $("#button-count").text(`${firstButtonClicks}`);
  }
  //special case - the second hard-coded button
  else if (buttonID == "second-counter") {
    secondButtonClicks++;
    $("#second-button-count").text(`${secondButtonClicks}`);
  }
  //all other buttons are added by the add button, and have an internal counter
  else {
  }
};

$("#button-count").append(`${firstButtonClicks}`);
$("#second-button-count").append(`${secondButtonClicks}`);

const addButtonHandler = () => {
  //create an instance of TediousButton with an id equal to its index, then add it to the index
  const anotherFnButton = new TediousButton(
    `button-${tediousButtonArray.length}`
  );
  tediousButtonArray.push(anotherFnButton);
  const $button = $("<button>").text("Click Me!").addClass("btn btn-primary");
  $(".btn-group").append($button);
  $button.on("click", buttonClickHandler);
};

$("#first-counter").on("click", buttonClickHandler);
$("#second-counter").on("click", buttonClickHandler);
$("#add").on("click", addButtonHandler);
