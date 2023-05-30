import React from 'react';

const Home = () => {
    console.log('Firebase domain',import.meta.env.VITE_REACT_APP_authDomain)
    return (
        <div>
            <h2 className='text-yellow-400'>This is the Home page</h2>
        </div>
    );
};

export default Home;