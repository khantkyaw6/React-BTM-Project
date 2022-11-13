import React from 'react';

const Header = () => {
  return (
    <div id='header'>
      <div className='row pt-5'>
        <div className='col-md-6 text-center p-5'>
          <h2 className='header-title'>What do we do?</h2>
          <p className='header-para'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa minus
            error, vel nobis similique alias fugiat nisi sequi ea hic labore
            animi quo sint esse expedita quia ad vero eos. error, vel nobis
            similique alias fugiat nisi sequi ea hic labore animi quo sint esse
            expedita quia ad vero eos. error, vel nobis similique alias fugiat
            nisi sequi ea hic labore animi quo sint esse expedita quia ad vero
            eos.
          </p>
          <button className='header-btn mt-3'>Learn More</button>
        </div>
        <div className='col-md-6'>
          <img
            src='/images/a.png'
            alt='Home png'
            className='banner-image'
          ></img>
        </div>
      </div>
      <img alt='img' src='/images/b.png' className='imgChg'></img>
    </div>
  );
};

export default Header;
