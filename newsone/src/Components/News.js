import { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';



class News extends Component{

    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "health"
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            pageNumber: 1,
            loading: false
        }
    }




    componentDidMount() {
        let p = fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=870f80a2ef3e4658be13d9e1105466c4&pageSize=${this.props.pageSize}&page=${this.state.pageNumber}`)

        p.then(response => response.json())
            .then(data => this.setState({
                articles: data.articles,
                totalResults: data.totalResults
            }))
    }






    nextButton = () => {



        console.log("Next");

        if (this.state.pageNumber + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)) {
            alert("Thats All We Have For Today!!");
        }
        else {

            let p = fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=870f80a2ef3e4658be13d9e1105466c4&pageSize=${this.props.pageSize}&page=${this.state.pageNumber + 1}`);

            this.setState({
                loading: true,
            })

            p.then(response => response.json())
                .then(data => this.setState({
                    articles: data.articles,
                    pageNumber: this.state.pageNumber + 1,
                    loading: false
                }))
        }

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }



    prevButton = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;


        let p = fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=870f80a2ef3e4658be13d9e1105466c4&pageSize=${this.props.pageSize}&page=${this.state.pageNumber - 1}`);

        this.setState({
            loading: true,
        })

        p.then(response => response.json())
            .then(data => this.setState({
                articles: data.articles,
                pageNumber: this.state.pageNumber - 1,
                loading: false
            }))
        console.log("Previous");

    }







    firstPage = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;


        let p = fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=870f80a2ef3e4658be13d9e1105466c4&pageSize=${this.props.pageSize}&page=1`);

        this.setState({
            loading: true,
        })

        p.then(response => response.json())
            .then(data => this.setState({
                articles: data.articles,
                pageNumber: 1, 
                loading: false,
            }))
        console.log("First Page");

        document.getElementById("first").style.borderTop = "2px solid #5C6BC0";

    }



    secondPage = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;


        let p = fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=870f80a2ef3e4658be13d9e1105466c4&pageSize=9&page=2`);

        p.then(response => response.json())
            .then(data => this.setState({
                articles: data.articles,
                pageNumber: 2
            }))
        console.log("Second Page");

        document.getElementById("second").style.borderTop = "2px solid #5C6BC0";
        document.getElementById("first").style.borderTop = "none";


    }










    render() {
        return <>


            <div className="flex container mx-auto rounded-full py-6 items-center bg-gradient-to-r from-red-300 via-red-400 to-red-500 text-white font-bold text-5xl justify-center mb-12">
                <h2>NEWS-SHARK TOP HEADLINES</h2>
            </div>

            {this.state.loading && <Spinner/>}

            {!this.state.loading && <div className="container mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 w-1/2 text-white text-2xl font-mono font-bold  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 hover:cursor-pointer mb-12">
                <h3 className="text-center">Page {this.state.pageNumber}</h3>
            </div>}

            <div className="grid grid-cols-3 gap-6 container mx-auto">
                {!this.state.loading && this.state.articles.map((element) => {
                    return <div className="col-span-1" key={element.url}>
                        <NewsItem
                            imageLink={element.urlToImage}
                            title={element.title ? element.title.slice(0, 40) : ""}
                            desc={element.description ? element.description.slice(0, 80) : ""} buttonLink={element.url} />
                    </div>
                })}
            </div>

            <div className="flex flex-row container mx-auto justify-between my-12 p-12 items-center bg-yellow-300">

                <button disabled={this.state.pageNumber <= 1} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-16 py-2.5 text-center mr-2 mb-2" onClick={this.prevButton}>&laquo;Previous</button>


                    <div className="lg:w-3/5 w-full  flex items-center justify-between border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center pt-3 text-gray-600 dark:text-gray-200  hover:text-indigo-700 cursor-pointer">
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.1665 4L4.49984 7.33333" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M1.1665 4.00002L4.49984 0.666687" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <p className="text-sm ml-3 font-medium leading-none ">Previous</p>
                        </div>
                        <div className="sm:flex hidden">
                            <p id="first" className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-indigo-700 hover:border-indigo-400 pt-3 mr-4 px-2" onClick={this.firstPage}>1</p>
                            <p id="second" className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2" onClick={this.secondPage}>2</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">3</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">4</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">5</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">6</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">7</p>
                            <p className="text-sm font-medium leading-none cursor-pointer text-gray-600 dark:text-gray-200  hover:text-indigo-700 dark:hover:text-indigo-400 border-t border-transparent hover:border-indigo-400 pt-3 mr-4 px-2">8</p>
                        </div>
                        <div className="flex items-center pt-3 text-gray-600 dark:text-gray-200  hover:text-indigo-700 cursor-pointer">
                            <p className="text-sm font-medium leading-none mr-3">Next</p>
                            <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.1665 4H12.8332" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 7.33333L12.8333 4" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9.5 0.666687L12.8333 4.00002" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>

                        </div>
                    </div>



                <button disabled={this.state.pageNumber + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-16 py-2.5 text-center mr-2 mb-2" onClick={this.nextButton}>Next&raquo;</button>
            </div>




        </>
    }
}

export default News;