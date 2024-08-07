function toCelcius() {
  let fahrenheit = prompt("Enter the temperature in Fahrenheit: ");
  let value = ((fahrenheit - 32) * 5) / 9;
  document.getElementById("result").innerHTML = value.toFixed(2) + "°C";
}


function toFahrenheit() {
  let celsius = prompt("Enter the temperature in Celsius: ");
  let value = (celsius * 9) / 5 + 32;
  document.getElementById("result").innerHTML = value.toFixed(2) + "°F";
}
toCelcius();
toFahrenheit();