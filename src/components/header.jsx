import React from 'react';
import EditNoteIcon from '@mui/icons-material/EditNote';
// import Logo from './Logo'; // Import your logo component

function Header() {
  return (
    <div className='w-full p-6 mb-12 bg-yellow-600 h-16 flex items-center justify-between shadow-2xl'>
      {/* Logo */}
      <div className="flex items-center">
    
        <h1 className="text-xl font-bold ml-2 text-white"><EditNoteIcon style={{ fontSize: 35 }}  />Notes</h1>
      </div>
      
      {/* Right side content */}
      {/* Add any content you want to appear on the right side */}
    </div>
  );
}

export default Header;
