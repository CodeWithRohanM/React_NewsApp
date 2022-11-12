import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar'
import ProgressBar from 'react-progressbar-on-scroll'
import Clouds from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/weatherIcons/clouds.png";
import Rain from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/weatherIcons/rain.png";
import Sun from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/weatherIcons/sun.png";
import Smoke from "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/weatherIcons/smoke.png";


const News = (props) => {

    const [articles, setArticles] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalResults, setTotalResults] = useState(0);
    const [progress, setProgress] = useState(0);
    const [weatherIcon, setWeatherIcon] = useState("");

    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    let amPM = ["AM", "PM"];

    let imagesArray = ["https://images.livemint.com/img/2022/11/11/1600x900/sony_ps5_1668143000346_1668143000526_1668143000526.JPG",
        "https://images.livemint.com/img/2022/11/11/1600x900/iphone_1613735086854_1613735095175_1668149795151_1668149795151.jpg",
        "https://images.news18.com/ibnlive/uploads/2022/10/meta-hiring-16646943353x2.jpg", "https://images.livemint.com/img/2022/11/06/1600x900/Elon_Musk_1667742729898_1667742730057_1667742730057.JPG"];


    let date = new Date();
    let getTodaysDate = date.getDate()+" "+months[date.getMonth()]+", "+date.getFullYear();



    const getWeatherIcon = (data)=>{
        if(data.weather[0].main === "Clouds")
        {
            setWeatherIcon(Clouds);
        }
        else if(data.weather[0].main === "Smoke")
        {
            setWeatherIcon(Smoke);
        }
        else if(data.weather[0].main === "Rain")
        {
            setWeatherIcon(Rain);
        }else if(data.weather[0].main === "Clear")
        {
            setWeatherIcon(Sun);
        }

    }




    const updateData = () => {
        document.title = props.category+"-NewsShark";


        document.body.style.backgroundImage = `url(${props.backgroundImage})`


        setProgress(10);

        let q = fetch("https://api.openweathermap.org/data/2.5/weather?q=Mumbai&appid=7e2fdaaff06ddb3f0b41c7f1bc48d066&units=metric");

        q.then(response => response.json())
        .then(data => getWeatherIcon(data));




        let p = fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=86bce6f6c048499cab427509810ec245&page=${pageNumber}&pageSize=${props.pageSize}`);

        // let p = fetch(`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=85d88681698f4adea8c080ffeb8893fd&pageSize=${props.pageSize}&page=${pageUpdate}`);

        p.then(response => response.json())
            .then(data => (setArticles(data.articles), setLoading(false),
                setTotalResults(data.totalResults))
            )

        setProgress(100);
    }



    useEffect(() => {
        updateData();
    },[]);






    // nextButton = () => {


    //     setState({
    //         pageNumber: state.pageNumber + 1,
    //     });

    //     console.log("PageNumber = " + state.pageNumber);

    //     updateData(state.pageNumber + 1);
    // }

    // prevButton = () => {

    //     setState({
    //         pageNumber: state.pageNumber - 1,
    //     })

    //     updateData(state.pageNumber - 1);

    // }



    const fetchMoreData = () => {

        setPageNumber(pageNumber + 1);



        let p = fetch(`https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=86bce6f6c048499cab427509810ec245&page=${pageNumber + 1}&pageSize=${props.pageSize}`);


        p.then(response => response.json())
            .then(data => (setArticles(articles.concat(data.articles)),
                setTotalResults(data.totalResults))
            );

    }



    return <>

        <ProgressBar
            color="#ffff00"
            height={8}
            direction="right"
            position="top"
            gradient={true}
            gradientColor="#eee"
        />


<LoadingBar
            color='#FFFF00'
            progress={progress}
            shadow={true}
            height={7}
            transitionTime={2000}
        />

        <div className="flex container flex-row mx-auto rounded-lg py-4 items-center bg-gradient-to-r from-red-300 via-red-500 to-red-300 text-white font-bold text-5xl justify-center mb-12">
            <div className="w-14 h-12 flex items-center mr-6">
                <img src={props.icon} alt="Photo"></img>
            </div>
            <h2 className="tracking-wide">{props.headline}</h2>
        </div>



        {loading && <Spinner />}

        {!loading && <div className="flex flex-row justify-between items-center container mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 w-96 text-white text-2xl font-mono font-bold  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 hover:cursor-pointer mb-12">
            <h3 id="updatedPageNumber" className="text-center">Today: {getTodaysDate}</h3>
            <img src={weatherIcon} className="h-12 w-14 flex justify-end"></img>
        </div>}

        <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner />}
        >


            <div className="grid grid-cols-3 gap-6 container mx-auto">
                {!loading && articles.map((element) => {
                    return <div className="col-span-1" key={element.link}>
                        <NewsItem
                            urlToImage={element.urlToImage ? element.urlToImage : imagesArray[Math.floor(Math.random() * imagesArray.length)]}
                            title={element.title ? element.title.slice(0, 40) : ""}
                            desc={element.description ? element.description.slice(0, 80) : ""}
                            url={element.url}
                            getMonth={months[new Date(element.publishedAt).getMonth()]}
                            getDate={new Date(element.publishedAt).getDate()}
                            getYear={new Date(element.publishedAt).getFullYear()}
                            author={element.author ? element.author : "Unknown"}
                            getHours={new Date(element.publishedAt).getHours()}
                            getMinutes={new Date(element.publishedAt).getSeconds()}
                            amPm={new Date(element.publishedAt).getHours() >= 12 ? amPM[1] : amPM[0]} />
                    </div>
                })}
            </div>
        </InfiniteScroll>


        <div className="flex flex-row container mx-auto justify-between my-12 p-12 items-center">

            <button disabled={pageNumber <= 1} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-16 py-2.5 text-center mr-2 mb-2">&laquo;Previous</button>


            <div className="lg:w-3/5 w-full flex items-center justify-between border-t border-black dark:border-gray-700">

                <div className="sm:flex hidden mx-auto">
                    <p id="first" className="text-sm font-medium leading-none cursor-pointer text-white dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-white hover:border-indigo-400 pt-3 mr-4 px-2">1</p>
                    <p id="second" className="text-sm font-medium leading-none cursor-pointer text-white dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2" >2</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-white dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-white dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">4</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-white dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-white dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-white dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
                    <p className="text-sm font-medium leading-none cursor-pointer text-white dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p>
                </div>

            </div>



            <button disabled={pageNumber + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-16 py-2.5 text-center mr-2 mb-2">Next&raquo;</button>
        </div>




    </>
}

News.defaultProps = {
    country: "in",
    pageSize: 6,
    category: "health",
    headline: "NEWS-SHARK TOP HEADLINES",
    icon: "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/business.png"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News;