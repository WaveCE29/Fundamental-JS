function toCelsius(fahrenheit) {
  let result = (5/9) * (fahrenheit-32);
  return result.toFixed(2);
}

function toFahrenheit(celsius) {
  let result = (celsius * 9/5) + 32;
  return result.toFixed(2);
}

function display(elementID, value) {
  document.getElementById(elementID).innerHTML = "<b>"+value+"</b>";
}

function toCelsiusProgram(value){
  alert(toCelsius(value));
}

function toFahrenheitProgram(value) {
  alert(toFahrenheit(value));
}