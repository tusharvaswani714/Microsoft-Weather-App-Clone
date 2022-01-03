import React from "react";
import styled from "styled-components";
import { realtime_weather } from "../data";
import RealTimeWeather from "./RealTimeWeather";
import DayDetails from "./DayDetails";

const MainArea = styled.div`
    color: #fff;
    letter-spacing: 0.6px;
    word-spacing: 3px;
    max-width: 1235px;
    font-family: "Spline Sans", sans-serif;
    font-weight: 300;
    margin: auto;
`;

class Main extends React.Component {
    componentDidMount() {}
    render() {
        return (
            <MainArea>
                <RealTimeWeather {...realtime_weather} />
                <DayDetails />
            </MainArea>
        );
    }
}

export default Main;
