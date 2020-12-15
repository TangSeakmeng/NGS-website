import React from 'react';
// import video from '../images/CIA_FIRST_International_School.mp4';
import image from '../images/Education-Landscape-Services_0.jpg'

const VideoAdvertisement = () => {
    return (
        <div className="video-advertisement">
            <div className="video-advertisement_text">
                <div>
                    <h1>វិទ្យាល័យព្រះស៊ីសុវត្តិ សាលារៀនជំនាន់ថ្មី</h1>
                    <p>PREAH SISOWATH HIGH SCHOOL (NEW GENERATION SCHOOL)</p>
                    <button><p>Book a Tour</p></button>
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