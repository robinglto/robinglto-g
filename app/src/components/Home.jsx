import React from "react";
import profile from "../img/profile.jpeg"
import message from "../img/message.png"
const Home = () => {
    return (
        <section>
            <div className="lg:hidden md:hidden block flex justify-center mt-16 mb-8 " >
                <img className="rounded-full shadow-black shadow-lg p-4 bg-black w-2/4" src={profile} alt="profile" title="profile" />
            </div>

            <div className="subpixel-antialiased flex justify-center  md:mt-48 mt-8 lg:-space-x-32 mb-44 md:mb-64 mx-20 lg:mx-0">

                <div className="lg:w-2/4 lg:ml-64">
                    <h2 className="text-2xl mt-8">Saul Perez</h2>
                    <p>-------------     Software Developer</p>
                    <p className="text-gray-500">I am a front-end engineer based in the Dominican Republic. I am focused on  building accessible and human-centered products.</p>

                    <p className="flex mt-4">
                        <button className="flex text-white bg-black rounded-xl py-2 px-8 ">
                            <a href="mailto:pfzsaul@gmail.com" className="flex  space-x-3">
                                <p>Resume</p>
                                <img src={message} className="w-7 h-7"></img>
                            </a>
                        </button>
                    </p>
                </div>

                <div className="lg:block hidden" >
                    <img className="rounded-full shadow-black shadow-lg p-4 bg-black w-2/4" src={profile} alt="profile" title="profile" />
                </div>
            </div>
        </section>
    )
}


export default Home