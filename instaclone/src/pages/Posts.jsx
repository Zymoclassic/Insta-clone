import React from 'react';
import '../assets/styles/posts.css';
import { useState } from 'react';
import { Placeholder } from '../assets/js/file';
import Postdata from './Postdata';

const Posts = () => {

  const [postData, setPostData] = useState(Placeholder);

  return (
    <section>
      <div className="container postContainer">
      {
        postData.map(({id, image, user}) => 
        <Postdata key={id} image={image} user={user} />)
      }
      </div>
    </section>
  )
}

export default Posts
