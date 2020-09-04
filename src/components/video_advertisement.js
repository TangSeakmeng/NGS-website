import React from 'react';
import video from '../images/CIA_FIRST_International_School.mp4';
import image from '../images/Education-Landscape-Services_0.jpg'

const VideoAdvertisement = () => {
    return (
        <div className="video-advertisement">
            <div className="video-advertisement_text">
                <div>
                    <h1>CIA FIRST International School</h1>
                    <p>Cambodia's Leading International School in Cambodia. Start Your Education With Us Today.</p>
                </div>
            </div>
            {/* <video id="background-video" loop autoPlay muted>
                <source src={'/dist/' + video} type="video/mp4" />
                <source src={'/dist/' + video} type="video/ogg" />
            </video> */}
            <img src={ '/dist/' + image }></img>
        </div>
    )
};

export default VideoAdvertisement;