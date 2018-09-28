import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';

const ExpenseList = props => {
  return (
    <div>
      <h1>Expense List</h1>
      {props.expenses.map(expense => {
        return <ExpenseListItem {...expense} key={expense.id} />;
      })}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};
export default connect(mapStateToProps)(ExpenseList);
