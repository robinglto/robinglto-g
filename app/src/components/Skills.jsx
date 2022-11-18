import React from "react";
import ok from '../img/ok.png'



const Skills = () => {
    return (
        <section className="flex justify-center text-center subpixel-antialiased mt-32 mb-20">
            <div>
                <h3 className="text-2xl">Skills</h3>
                <p className="text-gray-500">My Technical Level</p>

                <div className="mt-8 border-2 rounded-xl shadow-gray-400 shadow-lg flex space-x-6" >
                    <ul className="space-y-5 p-6">
                        <li>
                            <div className="flex space-x-2 ">
                                <img className="w-6 h-6" src={ok} alt="" />
                                <p>Html</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex space-x-2">
                                <img className="w-6 h-6" src={ok} alt="" />
                                <p>Css</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex space-x-2">
                                <img className="w-6 h-6" src={ok} alt="" />
                                <p>JavaScript</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex space-x-2">
                                <img className="w-6 h-6" src={ok} alt="" />
                                <p>TypeScript</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex space-x-2">
                                <img className="w-6 h-6" src={ok} alt="" />
                                <p>Reactjs</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex space-x-2">
                                <img className="w-6 h-6" src={ok} alt="" />
                                <p>Nextjs</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex space-x-2">
                                <img className="w-6 h-6" src={ok} alt="" />
                                <p>TailwindCss</p>
                            </div>
                        </li>
                        <li>
                            <div className="flex space-x-2">
                                <img className="w-6 h-6" src={ok} alt="" />
                                <p>Git</p>
                            </div>
                        </li>
                    </ul>

                    <ul className="text-start space-y-5 p-6">
                        <li>Intermediate</li>
                        <li>Intermediate</li>
                        <li>Intermediate</li>
                        <li>Basic</li>
                        <li>Intermediate</li>
                        <li>Basic</li>
                        <li>Intermediate</li>
                        <li>Basic</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Skills 