import React from 'react';

import image1 from '../images/highschool_orig.jpg';
import image2 from '../images/middle-school_orig.jpg';
import image3 from '../images/elementary_orig.jpg';
import image4 from '../images/kindergarten-pic_orig.jpg';

const Curriculum = () => {
    return (
        <div className="box_Curriculum">
            <div className="box_Curriculum__container">
                <div className="box_Curriculum__degree">
                    <div className="box_Curriculum__image">
                        <img src={'/dist/' + image1} alt="CIA First International School" />
                        <button>Read More</button>
                    </div>
                    <div className="box_Curriculum__image">
                        <img src={'/dist/' + image2} alt="CIA First International School" />
                        <button>Read More</button>
                    </div>
                    <div className="box_Curriculum__image">
                        <img src={'/dist/' + image3} alt="CIA First International School" />
                        <button>Read More</button>
                    </div>
                    <div className="box_Curriculum__image">
                        <img src={'/dist/' + image4} alt="CIA First International School" />
                        <button>Read More</button>
                    </div>
                </div>
                <div className="box_Curriculum__text">
                    <h1>Our Curriculum</h1>
                    <p>
                        CIA FIRST International School ’s curriculum is unique and innovative. Piece by piece, the academic team has created a curricular 
                        program that focuses on global competencies and 21st-century skills. By using the Understanding by Design Framework (UbD), and 
                        integrating the Habits of Mind (HoMs), CIA FIRST student develops long-term and transferable understandings, which they can apply 
                        to real situations and solve real-world problems (Schoolwide Learner Outcomes).
                    </p>
                    <button>Learn More</button>
                </div>
            </div>
        </div>
    )
};

export default Curriculum;