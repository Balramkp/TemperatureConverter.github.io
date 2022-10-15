let celsius = document.getElementById("celsius");
let fahreheit = document.getElementById("fahrenheit");

celsius.addEventListener("input", function () {
  let c = this.value;
  let f = (c * 9) / 5 + 32;
  if (!Number.isInteger(f)) {
    f = f.toFixed(4);
  }
  fahreheit.value = f;
});
fahreheit.addEventListener("input", function () {
  let f = this.value;
  let c = ((f - 32) * 5) / 9;
  if (!Number.isInteger(c)) {
    c = c.toFixed(4);
  }
  celsius.value = c;
});
