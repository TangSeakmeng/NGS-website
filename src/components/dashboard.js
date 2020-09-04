import React from 'react';

import VideoAdvertisement from './video_advertisement';
import BackToSchool from './backToSchool';
import OnlineLearning from './OnlineLearnings';
import WhyCIAFirst from './WhyCIAFirst';
import Curriculum from './Curriculum';
import SlideShow from './ImageSlideShow'
import OurCampus from './OurCampus';
import MyMapComponent from './google_map';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <VideoAdvertisement />
            <BackToSchool />
            <OnlineLearning />
            <WhyCIAFirst />
            <Curriculum />
            <SlideShow />
            <OurCampus />
            <MyMapComponent />
        </div>
    )
};

export default Dashboard;