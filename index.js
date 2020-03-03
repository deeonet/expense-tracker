'use strict';

const tBalance = document.querySelector('#total-balance span');
const tIncome = document.querySelector('#total-income');
const tExpense = document.querySelector('#total-expense');
const list = document.querySelector('#transaction-list');
const transDescription = document.querySelector('#description');
const transAmount = document.querySelector('#amount');
const submit = document.querySelector("input[type = 'submit']");
const radio = document.forms["formA"].elements["amount-type"];
const form = document.querySelector('#form');
const transType = document.querySelector('#transaction-type');

let transactionType;
let totalBalance;
let description;
let amount;
let prefix;


form.addEventListener('submit', function(e) {
  e.preventDefault();
  if( (!(transactionType)) || (!(transDescription.value.trim())) || (!(transAmount.value)) ) {
    alert('All input fields are required');
  }else{
      updateTotalBalance(amount);



      //setPrefix(transactionType);
  }

});

function updateTotalBalance(value){
  if(transactionType === 'expense'){
    tBalance.value -= value;
  }else{
    totalBalance += value;
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
function setPrefix(varTransactionType){
  if (varTransactionType === 'expense'){
    prefix = '-';
  }
  else{
    prefix = '+';
  }
}


/*
console.log((parseFloat(tbalance.textContent) + 4).toFixed(2))
console.log(1+1.00)
*/
