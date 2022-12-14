import { Link } from "react-router-dom";
import React from "react";
import Shark from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/shark.png";

const Header = () => {
    return <>


        <div className="sticky top-0 mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div id="outerContainer" className="container mx-auto flex flex-row items-center font-bold font-mono py-6 text-white">

                <div className="">
                    <a href="/" id="innerContainer" className="w-full flex flex-row gap-1 items-center bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-5 py-1 rounded-full  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 hover:cursor-pointer mr-12">
                        <img src={Shark} className="w-10 h-12 animate-bounce"></img>
                        <h1 className="text-lg">NewsShark</h1>
                    </a>
                </div>

                <div className="flex flex-row justify-between gap-5 max-w-1/2 items-center text-lg ml-10">

                    <Link to="/" className="hover:text-transparent bg-clip-text bg-blue-300 hover:underline decoration-yellow-300 decoration-[0.20rem]">Top</Link>

                    <Link to="/sports" className="hover:text-transparent bg-clip-text bg-blue-300 hover:underline decoration-yellow-300 decoration-[0.20rem]">Sports</Link>

                    <Link to="/business" className="hover:text-transparent bg-clip-text bg-blue-300 hover:underline decoration-yellow-300 decoration-[0.20rem]">Business</Link>

                    <Link to="/health" className="hover:text-transparent bg-clip-text bg-blue-300 hover:underline decoration-yellow-300 decoration-[0.20rem]">Health</Link>

                    <Link to="/entertainment" className="hover:text-transparent bg-clip-text bg-blue-300 hover:underline decoration-yellow-300 decoration-[0.20rem]">Entertainment</Link>

                    <Link to="/science" className="hover:text-transparent bg-clip-text bg-blue-300 hover:underline decoration-yellow-300 decoration-[0.20rem]">Science</Link>

                    <Link to="/technology" className="hover:text-transparent bg-clip-text bg-blue-300 hover:underline decoration-yellow-300 decoration-[0.20rem]">Technology</Link>

                </div>

                <div className="flex flex-row gap-4 w-1/3 ml-12 justify-end">
                    <div>
                        <a href="#" className="flex justify-start bg-gradient-to-r from-red-300 via-red-400 to-red-500 px-fit px-12 py-2 rounded-full   hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80">Subscribe</a>
                    </div>

                    <div>
                        <a href="#" className="flex justify-end bg-gradient-to-l from-red-300 via-red-400 to-red-500 px-3 py-2 rounded-full   hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80">Sign In</a>
                    </div>
                </div>
            </div>


        </div>

    </>
}
export default Header;
