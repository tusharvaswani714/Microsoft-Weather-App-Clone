import React from "react";
import styled from "styled-components";
import { realtime_weather } from "../data";
import RealTimeWeather from "./RealTimeWeather";
import DayDetails from "./DayDetails";
import DailyData from "./DailyData";
import HourlyData from "./HourlyData";

const MainArea = styled.div`
    padding: 24px 40px;
    color: #fff;
    letter-spacing: 0.6px;
    word-spacing: 3px;
    max-width: 1235px;
    font-family: "PT Sans", sans-serif;
    font-weight: 300;
    margin: auto;
`;

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weatherdata: {},
            dataRecieved: false,
            currentUnit: "C",
            selectedDay: 0,
        };
    }
    // componentDidMount() {
    //     window.navigator.geolocation.getCurrentPosition(
    //         (location) => {
    //             fetch(
    //                 `https://api.weatherapi.com/v1/forecast.json?key=07ea304d0187480f863192418220201&q=${location.coords.latitude},${location.coords.longitude}&days=7&aqi=yes`
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
    changeUnit() {
        if (this.state.currentUnit === "C") {
            this.setState({ currentUnit: "F" });
            return;
        }
        this.setState({ currentUnit: "C" });
    }
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
                <RealTimeWeather
                    realtime_weather={realtime_weather}
                    unit={this.state.currentUnit}
                    changeUnit={this.changeUnit.bind(this)}
                />
                <DailyData
                    realtime_weather={realtime_weather}
                    unit={this.state.currentUnit}
                    selectedDay={this.state.selectedDay}
                    changeSelected={(index) =>
                        this.setState({ selectedDay: index })
                    }
                />
                <HourlyData
                    realtime_weather={realtime_weather}
                    unit={this.state.currentUnit}
                    selectedDay={this.state.selectedDay}
                />
                <DayDetails
                    realtime_weather={realtime_weather}
                    unit={this.state.currentUnit}
                />
            </MainArea>
        );
    }
}

export default Main;
