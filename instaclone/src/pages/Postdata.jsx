import React from 'react';
import '../assets/styles/posts.css';

const Postdata = ({id, image, user, caption}) => {
  return (
    <section>
      
      <div className="post">
        <div className='postContainer'>
      <div className='post_header'>
        <div className='post_info'>
            <img className="postHeader_image" src={image}/>
            <h6 className='postHeader_username'>{user}</h6>
        </div>       
        <i className='bx bx-dots-horizontal-rounded'></i>
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
      </div>
      <div className='post_paragraph'>
        <p>Liked by <strong>you</strong> and <strong>905,235 others</strong></p>
        <p>{caption}</p>
        <p className='fadedText' >View all 103 comments</p>
        <p className='fadedText' >HOURS AGO</p>
      </div>
      </div>
      
    </section>
  )
}

export default Postdata
