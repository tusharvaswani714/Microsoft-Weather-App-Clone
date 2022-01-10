import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import Hour from "./Hour";
import movingSlider from "../movingSlider";

const HourlyDataContainer = styled.div`
    padding: 20px 0px 40px 0px;
    position: relative;
`;

const HourlyDataSliderTrack = styled.div`
    overflow-x: hidden;
`;

const HourlyDataHeading = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

const HourlyDataContent = styled.div`
    display: flex;
    transition: transform 0.2s;
    padding-bottom: 35px;
`;

const Arrow = styled.div`
    color: rgb(255, 255, 255, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    font-size: 25px;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    &:hover {
        border: 1px solid #fff;
    }
    cursor: pointer;
    user-select: none;
    @media screen and (max-width: 385px) {
        padding: 24px 20px;
    }
`;

function HourlyData({ realtime_weather, unit, selectedDay }) {
    let HourlyDataSlider = useRef();
    useEffect(() => {
        movingSlider(
            100,
            realtime_weather.forecast.forecastday[selectedDay].hour.length,
            HourlyDataSlider.current
        );
    });
    function forward() {
        if (
            100 *
                realtime_weather.forecast.forecastday[selectedDay].hour.length >
            HourlyDataSlider.current.offsetWidth
        ) {
            if (
                realtime_weather.forecast.forecastday[selectedDay].hour.length *
                    100 ===
                +HourlyDataSlider.current.style.transform.replace(
                    /^\D+|\D+$/g,
                    ""
                )
            ) {
                return;
            }
            HourlyDataSlider.current.style.transform = `translateX(-${
                +HourlyDataSlider.current.style.transform.replace(
                    /^\D+|\D+$/g,
                    ""
                ) + 100
            }px)`;
        }
    }
    function backward() {
        if (
            100 *
                realtime_weather.forecast.forecastday[selectedDay].hour.length >
            HourlyDataSlider.current.offsetWidth
        ) {
            if (
                +HourlyDataSlider.current.style.transform.replace(
                    /^\D+|\D+$/g,
                    ""
                ) === 0
            ) {
                return;
            }
            HourlyDataSlider.current.style.transform = `translateX(-${
                +HourlyDataSlider.current.style.transform.replace(
                    /^\D+|\D+$/g,
                    ""
                ) - 100
            }px)`;
        }
    }
    return (
        <HourlyDataContainer>
            <HourlyDataSliderTrack>
                <HourlyDataHeading>Hourly Data</HourlyDataHeading>
                <HourlyDataContent ref={HourlyDataSlider}>
                    {realtime_weather.forecast.forecastday[
                        selectedDay
                    ].hour.map(function (weather_of_hour) {
                        return (
                            <Hour
                                weather_of_hour={weather_of_hour}
                                unit={unit}
                            />
                        );
                    })}
                </HourlyDataContent>
            </HourlyDataSliderTrack>
            <Arrow style={{ left: "-35px" }} onClick={backward}>
                {"<"}
            </Arrow>
            <Arrow style={{ right: "-35px" }} onClick={forward}>
                {">"}
            </Arrow>
        </HourlyDataContainer>
    );
}

export default HourlyData;
