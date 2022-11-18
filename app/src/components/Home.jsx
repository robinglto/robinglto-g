import React from "react";
import profile from "../img/profile.jpeg"
import message from "../img/message.png"
const Home = () => {
    return (
        <section>
            <div className="lg:hidden md:hidden block flex justify-center mt-20 mb-8 " >
                <img className="rounded-full shadow-black shadow-lg p-4 bg-black w-2/4" src={profile} alt="profile" title="profile" />
            </div>

            <div className="subpixel-antialiased flex justify-center  md:mt-48 mt-8  mb-44 md:mb-64 mx-6 md:mx-20 lg:mx-0">

                <div className="lg:w-2/4 lg:ml-64">
                    <h2 className="text-2xl mt-8 md:text-start text-center">Saul Perez</h2>
                    <p className="md:text-start text-center">   Software Developer</p>
                    <p className="text-gray-500 md:text-start text-center">I am a front-end engineer based in the Dominican Republic. I am focused on  building accessible and human-centered products.</p>

                    <p className="flex mt-4 md:text-start md:justify-start justify-center text-center">
                        <button className="flex  text-white bg-black rounded-xl py-2 px-8 ">
                            <a href="https://drive.google.com/file/d/1AKtPY1jB3vUqD3zCsxakP4z25f9bSPeI/view?usp=share_link" className="flex  space-x-3">
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