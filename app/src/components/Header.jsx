import React from "react";
import logo from '../img/logo.png'
import { Link } from "react-scroll";

const Header = () => {

    return (
        <nav className=" flex justify-around mt-8  subpixel-antialiased">
            <div>
                <p id="/" className="cursor-pointer">
                    <Link to="/" spy={true} smooth={true} offset={-10} duration={500} onClick={(e) => { e.preventDefault() }} href="/"><img src={logo} alt="logo" title="logo" className="w-10 h-10" /></Link>
                </p>
            </div>
            <div>
                <ul className="flex space-x-2">
                    <li className="cursor-pointer ">
                        <Link to="/" spy={true} smooth={true} offset={-10} duration={500} onClick={(e) => { e.preventDefault() }} href="/" className="hover:border-b-2 hover:border-black transition duration-700 ease-in-out">Home</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="skills" spy={true} smooth={true} offset={-70} duration={500} className="hover:border-b-2 hover:border-black transition duration-700 ease-in-out">Skills</Link>
                    </li>
                    <li className="cursor-pointer">
                        <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="hover:border-b-2 hover:border-black transition duration-700 ease-in-out" >Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}


export default Header