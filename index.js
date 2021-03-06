var totalDrums = document.getElementsByClassName("drum").length;

// handle cases when someone clicks on the drum buttons
for (var i = 0; i < totalDrums; ++i) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // "this" stores data of that button which was clicked by the user and from that data, we are just taking textContent i.e
    //  "w" or "a" or "s" or "d" or "j" or "k" or "l"
    var buttonTextContent = this.textContent;

    makeSound(buttonTextContent);

    buttonAnimation(buttonTextContent);
  });
}

// handle cases when someone presses keys of keyboard
document.addEventListener("keydown", function(event) {
  // "event" stores information related to the key which is being presses by the user and from that information, we are taking key i.e.
  // which character key is pressed by user
  makeSound(event.key);

  buttonAnimation(event.key);
});

// now here we are trying to create sound according to the key or button pressed by the user
function makeSound(key){

  switch (key) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    default:
  }
}

// here we are adding animation to the button which is being presses or clicked by the user
function buttonAnimation(key){
  var activeButton = document.querySelector("." + key);

  // adding 1 more class to the activeButton so that animation can be put on it
  activeButton.classList.add("pressed");

  // setTimeout() is basically a function which is removing our class="pressed" after interval of 0.1sec so that particular animation vanishes
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);

  // here time=100 is in milliseconds
}
