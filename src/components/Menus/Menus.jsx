import React from 'react';
import './Menus.css';
import { Link } from 'react-scroll';
import { FcAbout, FcHome } from 'react-icons/fc';
import { MdBiotech } from 'react-icons/md';
import { BsPersonWorkspace } from 'react-icons/bs';
import { FaBookReader } from 'react-icons/fa';
import { GiFilmProjector } from 'react-icons/gi';
import { MdConnectWithoutContact } from 'react-icons/md';
import Zoom from 'react-reveal/Zoom';
import pic from '../../asssets/images/shiva.jpeg';

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
          <Zoom>
            <div className='nav-profile-pic'>
              <img src={pic} alt='profile pic' />
            </div>
          </Zoom>

          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link
                  to='home'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <FcHome />
                  <span className='ml-2'>Home</span>
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <FcAbout />
                  <span className='ml-2'>About</span>
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='education'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <FaBookReader />
                  <span className='ml-2'>Education</span>
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='techstack'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <MdBiotech />
                  <span className='ml-2'>Tech Stack</span>
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='project'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <GiFilmProjector />
                  <span className='ml-2'>Project</span>
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='work-exp'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <BsPersonWorkspace />
                  <span className='ml-2'>Work Experience</span>
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <MdConnectWithoutContact />
                  <span className='ml-2'>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className='nav-items'>
            <div className='nav-item'>
              <div className='nav-link'>
                <Link
                  to='home'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <FcHome />
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='about'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <FcAbout />
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='education'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <FaBookReader />
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='techstack'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <MdBiotech />
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='project'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <GiFilmProjector />
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='work-exp'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <BsPersonWorkspace />
                </Link>
              </div>
              <div className='nav-link'>
                <Link
                  to='contact'
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  className='flex items-center'
                >
                  <MdConnectWithoutContact />
                </Link>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
