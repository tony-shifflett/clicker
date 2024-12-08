//imports
import 'bootstrap/dist/css/bootstrap.min.css';
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
  if ($(event.target).attr("id") == "first-counter") {
    firstButtonClicks++;
    $("#button-count").text(`${firstButtonClicks}`);
  }
  //special case - the second hard-coded button
  else if ($(event.target).attr("id") == "second-counter") {
  }
  //all other buttons are added by the add button, and have an internal counter
  else {
    $(event.target).incrementTimesClicked();
  }
};

$("#button-count").append(`${firstButtonClicks}`);
$("#second-button-count");

const addButtonHandler = () => {
  //create an instance of TediousButton with an id equal to its index, then add it to the index
  const anotherFnButton = new TediousButton(tediousButtonArray.length);
  tediousButtonArray.push(anotherFnButton);
  console.log(tediousButtonArray);
  const $button = $("<button>").text("Click Me!").addClass("btn btn-primary");
  $(".btn-group").append($button);
  $button.on("click", buttonClickHandler);
};

$("#first-counter").on("click", buttonClickHandler);
$("#add").on("click", addButtonHandler);
