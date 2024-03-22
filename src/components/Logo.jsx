import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <h1 className="text-3xl font-bold tracking-tighter text-orange-600">
        cookit.
      </h1>
    </Link>
  );
};

export default Logo;
