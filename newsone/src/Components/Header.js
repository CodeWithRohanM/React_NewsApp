import { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return <>


            <div className="sticky top-0 mb-12 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                <div id="outerContainer" className="container mx-auto flex flex-row items-center font-bold font-mono p-6 text-white">

                    <a href="/" id="innerContainer" className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 px-4 py-3 rounded-full  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 hover:cursor-pointer mr-12">
                        <h1>NewsShark</h1>
                    </a>

                    <div className="flex flex-row justify-between gap-5 max-w-1/2 items-center text-lg">

                        <Link to="/">Top</Link>

                        <Link to="/sports">Sports</Link>

                        <Link to="/business">Business</Link>

                        <Link to="/health">Health</Link>

                        <Link to="/entertainment">Entertainment</Link>

                        <Link to="/science">Science</Link>

                        <Link to="/technology">Technology</Link>

                    </div>

                    <div className="flex flex-row gap-4 w-1/3 ml-12">
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
}