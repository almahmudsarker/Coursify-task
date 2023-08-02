import React from 'react';
import Card from './card';

const Home = () => {
    return (
      <>
        <div>
          <h1 className="text-3xl font-bold text-center py-10">
            Welcome to our Recruitment Portal
          </h1>
          <p className="text-base font-bold text-center">
            We connect companies with talented professionals.
          </p>
          <p className="text-sm font-bold text-center">
            Join us to find your dream job or hire the best candidates.
          </p>
          <div className='flex flex-row'>
            <Card />
          </div>
        </div>
      </>
    );
};

export default Home;