import React from 'react';
import ReactDOM from 'react-dom';
const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p> This info is: {props.info}</p>
    </div>
  );
};

const adminWarning = WrappedComponent => {
  return props => {
    return (
      <div>
        {props.isAdmin && <p> this is private info </p>}
        <WrappedComponent {...props} />
      </div>
    );
  };
};

const AdminInfo = adminWarning(Info);
ReactDOM.render(
  <AdminInfo isAdmin={true} info="Something" />,
  document.getElementById('app')
);
