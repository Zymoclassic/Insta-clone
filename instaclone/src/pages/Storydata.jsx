import React from 'react';
import Stories from './Stories';

const Storydata = ({id, image, user}) => {
  return (
    <article className='story'>
      <div className='storycheck'>
        <img className="story_image" src={image}/>
      </div>
      <div className="user_name">
         <h3>{user}</h3>
      </div>
    </article>
  )
}

export default Storydata;
