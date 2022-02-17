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
let balances = 0;
// let incomeAmount = 0;
let income = 0;
function calculateExpenses() {
  const food = getInputValue("food");
  const rent = getInputValue("rent");
  const clothes = getInputValue("clothes");
  const incomeAmount = document.getElementById("income-amount");
  const totalExpenses = document.getElementById("expenses-total");
  const totalBalance = document.getElementById("balance");
  income = parseFloat(incomeAmount.value);
  let expenses = 0;
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
    balances = income - expenses;
  }
  if (expenses > income) {
    alert("Expenses cannot be greater than income");
    return;
  } else {
    console.log(totalExpenses.innerText);
    totalExpenses.innerText = expenses.toFixed(2);
    totalBalance.innerText = balances.toFixed(2);
    incomeAmount.value = "";
  }
}
function calculateSavings() {
  const savingsPercentage = document.getElementById("saving-percentage");
  const incomeBalanceValue = document.getElementById("income-amount");
  const savings = document.getElementById("saving-balance");
  const remainingBalance = document.getElementById("remaining-balance");
  const savingsAmount = parseFloat(savingsPercentage.value);
  if (savingsAmount < 0 || isNaN(savingsAmount)) {
    alert("Please enter a valid number");
    return;
  } else {
    savingCalculation = income * (savingsAmount / 100);
    if (savingCalculation >= balances) {
      alert("Savings cannot be greater than balance");
      savingsPercentage.value = "";
      return;
    } else {
      savings.innerText = savingCalculation.toFixed(2);
      remainingBalance.innerText = (balances - savingCalculation).toFixed(2);
      savingsPercentage.value = "";
    }
  }
}
document
  .getElementById("calculate-expenses")
  .addEventListener("click", calculateExpenses);
document
  .getElementById("calculate-savings")
  .addEventListener("click", calculateSavings);
