import React from "react";

const NewsItem =(props) => {
        return <>

            <div className="flex justify-center mt-12">

                <div className="rounded-lg shadow-lg bg-white max-w-sm hover:bg-gradient-to-br focus:ring-8 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg hover:cursor-pointer hover:shadow-2xl shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80">
                    <a href={props.url} target="_blank" data-mdb-ripple="true" data-mdb-ripple-color="light">
                        <img className="rounded-t-lg" src={props.urlToImage} alt="Not Found" />
                    </a>

                    <div className="flow-root px-6 pt-3 font-mono text-xs">
                        <p className="float-left text-black text-opacity-60">Published On: {props.getMonth} {props.getDate}, {props.getYear}</p>

                        <p className="float-right text-black text-opacity-60">{props.getHours}:{props.getMinutes} {props.amPm}</p>
                    </div>

                    <div className="p-6">
                        <h5 className="text-gray-900 text-xl font-medium mb-4">{props.title}...</h5>
                        <p className="text-gray-700 text-base mb-6">
                            {props.desc}...
                        </p>
                        <a href={props.buttonLink} target="_blank"><button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More..</button></a>
                    </div>

                    <div className="flex justify-end p-4 font-mono text-xs">
                        <p className="text-black text-opacity-60"><span className="text-black">By:</span> {props.author}</p>
                    </div>

                </div>
            </div>

        </>
}

export default NewsItem;