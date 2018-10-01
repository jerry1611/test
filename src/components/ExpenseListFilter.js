import React from 'react';
import { connect } from 'react-redux';

const ExpenseListFilter = props => {
  return (
    <div>
      <input
        type="text"
        value={props.filters.text}
        onChange={e => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilter);
