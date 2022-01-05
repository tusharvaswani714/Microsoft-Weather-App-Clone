import React from "react";
import styled from "styled-components";
import Day from "./Day.jsx";

const DailyDataContainer = styled.div`
    padding: 20px 0px 40px 0px;
`;

const DailyDataHeading = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

const DailyDataContent = styled.div`
    display: flex;
    overflow-x: hidden;
    padding-bottom: 20px;
`;

function DailyData({ realtime_weather, unit, selectedDay, changeSelected }) {
    return (
        <DailyDataContainer>
            <DailyDataHeading>Daily Details</DailyDataHeading>
            <DailyDataContent>
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
        </DailyDataContainer>
    );
}

export default DailyData;
