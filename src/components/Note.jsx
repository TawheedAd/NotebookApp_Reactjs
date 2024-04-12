import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Note(prop) {
  function handleClick() {
    prop.onDelete(prop.id);
  }

  return (
    <div className="flex w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
        <div className="p-6">
          <div className="uppercase text-sm text-indigo-500 font-semibold">Note</div>
          <h1 className="mt-2 text-lg font-medium text-black">{prop.title}</h1>
          <p className="mt-2 text-gray-500">{prop.content}</p>
          <button className="mt-4 text-yellow-500 float-right" type="button" onClick={handleClick}>
            <DeleteIcon />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Note;
