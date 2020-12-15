import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/NGS.png';
import search from '../images/magnifying-glass.png';
import menu from '../images/menu.png';

const Header = () => (
    <header>
        <div className="boxHeader">
            <div className="hamburger__menu">
                <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
                <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                    <div className="spinner diagonal part-1"></div>
                    <div className="spinner horizontal"></div>
                    <div className="spinner diagonal part-2"></div>
                </label>
                <div id="sidebarMenu">
                    <ul className="sidebarMenuInner">
                        <li>
                            <Link to="#">ទំព័រដើម</Link><i class="fa fa-caret-down"></i>
                            <ul>
                                <li><Link to="/" className="menuItem">ព័ត៌មាន</Link></li>
                                <li><Link to="/" className="menuItem">ព្រឹត្តការណ៍សំខាន់ៗ</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">បណ្ណាល័យ</Link><i class="fa fa-caret-down"></i>
                            <ul>
                                <li><Link to="/" className="menuItem">សៀវភៅអេឡិចត្រូនិច</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="#">ក្លឹប</Link><i class="fa fa-caret-down"></i>
                            <ul>
                                <li>
                                    <Link to="/" className="menuItem">ក្លឹបវិទ្យាសាស្ត្</Link>
                                    <ul>
                                        <li>រូបវិទ្យា</li>
                                        <li>គីមីវិទ្យា</li>
                                        <li>ជីវវិទ្យា</li>
                                    </ul>
                                </li>
                                <li><Link to="/" className="menuItem">ក្លឹបព័ត៌មានវិទ្យា</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបព្រឹត្តិបត្រព័ត៌មាន</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបវីដេអូ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបសិល្បះ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបប្រវត្តិសាស្ត្រ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបអ្នកនិពន្ធ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបសៀវភៅដ៏អស្ចារ្យ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបតស៊ូមតិ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹប​ Great Books</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">វិចិត្រសាល</Link><i class="fa fa-caret-down"></i>
                            <ul>
                                <li><Link to="/" className="menuItem">វីដេអូ</Link></li>
                                <li><Link to="/" className="menuItem">បទយកការណ៍</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">កិច្ចសហប្រតិបត្តិការ</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">ក្នុងប្រទេស</Link></li>
                                <li><Link to="/" className="menuItem">ក្រៅប្រទេស</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/">លទ្ធផលការសិក្សា</Link><i class="fa fa-caret-down"></i>
                            <ul>
                                <li><Link to="/" className="menuItem">ប្រចាំខែ</Link></li>
                                <li><Link to="/" className="menuItem">តារាងកិត្តិយស</Link></li>
                                <li><Link to="/" className="menuItem">ប្រចាំឆមាស</Link></li>
                                <li><Link to="/" className="menuItem">ប្រចាំឆ្នាំ</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/" className="menuItem">កិត្តិយស</Link></li>
                        <li><Link to="/" className="menuItem">អំពីយើង</Link></li>
                        <li><Link to="/" className="menuItem">ទំនាក់ទំនង</Link></li>
                    </ul>
                </div>
            </div>

            <div className="imageHeaderContainer">
                <img src={'/dist/' + logo} alt="CIA First International School" />
            </div>

            <div className="navbar">
                <div className="bar">
                    <ul>
                        <li>
                            <Link to="/" className="menuItem">ទំព័រដើម</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">ព័ត៌មាន</Link></li>
                                <li><Link to="/" className="menuItem">ព្រឹត្តការណ៍សំខាន់ៗ</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/" className="menuItem">បណ្ណាល័យ</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">សៀវភៅអេឡិចត្រូនិច</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/" className="menuItem">ក្លឹប</Link>
                            <ul>
                                <li>
                                    <Link to="/" className="menuItem">ក្លឹបវិទ្យាសាស្ត្</Link>
                                    <ul>
                                        <li><Link to="/" className="menuItem">រូបវិទ្យា</Link></li>
                                        <li><Link to="/" className="menuItem">គីមីវិទ្យា</Link></li>
                                        <li><Link to="/" className="menuItem">ជីវវិទ្យា</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/" className="menuItem">ក្លឹបព័ត៌មានវិទ្យា</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបព្រឹត្តិបត្រព័ត៌មាន</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបវីដេអូ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបសិល្បះ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបប្រវត្តិសាស្ត្រ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបអ្នកនិពន្ធ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបសៀវភៅដ៏អស្ចារ្យ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹបតស៊ូមតិ</Link></li>
                                <li><Link to="/" className="menuItem">ក្លឹប​ Great Books</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/" className="menuItem">វិចិត្រសាល</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">វីដេអូ</Link></li>
                                <li><Link to="/" className="menuItem">បទយកការណ៍</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/" className="menuItem">កិច្ចសហប្រតិបត្តិការ</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">ក្នុងប្រទេស</Link></li>
                                <li><Link to="/" className="menuItem">ក្រៅប្រទេស</Link></li>
                            </ul>
                        </li>
                        <li>
                            <Link to="/" className="menuItem">លទ្ធផលការសិក្សា</Link>
                            <ul>
                                <li><Link to="/" className="menuItem">ប្រចាំខែ</Link></li>
                                <li><Link to="/" className="menuItem">តារាងកិត្តិយស</Link></li>
                                <li><Link to="/" className="menuItem">ប្រចាំឆមាស</Link></li>
                                <li><Link to="/" className="menuItem">ប្រចាំឆ្នាំ</Link></li>
                            </ul>
                        </li>
                        <li><Link to="/" className="menuItem">កិត្តិយស</Link></li>
                        <li><Link to="/" className="menuItem">អំពីយើង</Link></li>
                        <li><Link to="/" className="menuItem">ទំនាក់ទំនង</Link></li>
                    </ul>
                </div>
            </div>

            <div className="header__form">
                <div className="header__form__box">
                    <input type="text" placeholder="search" className="txtSearch" />
                    <button>
                        <img src={ '/dist/' + search }></img>
                    </button>
                </div>
            </div>
        </div>
        
    </header>
);

export default Header;