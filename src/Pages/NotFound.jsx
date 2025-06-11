import React from "react";
import { Link } from "react-router-dom";
export default function NotFound(){
    return (
      <div className="flex flex-col h-full items-center justify-center bg-gray-100 px-4">
        <h1 className="text-6xl font-bold text-bg-blue-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
        <p className="text-gray-600 mb-6 text-center max-w-md">
           Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
      <Link to="/"
     className="px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition">
     
       Go to Home
       </Link>
</div>
    )
}