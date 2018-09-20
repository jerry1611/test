import React from 'react';
import { Link } from 'react-router-dom';
const NotFoundPage = () => {
  return (
    <p>
      {' '}
      404 not Found!
      <Link to="/">Go Home</Link>
    </p>
  );
};
export default NotFoundPage;
