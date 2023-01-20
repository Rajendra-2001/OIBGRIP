function calculateTemp(params) {
  var numberTemp = document.getElementById("temp").value;
  // console.log(numberTemp);
  var opt_Select = document.getElementById("temp_diff").selectedIndex;
  // console.log(opt_Select);
  var result;
  if (opt_Select === 0) {
    result = numberTemp * 1.8 + 32;
    document.getElementById("resultContainer").innerHTML =
      "= " + result + "°Fahrenheit";
  } else {
    result = ((numberTemp - 32) * 5) / 9;
    document.getElementById("resultContainer").innerHTML =
      "= " + result + "°Celsius";
  }
  // return result;
}
