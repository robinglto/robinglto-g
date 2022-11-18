import React from "react";



const Header = () => {
    return (
        <nav className="flex justify-around mt-8 subpixel-antialiased">
            <div>
                <p className="cursor-pointer">@robinglto</p>
            </div>
            <div>
                <ul className="flex space-x-2">
                    <li className="cursor-pointer">Home</li>
                    <li className="cursor-pointer">Skills</li>
                    <li className="cursor-pointer">Contact</li>
                </ul>
            </div>
        </nav>
    )
}


export default Header