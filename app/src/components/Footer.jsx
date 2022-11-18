import React from "react";
import github from '../img/github.png'
import twitter from '../img/twitter.png'


const Footer = () => {
    return (
        <div className="flex justify-center mb-20">
            <div className="space-y-4">
                <p className="subpixel-antialiased	">Build and Design by Saul Perez</p>
                <div className="flex justify-center space-x-4">
                    <a href="https://github.com/robinglto"><img className="w-6 h-6" src={github} /></a>
                    <a href="https://twitter.com/robinglto"><img className="w-6 h-6" src={twitter} /></a>
                </div>
            </div>
        </div>
    )
}


export default Footer