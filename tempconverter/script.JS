const inputTemp = document.getElementById("inputTemp");
const selectTemp = document.getElementById("selectTemp");
const convertButton = document.getElementById("convertButton");
const output = document.getElementById("output");

convertButton.addEventListener("click", function() {
  let inputValue = inputTemp.value;
  let selectValue = selectTemp.value;

  if (selectValue === "celsius") {
    let result = (inputValue * 9) / 5 + 32;
    output.innerHTML = inputValue + "°C = " + result + "°F";
  } else if (selectValue === "fahrenheit") {
    let result = ((inputValue - 32) * 5) / 9;
    output.innerHTML = inputValue + "°F = " + result + "°C";
  } else {
    let result = ((inputValue*1 + 273.15));
    output.innerHTML = inputValue + "°C = " + result + "K";
}});
