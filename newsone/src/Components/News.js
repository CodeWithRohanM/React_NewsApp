import { Component } from "react";
import NewsItem from "./NewsItem";

class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            pageNumber: 1,
        }
    }




    componentDidMount() {
        let p = fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=25f3e67e348a4a9689d5f53af7425bd2&pageSize=9&page=${this.state.pageNumber}`)

        p.then(response => response.json())
            .then(data => this.setState({
                articles: data.articles,
                totalResults: data.totalResults
            }))
    }






    nextButton = () => {



        console.log("Next");

        if (this.state.pageNumber + 1 > Math.ceil(this.state.totalResults / 9)) {
            alert("Thats All We Have For Today!!");
        }
        else {

            let p = fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=25f3e67e348a4a9689d5f53af7425bd2&pageSize=9&page=${this.state.pageNumber + 1}`);

            p.then(response => response.json())
                .then(data => this.setState({
                    articles: data.articles,
                    pageNumber: this.state.pageNumber + 1,
                }))
        }

        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }



    prevButton = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;


        let p = fetch(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=25f3e67e348a4a9689d5f53af7425bd2&pageSize=9&page=${this.state.pageNumber - 1}`)

        p.then(response => response.json())
            .then(data => this.setState({
                articles: data.articles,
                pageNumber: this.state.pageNumber - 1
            }))
        console.log("Previous");

    }










    render() {
        return <>

            <h2>NewsShark Top Headlines</h2>

            <div className="grid grid-cols-3 gap-6 container mx-auto bg-blue-200">
                {this.state.articles.map((element) => {
                    return <div className="col-span-1" key={element.url}>
                        <NewsItem
                            imageLink={element.urlToImage}
                            title={element.title ? element.title.slice(0, 40) : ""}
                            desc={element.description ? element.description.slice(0, 80) : ""} buttonLink={element.url} />
                    </div>
                })}


            </div>

            <div className="flex flex-row container mx-auto justify-between p-12 items-center bg-yellow-300">
                <button disabled={this.state.pageNumber <= 1} type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-16 py-2.5 text-center mr-2 mb-2" onClick={this.prevButton}>&laquo;Previous</button>

                <p className="text-2xl font-mono bg-red-500 px-6 rounded-full text-center py-2 text-white bg-gradient-to-r from-red-300 via-red-500 to-red-600 font-bold">Page {this.state.pageNumber}</p>

                <button type="button" className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-xl px-16 py-2.5 text-center mr-2 mb-2" onClick={this.nextButton}>Next&raquo;</button>
            </div>




        </>
    }
}

export default News;