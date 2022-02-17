function getInputValue(id) {
  let inputVal = document.getElementById(id + "-expense");
  const value = parseFloat(inputVal.value);
  inputVal.value = "";
  return value;
}
function validate(id) {
  if (id < 0 || isNaN(id)) {
    alert("Please enter a valid number");
    return false;
  } else {
    return true;
  }
}
function calculateExpenses() {
  // console.log("button clicked");
  const incomeAmount = document.getElementById("income-amount");
  const food = getInputValue("food");
  const rent = getInputValue("rent");
  const clothes = getInputValue("clothes");
  const totalExpenses = document.getElementById("expenses-total");
  const totalBalance = document.getElementById("balance");
  const income = parseFloat(incomeAmount.value);
  let expenses = 0;
  console.log(income);
  if (
    !validate(income) ||
    !validate(food) ||
    !validate(rent) ||
    !validate(clothes)
  ) {
    return;
  } else {
    console.log(food, rent, clothes);
    expenses = food + rent + clothes;
  }
  if (expenses > income) {
    alert("Expenses cannot be greater than income");
    return;
  } else {
    console.log(totalExpenses.innerText);
    totalExpenses.innerText = expenses.toFixed(2);
    totalBalance.innerText = (income - expenses).toFixed(2);
    incomeAmount.value = "";
  }
}
document
  .getElementById("calculate-expenses")
  .addEventListener("click", calculateExpenses);
