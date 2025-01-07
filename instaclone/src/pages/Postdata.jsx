import React from 'react';
import '../assets/styles/posts.css';

const Postdata = ({id, image, user}) => {
  return (
    <section className='post'>
      <div className='post_header'>
        <div className='post_info'>
            <img className="postHeader_image" src={image}/>
            <h6 className='postHeader_username'>{user}</h6>
        </div>       
        <i class='bx bx-dots-horizontal-rounded'></i>
      </div>
      <img className="post_image" src={image}/>
      <div className="postIcon_container">
        <div className='groupedIcon'>
            <i className='uil uil-heart postIcon' ></i>
            <i className='uil uil-comment postIcon' ></i>
            <i className='uil uil-message postIcon'></i>
        </div>

      <i className='uil uil-bookmark-full postIcon'></i>
      </div>
    </section>
  )
}

export default Postdata
