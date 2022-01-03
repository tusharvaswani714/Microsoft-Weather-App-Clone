import React from "react";
import styled from "styled-components";
import { realtime_weather } from "../data";
import RealTimeWeather from "./RealTimeWeather";

const MainArea = styled.div`
    padding: 20px 0px;
    background: url("https://images.unsplash.com/photo-1497216429614-5bd7dbd9fc48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80");
    height: 100vh;
    background-size: cover;
    background-position: center;
    color: #fff;
`;

class Main extends React.Component {
    componentDidMount() {}
    render() {
        return (
            <MainArea>
                <RealTimeWeather {...realtime_weather} />
            </MainArea>
        );
    }
}

export default Main;
