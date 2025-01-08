import React from 'react';
import Stories from './Stories';
import Mm from './Mm';
import '../assets/styles/smbody.css'
import Posts from './Posts';

const SMbody = () => {
  return (
    <div className='smbody_container'>
      <div>
        <Stories />
        <Posts />
      </div>   
      <Mm />
    </div>
  )
}

export default SMbody;
