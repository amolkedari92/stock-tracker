import React, { Component } from "react";

import APIService from "../services/API";

class Home extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.fetchHistoricalData();
    }

    fetchHistoricalData = () => {
        APIService.getHistoricalData((resp) => {
            console.log(resp)
        }, (err) => {
            console.log(err)
        })
    }

    render() {
        return(<div className="home">
            Home page
        </div>)
    }
}

export default Home;
