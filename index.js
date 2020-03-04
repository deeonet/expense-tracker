'use strict';

const tBalance = document.querySelector('#total-balance span');
const tIncome = document.querySelector('#total-income span');
const tExpense = document.querySelector('#total-expense span');
const list = document.querySelector('#transaction-list');
const transDescription = document.querySelector('#description');
const transAmount = document.querySelector('#amount');
const submit = document.querySelector("input[type = 'submit']");
const radio = document.forms["formA"].elements["amount-type"];
const form = document.querySelector('#form');
const transType = document.querySelector('#transaction-type');
//const deleteBtn = document.querySelector(".delete");

let transactionType;
let totalBalance;
let description;
let amount;
let prefix;
let deleteBtn = `<button type="button" class="btn btn-danger delete">x</button>`

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if ((!(transactionType)) || (!(transDescription.value.trim())) || (!(transAmount.value))) {
    alert('All input fields are required');
  } else {
    updateTotalBalance(parseFloat(transAmount.value));
    setPrefix(transactionType);
    addToList(transDescription.value, transAmount.value);
    updateIncomeAndExpense(transactionType, parseFloat(transAmount.value));
    //clear input fields
    transAmount.value = '';
    transDescription.value = '';
  }
});

//add the transaction to the list of transaction and update the DOM
function addToList(desc, am) {
  let li = document.createElement('li');
  li.classList.add('transaction-item');
  li.classList.add(`${transactionType}`);
  li.innerHTML = `${deleteBtn}${desc} <span>${prefix}${am}</span>`;
  list.appendChild(li);
}

//updates the value of the total balance in the DOM
function updateTotalBalance(value) {
  let newBalance = parseFloat(tBalance.textContent);

  if (transactionType === 'expense') {
    newBalance -= value;
  } else if (transactionType === 'income') {
    newBalance += value;
  }
  tBalance.textContent = newBalance.toFixed(2)
}

function updateIncomeAndExpense(tranType, value) {
  if (tranType === 'expense') {
    let newExpense = parseFloat(tExpense.textContent);
    newExpense += value;
    tExpense.textContent = newExpense.toFixed(2);
  }else if(tranType === 'income'){
    let newIncome = parseFloat(tIncome.textContent);
    newIncome += value;
    tIncome.textContent = newIncome.toFixed(2);
  }
}
//this listens and sets a value for the transaction type
transType.addEventListener('click', function(e) {
  for (let i = 0; i < radio.length; i++) {
    if (e.target == radio[i]) {
      transactionType = radio[i].value;
    }
  }
});
//This function adds a prefix to the amount entered wrt the transaction transType
function setPrefix(varTransactionType) {
  if (varTransactionType === 'expense') {
    prefix = '-';
  } else {
    prefix = '+';
  }
}

list.addEventListener('click', function(e){
  if(e.target.classList.contains('delete')){
    let value = (e.target.nextElementSibling.textContent).trim();
    if(confirm('Do you really want to delete this?')){
        if(e.target.parentElement.classList.contains('expense')){
          reverseUpdateIncomeAndExpense('expense', parseInt(value));
          transactionType = 'income';
          updateTotalBalance(Math.abs(parseInt(value)));
        }else{
          reverseUpdateIncomeAndExpense('income', parseInt(value));
          transactionType = 'expense';
          updateTotalBalance(Math.abs(parseInt(value)));
        }
      e.target.parentElement.remove();
    }
  }
});

function reverseUpdateIncomeAndExpense(transType, value){
  if (transType === 'expense'){
    let newExpense = parseFloat(tExpense.textContent);
    newExpense += value;
    tExpense.textContent = newExpense.toFixed(2);

  }else if (transType === 'income'){
    let newIncome = parseFloat(tIncome.textContent);
    newIncome -= value;
    tIncome.textContent = newIncome.toFixed(2);
}
}
