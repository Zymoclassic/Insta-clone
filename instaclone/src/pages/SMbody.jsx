import React from 'react';
import Stories from './Stories';
import Mediamodifier from './Mediamodifier'
import '../assets/styles/smbody.css'
import Posts from './Posts';

const SMbody = () => {
  return (
    <div className='smbody_container'>
      <div>
        <Stories />
        <Posts />
      </div>   
      <Mediamodifier />
    </div>
  )
}

export default SMbody;
