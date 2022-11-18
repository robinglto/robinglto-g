import React from "react";
import logo from '../img/logo.png'
const Header = () => {

    return (
        <nav className="flex justify-around mt-8 subpixel-antialiased">
            <div>
                <p id="/" className="cursor-pointer"><a href="/"><img src={logo} alt="logo" title="logo" className="w-10 h-10" /></a></p>
            </div>
            <div>
                <ul className="flex space-x-2">
                    <li className="cursor-pointer ">
                        <a href="/" className="hover:border-b-2 hover:border-black transition duration-700 ease-in-out">Home</a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="#skills" className="hover:border-b-2 hover:border-black transition duration-700 ease-in-out">Skills</a>
                    </li>
                    <li className="cursor-pointer">
                        <a href="#contact" className="hover:border-b-2 hover:border-black transition duration-700 ease-in-out" >Contact</a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}


export default Header