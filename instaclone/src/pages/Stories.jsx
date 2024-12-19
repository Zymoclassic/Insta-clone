import React from 'react';
import '../assets/styles/stories.css';
import { useState } from 'react';
import { Placeholder } from '../assets/js/file';
import Storydata from './Storydata';

const Stories = () => {

  const [storyData, setStoryData] = useState(Placeholder);

  return (
    <section className='stories_section'>
      <div className="container storiesContainer">
      {
        storyData.map(({id, image, user}) => 
        <Storydata key={id} image={image} user={user} />)
      }
      </div>
    </section>
  )
}

export default Stories;
