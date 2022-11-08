import { Component } from "react";

export default class NewsItem extends Component {


    render() {
        return <div>
            <div className="rounded-lg shadow-lg bg-white max-w-sm">
                <a href="#!">
                    <a href={this.props.newsUrl} target = "_blank"><img className="rounded-t-lg" src={this.props.imageUrl} alt="" /></a>
                </a>
                <div className="p-6">
                    <h5 className="text-gray-900 text-xl font-medium mb-2">{this.props.title}...</h5>
                    <p className="text-gray-700 text-base mb-4">
                        {this.props.desc}...
                    </p>
                    <a href = {this.props.newsUrl} target = "_blank"><button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Read More</button></a>
                </div>
            </div>

        </div>
    }
}