import React from 'react';

import image1 from '../images/KES_online_learning.png';
import image2 from '../images/MSHS_online_learning.png';

const OnlineLearning = () => {
    return (
        <div className="box_OnlineLearnings">
            <h1>Find out more about Online Learning at ACS WASC Accredited CIA FIRST!</h1>
            <div className="box_OnlineLearnings__container">
                <div className="box_OnlineLearnings__onlineLearning">
                    <img src={'/dist/' + image1} alt="CIA First International School"></img>
                    <div className="box_OnlineLearnings__text">
                        <h1>KES Online Learning</h1>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                </div>
                <div className="box_OnlineLearnings__onlineLearning">
                    <div className="box_OnlineLearnings__text">
                        <h1>MSHS Online Learning</h1>
                        <p style={{paddingRight:"40px", paddingLeft:"0px"}}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever 
                            since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                    </div>
                    <img src={'/dist/' + image2} alt="CIA First International School"></img>
                </div>
            </div>
        </div>
    );
}

export default OnlineLearning;