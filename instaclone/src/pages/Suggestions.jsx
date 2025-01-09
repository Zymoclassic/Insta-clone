import React from 'react';
import '../assets/styles/posts.css';

const Suggestions = ({id, image, user, caption, followers}) => {
  return (
    <section>
      
      <div className="suggestions_post">
        <div className='s_info'>
        <img className="s_image" src={image}/>
        <div className='suggestions_info'>
          <p className='media'>{user}</p>
          <p className='paragraph'>{followers}</p>
        </div>
        </div>
        <a className='borderlessbutton'>Follow</a>
      </div>

    </section>
  )
}

export default Suggestions
