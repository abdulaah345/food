import React from 'react'
import Header from './Header'
import './Home.css';
import pic from './../../assets/sec.JPG'
import integ from './../../assets/int.JPG'

const Home = () => {
  return (
    <>
       <Header/>

        <section className='number'>
          <div className='container'>
            <div className='row'>
            <div className='col-md-3'>
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className='col-md-3'>
              <h2>5786+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className='col-md-3'>
              <h2>1440+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className='col-md-3'>
              <h2>7110+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
          </div>

        </section>
        <section className='sec'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
                <img src={pic} title='pic'></img>
              </div>
              <div className='col-md-6'>
                  <h2>We pride ourselves on making real food from the best ingredients.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                  <button><a href='#'>Learn More</a></button>
              </div>

            </div>

          </div>

        </section>
        <section className='integ'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6'>
              <h2>We make everything by hand with the best possible ingredients.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                 <ul>
                  <li>Etiam sed dolor ac diam volutpat.</li>
                  <li>Erat volutpat aliquet imperdiet. </li>
                  <li>purus a odio finibus bibendum.</li>
               
                 </ul>
                  <button><a href='#'>Learn More</a></button>
                
              </div>
              <div className='col-md-6'>
              <img src={integ} alt='integ'></img>
              </div>

            </div>

          </div>

        </section>
        <section className='pradiex'>
          <div className='container'>
            <div className='row'>
              <div className='co-lg-12 co-md-12'>
                  <h2>When a man's stomach is full it makes no <br/> difference whether he is rich or poor.</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio     <br/>             finibus bibendum in sit amet leo. Mauris feugiat erat tellus.</p>
                  <a href='#'>Watch Our Story</a>
              </div>

            </div>
            </div> 

        </section>
    </>
  )
}

export default Home
