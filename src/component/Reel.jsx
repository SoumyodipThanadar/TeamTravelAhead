import React, { useEffect } from 'react';
import './css/Reel.css';
import video1 from '../component/video1.mp4';
import video2 from '../component/video2.mp4';
import video3 from '../component/video3.mp4';
import video4 from '../component/video4.mp4';
import video5 from '../component/video5.mp4';
const Reel = () => 
  {
  useEffect(() => {
    const reels = document.querySelectorAll('.reel-item');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    }, { threshold: 0.5 }); 

    reels.forEach(reel => observer.observe(reel));
  }, []);

  return (

    <div className="reel-wrapper">
    <div className="title-containerwxx">
    <h1>
        FeelMoments
    </h1>
</div>


    
    <div className="reel-container">
    
      <div className="reel">
        <div className="reel-item">
          <video src={video1} controls></video>
        </div>
        <div className="reel-item">
          <video src={video2} controls></video>
        </div>
        <div className="reel-item">
          <video src={video3} controls></video>
        </div>
        <div className="reel-item">
          <video src={video4} controls></video>
        </div>
        <div className="reel-item">
          <video src={video5} controls></video>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Reel;
