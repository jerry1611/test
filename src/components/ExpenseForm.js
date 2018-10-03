import React from 'react';

class ExpenseForm extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" autoFocus placeholder="Description" />
          <input type="number" autoFocus placeholder="amount" />
          <textarea placeholder="Add a note to your expense " />
          <button>Add Expense</button>
        </form>
      </div>
    );
  }
}

export default ExpenseForm;
