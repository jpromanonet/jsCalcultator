const calculator = document.querySelector(".calculator");
const keys = calculator.querySelector(".calculator__keys");

keys.addEventListener("click", e => {
  if (e.target.matches("button")) {
    const key = e.target;
    const action = key.dataset.action;
    if (!action) {
      console.log("Number key!");
    }
    if (
      action === "add" ||
      action === "substract" ||
      action === "multiply" ||
      action === "divide"
    ) {
      console.log("Operator key!");
    }
    if (action === "decimal") {
      console.log("Decimal key!");
    }
    if (action === "clear") {
      console.log("Clear key!");
    }
    if (action === "calculate") {
      console.log("Equal key!");
    }
  }
});
