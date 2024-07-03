lotto = prompt("Enter your Lotto Number:")
document.getElementById("input").innerHTML = "Your Input : " + lotto;
document.getElementById("result").innerHTML =
  "Number is Lotto : " + Math.floor(Math.random() * 100);
