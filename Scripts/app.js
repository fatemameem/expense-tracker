// Getting Input value from the user for expenses
function getInputValue(id) {
  let inputVal = document.getElementById(id + "-expense");
  const value = parseFloat(inputVal.value);
  inputVal.value = "";
  return value;
}
// Validating the input value from the user
function validate(id) {
  if (id < 0 || isNaN(id)) {
    return false;
  } else {
    return true;
  }
}
// initiating variables for calculation of the expenses and savings
let balances = 0;
let income = 0;
// calculation of expenses and showing an alert if the number is invalid
function calculateExpenses() {
  const food = getInputValue("food");
  const rent = getInputValue("rent");
  const clothes = getInputValue("clothes");
  const incomeAmount = document.getElementById("income-amount");
  const totalExpenses = document.getElementById("expenses-total");
  const totalBalance = document.getElementById("balance");
  const alertMessage = document.getElementById("alertBox");
  const calculationAlert = document.getElementById("alertMsg");
  const alerts = document.getElementById("alertInput");
  income = parseFloat(incomeAmount.value);
  let expenses = 0;
  if (!validate(income)) {
    alerts.innerText = "income";
    alertMessage.style.display = "block";
    incomeAmount.value = "";
    return;
  } else if (!validate(food)) {
    alerts.innerText = "food";
    alertMessage.style.display = "block";
    incomeAmount.value = "";
    return;
  } else if (!validate(rent)) {
    alerts.innerText = "rent";
    alertMessage.style.display = "block";
    incomeAmount.value = "";
    return;
  } else if (!validate(clothes)) {
    alerts.innerText = "clothes";
    alertMessage.style.display = "block";
    incomeAmount.value = "";
    return;
  } else {
    console.log(food, rent, clothes);
    expenses = food + rent + clothes;
    balances = income - expenses;
  }
  if (expenses > income) {
    calculationAlert.style.display = "block";
    incomeAmount.value = "";
    // alert("Expenses cannot be greater than income");
    return;
  } else {
    alertMessage.style.display = "none";
    totalExpenses.innerText = expenses.toFixed(2);
    totalBalance.innerText = balances.toFixed(2);
    incomeAmount.value = "";
  }
}
// calculation of savings and showing an alert if it is not valid
function calculateSavings() {
  const savingsPercentage = document.getElementById("saving-percentage");
  const savings = document.getElementById("saving-balance");
  const remainingBalance = document.getElementById("remaining-balance");
  const alertSavings = document.getElementById("alertSavings");
  const savingsAmount = parseFloat(savingsPercentage.value);
  if (savingsAmount < 0 || isNaN(savingsAmount)) {
    alert("Please enter a valid number");
    return;
  } else {
    savingCalculation = income * (savingsAmount / 100);
    if (savingCalculation >= balances) {
      // alert("Savings cannot be greater than balance");
      alertSavings.style.display = "block";
      savingsPercentage.value = "";
      return;
    } else {
      savings.innerText = savingCalculation.toFixed(2);
      remainingBalance.innerText = (balances - savingCalculation).toFixed(2);
      savingsPercentage.value = "";
    }
  }
}
// adding event listeners to the calculate and save buttons
document
  .getElementById("calculate-expenses")
  .addEventListener("click", calculateExpenses);
document
  .getElementById("calculate-savings")
  .addEventListener("click", calculateSavings);
