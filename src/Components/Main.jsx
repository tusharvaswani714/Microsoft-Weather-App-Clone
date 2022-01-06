import React, { useState, useEffect } from "react";
import styled from "styled-components";
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
    @media screen and (max-width: 385px) {
        padding: 24px 30px;
    }
`;

function Main({ location }) {
    const [currentUnit, setCurrentUnit] = useState("C");
    const [selectedDay, setSelectedDay] = useState(0);
    const [weatherdata, setWeatherdata] = useState(undefined);
    useEffect(() => {
        if (location) {
            fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=07ea304d0187480f863192418220201&q=${location}&days=7&aqi=yes`
            )
                .then((response) => response.json())
                .then((data) => {
                    setWeatherdata(data);
                });
        } else {
            window.navigator.geolocation.getCurrentPosition(
                (location) => {
                    fetch(
                        `https://api.weatherapi.com/v1/forecast.json?key=07ea304d0187480f863192418220201&q=${location.coords.latitude},${location.coords.longitude}&days=7&aqi=yes`
                    )
                        .then((response) => response.json())
                        .then((data) => {
                            setWeatherdata(data);
                        });
                },
                (err) => {
                    console.log(err);
                },
                { enableHighAccuracy: true }
            );
        }
    }, []);
    let changeUnit = () => {
        if (currentUnit === "C") {
            setCurrentUnit("F");
            return;
        }
        setCurrentUnit("C");
    };
    if (weatherdata) {
        return (
            <MainArea>
                <RealTimeWeather
                    realtime_weather={weatherdata}
                    unit={currentUnit}
                    changeUnit={changeUnit}
                />
                <DailyData
                    realtime_weather={weatherdata}
                    unit={currentUnit}
                    selectedDay={selectedDay}
                    changeSelected={(index) => {
                        setSelectedDay(index);
                    }}
                />
                <HourlyData
                    realtime_weather={weatherdata}
                    unit={currentUnit}
                    selectedDay={selectedDay}
                />
                <DayDetails realtime_weather={weatherdata} unit={currentUnit} />
            </MainArea>
        );
    }
    return null;
}

export default Main;
