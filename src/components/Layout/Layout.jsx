import React, { useState } from 'react';
import Home from '../../pages/Home/Home';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from 'react-icons/ai';
import './Layout.css';
import Menus from '../Menus/Menus';

const Layout = () => {
  const [toggle, setToggle] = useState(true);

  // Change toggle
  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className='flex'>
      <div className={toggle ? 'w-16 bg-gray-800 text-white sidebar' : 'w-16 bg-gray-800 text-white sidebar hidden md:block'}>
        <div className='sidebar-toggle-icons'>
          <p onClick={handleToggle}>
            {toggle ? (
              <AiOutlineDoubleLeft size={30} />
            ) : (
              <AiOutlineDoubleRight size={30} />
            )}
          </p>
        </div>
        <Menus toggle={toggle} />
      </div>
      <div className='container mx-auto'>
        <Home />
      </div>
    </div>
  );
};

export default Layout;
