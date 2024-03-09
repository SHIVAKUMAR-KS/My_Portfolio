import React from 'react';
import { TechstackList } from '../../utils/TechstackList';

const Techstack = () => {
  return (
    <div className='container techstack' id='techstack'>
      <h2 className='col-12 mt-3 mb-1 text-center text-uppercase'>
        Technologies Stack
      </h2>
      <hr />
      <p className='pb-2 text-center'>
        ❤️❤️ including program language, framework, database, frontend, backend,
        and API's
      </p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
        {TechstackList.map((tech) => (
          <div key={tech._id}>
            <div className='card m-2'>
              <div className='card-content mt-1'>
                <div className='card-body'>
                  <div className='flex justify-center items-center'>
                    <div className='self-center'>
                      <tech.icon className='w-12 h-12' />
                    </div>
                    <div className='ml-4'>
                      <h5>{tech.name}</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Techstack;
