import React from 'react';

export const IncomeExpenses = () => {
  return (
    <div class="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" class="money plus">+PKR 0.00</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" class="money minus">-PKR 0.00</p>
      </div>
    </div>
  )
}
