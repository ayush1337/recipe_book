import React from 'react';
import Card from './Card';
const SearchList = ({ recipes }) => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  gap-6 ">
      {recipes?.results?.map((recipe) => {
        return <Card {...recipe} />;
      })}
    </div>
  );
};

export default SearchList;
