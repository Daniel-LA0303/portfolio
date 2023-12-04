import React from 'react'

const Experience = () => {

  const experiences = [
    { title: 'Trabajo 1', description: 'Descripción del trabajo 1', date: 'Fecha 1' },
    { title: 'Trabajo 2', description: 'Descripción del trabajo 2', date: 'Fecha 2' },
    // Agrega más experiencias laborales según sea necesario
  ];

  return (
    <div className='text-white'>
      <div className='px-5'>
        <p className='text-green-500 text-5xl mb-4'>Experience</p>

      </div>
    
      <div className="wrapper">
        <div className="center-line">
          {/* <a href="#" className="scroll-icon"><i className="fas fa-caret-up"></i></a> */}
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-home"></i>
            <div className="details">
              <span className="title">Title of Section 1</span>
              <span className=' text-sm sm:text-base'>1st Jan 2021</span>
            </div>
            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
            <p>lo</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-star"></i>
            <div className="details">
              <span className="title">Title of Section 2</span>
              <span className=' text-sm sm:text-base'>2nd Jan 2021</span>
            </div>
            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-rocket"></i>
            <div className="details">
              <span className="title">Title of Section 3</span>
              <span className=' text-sm sm:text-base'>3rd Jan 2021</span>
            </div>
            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-globe"></i>
            <div className="details">
              <span className="title">Title of Section 4</span>
              <span className=' text-sm sm:text-base'>4th Jan 2021</span>
            </div>
            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div className="row row-1">
          <section>
            <i className="icon fas fa-paper-plane"></i>
            <div className="details">
              <span className="title">Title of Section 5</span>
              <span className=' text-sm sm:text-base'>5th Jan 2021</span>
            </div>
            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
        <div className="row row-2">
          <section>
            <i className="icon fas fa-map-marker-alt"></i>
            <div className="details">
              <span className="title">Title of Section 6</span>
              <span className=' text-sm sm:text-base'>6th Jan 2021</span>
            </div>
            <p>Lorem ipsum dolor sit ameters consectetur adipisicing elit. Sed qui veroes praesentium maiores, sint eos vero sapiente voluptas debitis dicta dolore.</p>
            <div className="bottom">
              <a href="#">Read more</a>
              <i>- Someone famous</i>
            </div>
          </section>
        </div>
      </div>

    </div>
  )
}

export default Experience