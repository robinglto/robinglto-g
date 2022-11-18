import React from "react";
import message from '../img/message.png'
import up from '../img/up.png'
import { Link } from "react-scroll";

const Contact = () => {
    return (
        <section id="contact" className="flex justify-center  text-center mt-44 mb-32">
            <div className="space-y-4">
                <p className="subpixel-antialiased">What's Up?</p>
                <h3 className="subpixel-antialiased text-2xl">Get In Touch</h3>

                <p className="text-gray-500 text-center lg:px-80 md:px-44 p-12">
                    My inbox is always open for new opportunities. Whether you have a question or just want to say hi, I'll do my best to answer you!
                </p>
                <p className="text-center flex justify-center">
                    <button className="flex justify-center text-white bg-black rounded-xl py-2 px-8 ">
                        <a href="mailto:pfzsaul@gmail.com" className="flex justify-center space-x-3 shadow-lg shadow-black">
                            <p>Say Hello</p>
                            <img src={message} className="w-7 h-7"></img>
                        </a>
                    </button>
                </p>

            </div>
        </section>
    )
}


export default Contact