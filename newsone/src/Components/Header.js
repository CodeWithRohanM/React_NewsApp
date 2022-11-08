import { Component } from "react";

export default class Header extends Component {
    render() {
        return <>

        <div className="mb-12">
            <div id="outerContainer" className="container mx-auto flex flex-row justify-between items-center text-3xl p-6 text-black">

                <div id="innerContainer" className = "">
                    <h1>NewsShark</h1>
                </div>

                <div className="flex justify-between gap-12 md-w-1/2">
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Latest</h1>
                </div>

                <div className="mr-2">
                    <a href="#" className="bg-red-500 px-12 py-1 rounded-full ">Explore</a>
                </div>
            </div>
        </div>

        </>
    }
}