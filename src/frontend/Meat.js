import React from 'react';
const Meat = () => {
  return (
    <div>
      <section id='meat'>
        <div className='container'>
          <h2 className='text-center mt-4'>Meats</h2>
          <div className='row'>
            <div className='card col-md-3'>
              <img height={'230px'} src='images/beef.png' alt='meat img' />
              <div className='card-body '>
                <h5 className='text-center card-title'>Beef</h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ex ullam excepturi ea magni obcaecati cumque
                  accusamus quae quia veniam perspiciatis, libero quisquam
                  voluptatibus velit minima facere exercitationem aliquam rerum.
                </p>

                <div className='row'>
                  <p className=''>MMK 15000</p>
                  <p className='ml-auto'>
                    <i className='fa-solid fa-cart-arrow-down fa-2xl'></i>
                    <span className='badge badge-bill badge-dark ml-2'>0</span>
                  </p>
                </div>
                <div className='text-center'>
                  <a className='card-btn text-center'>
                    <i class='fa-solid fa-cart-arrow-down'></i>
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className='card col-md-3'>
              <img height={'230px'} src='images/pork1.png' alt='meat img' />
              <div className='card-body '>
                <h5 className='text-center card-title'>Beef</h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ex ullam excepturi ea magni obcaecati cumque
                  accusamus quae quia veniam perspiciatis, libero quisquam
                  voluptatibus velit minima facere exercitationem aliquam rerum.
                </p>

                <div className='row'>
                  <p className=''>MMK 15000</p>
                  <p className='ml-auto'>
                    <i className='fa-solid fa-cart-arrow-down fa-2xl'></i>
                    <span className='badge badge-bill badge-dark ml-2'>0</span>
                  </p>
                </div>
                <div className='text-center'>
                  <a className='card-btn text-center'>
                    <i class='fa-solid fa-cart-arrow-down'></i>
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className='card col-md-3'>
              <img height={'230px'} src='images/pork2.png' alt='meat img' />
              <div className='card-body '>
                <h5 className='text-center card-title'>Beef</h5>
                <p className='card-text'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Aperiam, ex ullam excepturi ea magni obcaecati cumque
                  accusamus quae quia veniam perspiciatis, libero quisquam
                  voluptatibus velit minima facere exercitationem aliquam rerum.
                </p>

                <div className='row'>
                  <p className=''>MMK 15000</p>
                  <p className='ml-auto'>
                    <i className='fa-solid fa-cart-arrow-down fa-2xl'></i>
                    <span className='badge badge-bill badge-dark ml-2'>0</span>
                  </p>
                </div>
                <div className='text-center'>
                  <a className='card-btn text-center'>
                    <i class='fa-solid fa-cart-arrow-down'></i>
                    View
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Meat;
