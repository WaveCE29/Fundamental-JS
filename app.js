let qrt = prompt("Enter number of products");
var sum = 0;
for (var i = 1; i <= qrt; i++) {
  let item_price = prompt("Enter price of item " + i);
  document.getElementById("price_list").innerHTML +=
    "Number of item " + i + ": " + item_price + " baht" + "<br>";
  sum += parseInt(item_price);
}
document.getElementById("result").innerHTML = "Total price: " + sum + " baht";
