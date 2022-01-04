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
    // constructor(props) {
    //     super(props);
    //     this.state = { weatherdata: {}, dataRecieved: false };
    // }
    // componentDidMount() {
    //     window.navigator.geolocation.getCurrentPosition(
    //         (location) => {
    //             fetch(
    //                 `https://api.weatherapi.com/v1/forecast.json?key=07ea304d0187480f863192418220201&q=${location.coords.latitude},${location.coords.longitude}&aqi=yes`
    //             )
    //                 .then((response) => response.json())
    //                 .then((data) => {
    //                     this.setState({ weatherdata: data }, function () {
    //                         this.setState({ dataRecieved: true });
    //                     });
    //                 });
    //         },
    //         (err) => {
    //             console.log(err);
    //         },
    //         { enableHighAccuracy: true }
    //     );
    // }
    render() {
        // if (this.state.dataRecieved) {
        //     return (
        //         <MainArea>
        //             <RealTimeWeather {...this.state.weatherdata} />
        //             <DayDetails {...this.state.weatherdata} />
        //         </MainArea>
        //     );
        // } else {
        //     return null;
        // }
        return (
            <MainArea>
                <RealTimeWeather {...realtime_weather} />
                <DayDetails {...realtime_weather} />
            </MainArea>
        );
    }
}

export default Main;
