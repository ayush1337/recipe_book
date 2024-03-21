import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import VegCheck from './VegCheck';
const Card = ({ id, title, summary, image, vegetarian, readyInMinutes }) => {
  return (
    <Link
      to="#"
      className="flex flex-col gap-4 rounded-md bg-white p-4  shadow-sm"
    >
      <div className="rounded-md overflow-hidden">
        <img src={image} alt={title} className="block w-full object-fill" />
      </div>
      <h1 className="font-semibold truncate">{title}</h1>
      <div className="flex gap-2 items-center">
        <VegCheck vegetarian={vegetarian} />
        <p className="flex items-center gap-1 text-xs bg-orange-100 self-start text-orange-600 p-1 rounded bg-opacity-50">
          {readyInMinutes} mins
        </p>
      </div>

      <p className="truncat line-clamp-3 text-sm opacity-90">
        {parse(summary)}
      </p>
      <p className="px-2 py-1 rounded text-opacity-85 text-xs text-white bg-gradient-to-r from-amber-500 to-orange-500 mt-auto self-end font-medium text-end">
        Check recipe {'->'}
      </p>
    </Link>
  );
};

export default Card;
