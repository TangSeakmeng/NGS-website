import React from 'react';

import image from '../images/cia-first-banner4_1_orig.jpg'

const OurCampus = () => {
    return (
        <div className="box_OurCampus">
            <div className="box_OurCampus__detail">
                <div className="box_OurCampus__detail__leftside">
                    <h1>Our Campus</h1>
                    <p>
                        CIA FIRST International School's new 32,000 sqm. campus includes two football pitches, volleyball and basketball courts, two swimming pools, 
                        playground areas, two clinics, four canteens and two libraries. ​As such, our safe, beautiful campus enables each student to build 
                        critical-thinking skills and experience hands-on learning through academics, arts, athletics, technology and extracurricular activities.
                        Academic facilities include separate buildings for kindergarten, elementary school, middle and high school.
                    </p>
                </div>
                <div className="box_OurCampus__detail__rightside">
                    <img src={'/dist/' + image }></img>
                </div>
            </div>
        </div>
    )
};

export default OurCampus;