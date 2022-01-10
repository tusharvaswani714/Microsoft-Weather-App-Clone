import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import Day from "./Day.jsx";
import movingSlider from "../movingSlider";

const DailyDataContainer = styled.div`
    position: relative;
    padding: 20px 0px 40px 0px;
`;

const DailyDataSliderTrack = styled.div`
    overflow-x: hidden;
`;

const DailyDataHeading = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

const DailyDataContent = styled.div`
    display: flex;
    padding-bottom: 20px;
    transition: transform 0.2s;
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
    user-select: none;
    cursor: pointer;
`;

function DailyData({ realtime_weather, unit, selectedDay, changeSelected }) {
    let DailyDataSlider = useRef();
    useEffect(() => {
        movingSlider(
            200,
            realtime_weather.forecast.forecastday.length,
            DailyDataSlider.current
        );
    });
    function forward() {
        if (
            200 * realtime_weather.forecast.forecastday.length >
            DailyDataSlider.current.offsetWidth
        ) {
            if (
                realtime_weather.forecast.forecastday.length * 200 ===
                +DailyDataSlider.current.style.transform.replace(
                    /^\D+|\D+$/g,
                    ""
                )
            ) {
                return;
            }
            DailyDataSlider.current.style.transform = `translateX(-${
                +DailyDataSlider.current.style.transform.replace(
                    /^\D+|\D+$/g,
                    ""
                ) + 200
            }px)`;
        }
    }
    function backward() {
        if (
            200 * realtime_weather.forecast.forecastday.length >
            DailyDataSlider.current.offsetWidth
        ) {
            if (
                +DailyDataSlider.current.style.transform.replace(
                    /^\D+|\D+$/g,
                    ""
                ) === 0
            ) {
                return;
            }
            DailyDataSlider.current.style.transform = `translateX(-${
                +DailyDataSlider.current.style.transform.replace(
                    /^\D+|\D+$/g,
                    ""
                ) - 200
            }px)`;
        }
    }
    return (
        <DailyDataContainer>
            <DailyDataSliderTrack>
                <DailyDataHeading>Daily Details</DailyDataHeading>
                <DailyDataContent ref={DailyDataSlider}>
                    {realtime_weather.forecast.forecastday.map(function (
                        weather_of_day,
                        index
                    ) {
                        return (
                            <Day
                                weather_of_day={weather_of_day}
                                unit={unit}
                                selected={index === selectedDay}
                                changeSelected={changeSelected}
                                index={index}
                            />
                        );
                    })}
                </DailyDataContent>
            </DailyDataSliderTrack>
            <Arrow style={{ left: "-35px" }} onClick={backward}>
                {"<"}
            </Arrow>
            <Arrow style={{ right: "-35px" }} onClick={forward}>
                {">"}
            </Arrow>
        </DailyDataContainer>
    );
}

export default DailyData;
