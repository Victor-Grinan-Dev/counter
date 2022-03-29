import React, { Component } from "react";
import Button from "./Button";
import './App.css';
import { render } from "@testing-library/react";

class Main extends Component {
    state = {
        likes: 10
    }

    addOne = () => {
        console.log("something");
        this.setState({
            likes: this.state.likes + 1
        })
    }
    addfive = () => {
        console.log("something");
        this.setState({
            likes: this.state.likes + 5
        })
    }

    subOne = () => {
        console.log("something");
        this.setState({
            likes: this.state.likes - 1
        })
    }
    subfive = () => {
        console.log("something");
        this.setState({
            likes: this.state.likes - 5
        })
    }

    reset = () => {
        console.log("something");
        this.setState({
            likes: this.state.likes = 0
        })
    }

    render(){
        return (
            <div className="main">
                <h1>Likes</h1>
                <div className="circle">
                    <h1>{this.state.likes}</h1>
                </div>

                <div className="buttons">
                    <button onClick={this.addOne}>add one</button>
                    <button onClick={this.addfive}>add five</button>
                    <button onClick={this.reset}>Reset</button>
                    <button onClick={this.subOne}>sub one</button>
                    <button onClick={this.subfive}>sub five</button>
                </div>
            </div>   
        )
    };
}


export default Main;