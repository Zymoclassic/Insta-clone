import React from 'react'
import mediamodifier from '../assets/images/mediamodifier.png';
import '../assets/styles/mediamodifier.css';
import { useState } from 'react';
import { Placeholder } from '../assets/js/file';
import Suggestions from './Suggestions';

function Mediamodifier() {

  const [data, setData] = useState(Placeholder);

  return (
    <section className='parent'>
        <div className='firstchild'>
            <div><img id='mmimage' src={mediamodifier} alt="" /></div>
            <div>
              <h4 className='media'>mediamodifier</h4>
              <p className='paragraph'>Mediamodifier•Building Brands</p>
            </div>

            <a className='borderlessbutton' href="http://">Switch</a>
        </div>

      <div className='secondchild'>
         <div>
          <p className='paragraph'>Suggestions For You</p>
         </div>
         <div>
           <a className='media' href="http://">See All</a>
           </div>
      </div>

        <div>
        {
        data.map(({id, image, user, caption, followers}) => 
        <Suggestions key={id} image={image} user={user} caption={caption} followers={followers} />)
      }
        </div>
        <div></div>
    </section>
  )
}

export default Mediamodifier