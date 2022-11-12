import { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";



class News extends Component {

    static defaultProps = {
        country: "in",
        pageSize: 6,
        category: "health",
        headline: "NEWS-SHARK TOP HEADLINES",
        icon: "/Users/rohanmote/Desktop/ReactNewsApp/newsone/src/Components/business.png"
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
            loading: true,
            totalResults: 0,
        }

    }


    updateData = () => {
        document.title = this.props.category;


        document.body.style.backgroundImage = `url(${this.props.backgroundImage})`


        let p = fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=870f80a2ef3e4658be13d9e1105466c4&page=${this.state.pageNumber}&pageSize=${this.props.pageSize}`);

        // let p = fetch(`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=85d88681698f4adea8c080ffeb8893fd&pageSize=${this.props.pageSize}&page=${pageUpdate}`);

        p.then(response => response.json())
            .then(data => this.setState({
                articles: data.articles,
                loading: false,
                totalResults: data.totalResults,
            }))
    }



    componentDidMount() {

        this.updateData();

    }


    // nextButton = () => {


    //     this.setState({
    //         pageNumber: this.state.pageNumber + 1,
    //     });

    //     console.log("PageNumber = " + this.state.pageNumber);

    //     this.updateData(this.state.pageNumber + 1);
    // }

    // prevButton = () => {

    //     this.setState({
    //         pageNumber: this.state.pageNumber - 1,
    //     })

    //     this.updateData(this.state.pageNumber - 1);

    // }



    fetchMoreData = () => {
        this.setState({
            pageNumber: this.state.pageNumber + 1,
        })


        let p = fetch(`https://newsapi.org/v2/top-headlines?category=${this.props.category}&country=${this.props.country}&apiKey=870f80a2ef3e4658be13d9e1105466c4&page=${this.state.pageNumber+1}&pageSize=${this.props.pageSize}`);


        p.then(response => response.json())
            .then(data => this.setState({
                articles: this.state.articles.concat(data.articles),
                totalResults: data.totalResults,
            }))

    }


    months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    amPM = ["AM", "PM"];

    imagesArray = ["https://images.livemint.com/img/2022/11/11/1600x900/sony_ps5_1668143000346_1668143000526_1668143000526.JPG",
        "https://images.livemint.com/img/2022/11/11/1600x900/iphone_1613735086854_1613735095175_1668149795151_1668149795151.jpg",
        "https://images.news18.com/ibnlive/uploads/2022/10/meta-hiring-16646943353x2.jpg", "https://images.livemint.com/img/2022/11/06/1600x900/Elon_Musk_1667742729898_1667742730057_1667742730057.JPG"];





    render() {
        return <>

            <div className="flex container flex-row mx-auto rounded-lg py-4 items-center bg-gradient-to-r from-red-300 via-red-400 to-red-500} text-white font-bold text-5xl justify-center mb-12">
                <div className="w-14 h-12 flex items-center mr-6">
                    <img src={this.props.icon} alt="Photo"></img>
                </div>
                <h2 className="tracking-wide">{this.props.headline}</h2>
            </div>

            {this.state.loading && <Spinner />}

            {!this.state.loading && <div className="container mx-auto bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-4 py-3 w-1/4 text-white text-2xl font-mono font-bold  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 hover:cursor-pointer mb-12">
                <h3 id="updatedPageNumber" className="text-center">Page {this.state.pageNumber}</h3>
            </div>}

            <InfiniteScroll
                dataLength={this.state.articles.length}
                next={this.fetchMoreData}
                hasMore={this.state.articles.length !== this.state.totalResults}
                loader={<Spinner />}
            >


                <div className="grid grid-cols-3 gap-6 container mx-auto">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-span-1" key={element.link}>
                            <NewsItem
                                urlToImage={element.urlToImage ? element.urlToImage : this.imagesArray[Math.floor(Math.random() * this.imagesArray.length)]}
                                title={element.title ? element.title.slice(0, 40) : ""}
                                desc={element.description ? element.description.slice(0, 80) : ""}
                                url={element.url}
                                getMonth={this.months[new Date(element.publishedAt).getMonth()]}
                                getDate={new Date(element.publishedAt).getDate()}
                                getYear={new Date(element.publishedAt).getFullYear()}
                                author={element.author ? element.author : "Unknown"}
                                getHours={new Date(element.publishedAt).getHours()}
                                getMinutes={new Date(element.publishedAt).getSeconds()}
                                amPm={new Date(element.publishedAt).getHours() >= 12 ? this.amPM[1] : this.amPM[0]} />
                        </div>
                    })}
                </div>
            </InfiniteScroll>


            <div className="flex flex-row container mx-auto justify-between my-12 p-12 items-center">

                <button disabled={this.state.pageNumber <= 1} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-16 py-2.5 text-center mr-2 mb-2">&laquo;Previous</button>


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



                <button disabled={this.state.pageNumber + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-16 py-2.5 text-center mr-2 mb-2">Next&raquo;</button>
            </div>




        </>
    }
}

export default News;