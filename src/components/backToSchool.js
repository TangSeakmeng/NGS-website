import React from 'react';

import logo from '../images/Bagpack.png';

const BackToSchool = () => {
    return (
        <div className="box_BackToSchool">
            <div className="container">
                <img src={'/dist/' + logo} alt="CIA First International School" />
                <div className="backToSchool_Text">
                    <h1>Welcome to CIA First International School</h1>
                    <p>
                        On September 1st CIA FIRST students will be Back to School! Read the latest update from the school with FAQs about 
                        the new protocols and hygiene measures in place for the whole community!
                    </p>
                    <div className="backToSchool_Text__buttons">
                        <button>Read More</button>
                        <button>Enrolment Now</button>
                        <button>Contact Us</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BackToSchool;