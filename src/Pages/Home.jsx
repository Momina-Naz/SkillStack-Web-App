import React from "react";
import { Link } from "react-router-dom";
export default function Home(){
    return (
        <div className="flex flex-col items-center justify-center gap-10 p-2">
       <h1 className="text-5xl font-semibold text-gray-800 text-center mx-auto mt-10 w-fit">
            Welcome to <br /> SkillStack!
              </h1>
            <p className="text-gray-750 text-lg font-medium">Track your skills and growth visually</p>
            <Link className =" bg-blue-500  hover:bg-blue-600 transition text-gray-50 text-xl font-medium p-4 px-6 rounded-md"to="/addskill">Get Started</Link>
        </div>
    )
}