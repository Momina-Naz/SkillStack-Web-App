import React from "react";
import { Link } from "react-router-dom";
export default function Navbar(){
    return(
        <div className="flex flex-row items-center gap-35 font-medium text-lg w-ful text-gray-50	bg-blue-500">
            <Link to="/">
            <div className="flex flex-row  items-center">
                <img  className="h-13 " src="/fav icon2.png" alt="logo" />
                <h1>SkillStack</h1>
            </div>
            </Link>
            <ul className="flex flex-row gap-5 p-1">
                <Link to="/skills">Skills</Link>
                <Link to="/addskill">Add Skill</Link>
                <Link to="/about">About</Link>
            </ul>
        </div>
    )
}