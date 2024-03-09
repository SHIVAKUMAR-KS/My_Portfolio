import React from 'react';
import pic from '../../asssets/images/shiva.jpeg';

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='flex flex-wrap'>
        <div className='md:w-1/2 xl:w-1/4 lg:w-1/5 xs:w-1/3 about-img'>
          <img src={pic} alt='profile_pic' className='w-full h-full' />
        </div>
        <div className='md:w-1/2 xl:w-3/4 lg:w-4/5 xs:w-2/3 about-content'>
          <h1 className='text-3xl font-bold mb-4'>About me</h1>
          <p className='mb-4'>
            <b>A passionate software developer from India</b>
          </p>
          <hr className='mb-4' />
          <p className='mb-4'>
            lorem inspndafjc ndnj cjdnf j jndjdeneffj djend c jfniefn f fae
            fejferebg btgwev cuefberew frrwrwrer fae frwerwevv rrtWEF RGRTWF
            ferer
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
