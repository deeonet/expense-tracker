'use strict';

const tbalance = document.querySelector('#total-balance span');
const tIncome = document.querySelector('#total-income');
const tExpense = document.querySelector('#total-expense');
const list = document.querySelector('#transaction-list');
const transdescription = document.querySelector('#description');
const transamount = document.querySelector('#amount');
const submit = document.querySelector("input[type = 'submit']");
const radio = document.forms["formA"].elements["amount-type"];
const form = document.querySelector('#form');
const transType = document.querySelector('#transaction-type');

let transactionType;
let totalBalance;
let description;


form.addEventListener('submit', function(e) {
  e.preventDefault();
  if( (!(transactionType)) || (!(transdescription.value.trim())) || (!(transamount.value) )) {
    alert('All input fields are required');
  } else{


  }

});

//this listens and sets a value for the transaction type
transType.addEventListener('click', function(e) {
  for (let i = 0; i < radio.length; i++) {
    if (e.target == radio[i]) {
      transactionType = radio[i].value;
    }
  }
});
console.log((parseFloat(tbalance.textContent) + 4).toFixed(2))
console.log(1+1.00)
