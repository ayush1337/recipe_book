import React from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import VegCheck from './VegCheck';
const BlackCard = ({
  id,
  title,
  summary,
  image,
  vegetarian,
  readyInMinutes,
}) => {
  return (
    <Link
      to="#"
      style={{ '--image-url': `url(${image})` }}
      className="min-h-[50dvh] bg-[image:var(--image-url)]  rounded-xl bg-cover bg-center relative overflow-hidden flex flex-col shadow"
    >
      <div className="p-4 mt-auto z-20 flex flex-col gap-2 pb-4">
        <h1 className="font-semibold truncate text-white">{title}</h1>
        <div className="flex gap-2 items-center">
          <VegCheck vegetarian={vegetarian} />
          <p className="flex items-center gap-1   text-white px-2 py-1 text-xs rounded-lg backdrop-blur-lg border border-white border-opacity-40">
            {readyInMinutes} mins
          </p>
        </div>
        <p className="truncat line-clamp-3 text-sm font-light opacity-75 text-white ">
          {parse(summary)}
        </p>
        <p className="px-2 py-1 rounded text-opacity-85 text-xs text-white bg-gradient-to-r from-amber-500 to-orange-500 mt-auto self-end font-medium text-end">
          Check recipe {'->'}
        </p>
      </div>
      <div className="bg-gradient-to-t from-black absolute bottom-0 w-full z-10 h-full"></div>
    </Link>
  );
};

export default BlackCard;
