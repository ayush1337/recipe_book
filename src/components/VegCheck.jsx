import React from 'react';

const VegCheck = ({ vegetarian }) => {
  return (
    <div
      className={`text-white text-xs rounded-full border p-1  ${
        vegetarian ? ' border-green-600' : ' border-red-600'
      } `}
    >
      <div
        className={`  bg-gradient-to-r w-2 h-2 rounded-full ${
          vegetarian
            ? 'from-green-400 to-green-600 '
            : 'from-red-400 to-red-600 '
        } `}
      ></div>
    </div>
  );
};

export default VegCheck;
