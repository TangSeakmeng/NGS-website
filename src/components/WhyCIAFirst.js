import React from 'react';

import image1 from '../images/wascv.jpg';
import image2 from '../images/220px-moeys-cambodia-svg.png';

const WhyCIAFirst = () => {
    return (
        <div className="box_WhyCIAFirst">
            <div className="box_WhyCIAFirst__container">
                <h1>WHY CIA FIRST?</h1>
                <p>
                    CIA FIRST International School  is one of only four schools in Cambodia that holds the international WASC Accreditation from K3-12 and 
                    CIA FIRST's graduating diploma is recognised by the Ministry of Education, Youth and Sport as equivalent to the national high school diploma. 
                    CIA FIRST’s renowned and demanding curriculum ensures your child will thrive at the next level, whether that is in Cambodia or overseas 
                    higher education.
                </p>
                <p>Our students are dynamic, motivated and diverse global citizens.</p>
                <button>Will you join us?</button>
                <div className="box_WhyCIAFirst__accrediation">
                    <img src={'/dist/' + image1} alt="CIA First International School"></img>
                    <img src={'/dist/' + image2} alt="CIA First International School"></img>
                </div>
            </div>
        </div>
    )
};

export default WhyCIAFirst;