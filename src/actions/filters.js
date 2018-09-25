export const setTextFilter = ({ text = '' } = {}) => {
  return {
    type: 'SET_FILTER',
    text
  };
};

export const sortByAmount = () => {
  return {
    type: 'SORT_BY_AMOUNT'
  };
};

export const sortByDate = () => {
  return {
    type: 'SORT_BY_DATE'
  };
};

export const setStartDate = startDate => {
  return {
    type: 'START_DATE',
    startDate
  };
};

export const setEndDate = endDate => {
  return {
    type: 'END_DATE',
    endDate
  };
};
