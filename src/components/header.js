import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo-cia-first-png.png';
import search from '../images/magnifying-glass.png';

const Header = () => (
    <header>
        <div className="boxHeader">
            <h1><img src={'/dist/' + logo} alt="CIA First International School" /></h1>

            <div className="navbar">
                <div className="bar">
                    <ul>
                        <li>
                            <Link to="/" className="menuItem">Home</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">Our School</Link></li>
                                <li><Link to="/" className="menuItem">Why CIA First</Link></li>
                                <li><Link to="/" className="menuItem">Vision and Mission</Link></li>
                                <li><Link to="/" className="menuItem">Accrediations</Link></li>
                                <li><Link to="/" className="menuItem">Facilities</Link></li>
                                <li><Link to="/" className="menuItem">Academics</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/" className="menuItem">Enrolment</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">School Fees</Link></li>
                                <li><Link to="/" className="menuItem">Payment Methods</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/" className="menuItem">Online Learning</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">Overview</Link></li>
                                <li><Link to="/" className="menuItem">Class Schedules</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/" className="menuItem">Community</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">School Blog & Updates</Link></li>
                                <li><Link to="/" className="menuItem">Principals</Link></li>
                                <li><Link to="/" className="menuItem">PAPA</Link></li>
                                <li><Link to="/" className="menuItem">SchoolBase</Link></li>
                                <li><Link to="/" className="menuItem">CIA First English Center</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/" className="menuItem">Calendar</Link>
                        </li>
                        <li>
                            <Link to="/" className="menuItem">Gallery</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">2020 Graduation Photos</Link></li>
                                <li><Link to="/" className="menuItem">G12 Class Photos</Link></li>
                                <li><Link to="/" className="menuItem">School Year 19/20</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/" className="menuItem">Work With Us</Link></li>
                        <li><Link to="/" className="menuItem">Contact Us</Link></li>
                        <li>
                            <Link to="/" className="menuItem">Log In</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">CIA First Library Catalog</Link></li>
                                <li><Link to="/" className="menuItem">SchoolBase Login</Link></li>
                                <li><Link to="/" className="menuItem">CIA First English Center</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="header__form">
                <form>
                    <input type="text" placeholder="search" />
                    <button>
                        <img src={ '/dist/' + search }></img>
                    </button>
                </form>
            </div>
        </div>
        
    </header>
);

export default Header;