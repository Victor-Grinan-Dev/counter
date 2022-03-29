import React, { Component } from "react";
import Button from "./Button";
import { render } from "@testing-library/react";

class Main extends Component {
    state = {
        likes: 0
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
        if (this.state.likes > 0){
            this.setState({
                likes: this.state.likes - 1
            })
        }
    }
    subfive = () => {
        if (this.state.likes >= 5){
            this.setState({
                likes: this.state.likes - 5 
            }
            )
        }
    }

    reset = () => {
        console.log("something");
        this.setState({
            likes: this.state.likes = 0
        })
    }

    render(){
        let allClasess = "circle";
        
        if (this.state.likes === 0){

        }else if (this.state.likes % 2 === 1){
            allClasess += " odd";
        }else if(this.state.likes % 2 === 0){
            allClasess += " even";
        }

        return (
            <div className="main">
                <h1>Likes</h1>
                <div className={allClasess}>
                    <h1>{this.state.likes}</h1>
                </div>

                <div className="buttons">
                    <Button click={this.addOne} value="add one"/>
                    <Button click={this.addfive} value="add five"/>
                    <Button click={this.reset} value="Reset"/>
                    <Button click={this.subOne} value="sub one"/>
                    <Button click={this.subfive} value="sub five"/>
                </div>
            </div>   
        )
    };
}


export default Main;