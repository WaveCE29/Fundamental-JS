let score = prompt("Enter your score: ");
if (score >= 80) {
  document.getElementById("result").innerHTML = "Your Grade is A";
} else if (score >= 70) {
  document.getElementById("result").innerHTML = "Your Grade is B";
} else if (score >= 60) {
  document.getElementById("result").innerHTML = "Your Grade is C";
} else if (score >= 50) {
  document.getElementById("result").innerHTML = "Your Grade is D";
} else {
  document.getElementById("result").innerHTML = "Your Grade is F";      

}

