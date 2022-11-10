import { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return <>


            <div className="mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div id="outerContainer" className="container mx-auto flex flex-row justify-between items-center font-bold font-mono p-6 text-white">

                    <a href="/" id="innerContainer" className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-4 py-3 rounded-full  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 hover:cursor-pointer">
                        <h1>NewsShark</h1>
                    </a>

                    <div className="flex flex-row justify-between gap-5 w-1/3">

                        <Link to="/" className="bg-red-400 px-6 py-2 rounded-t-md">General</Link>

                        <Link to="/sports" className="bg-red-400 px-6 py-2 rounded-t-md">Sports</Link>

                        <Link to="/business" className="bg-red-400 px-6 py-2 rounded-t-md">Business</Link>
                        
                        <Link to="/health" className="bg-red-400 px-6 py-2 rounded-t-md">Health</Link>

                    </div>

                    <div className="flex mr-2 w-1/3 justify-end">
                        <a href="#" className="bg-gradient-to-r from-red-300 via-red-400 to-red-500 px-12 py-2 rounded-full   hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80">Explore</a>
                    </div>
                </div>


            </div>

        </>
    }
}