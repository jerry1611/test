import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expensesReducer';
import filterReducer from '../reducers/filterReducer';

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expensesReducer,
      filters: filterReducer
    })
  );

  return store;
};
