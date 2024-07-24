let round = prompt("Enter the round number: ");
for (var i = 0; i < round; i++) {
  var answer = prompt("Head or Tail: ");
  var random_answer = "";
  if (Math.floor(Math.random() * 10) <= 4) {
    random_answer = "Head";
  } else {
    random_answer = "Tail";
  }
  if (answer == random_answer) {
    console.log("You win!");
  } else {
    console.log("You lose!");
  }
}
