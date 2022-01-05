import React from "react";
import styled from "styled-components";

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const DayChevron = styled.div`
    position: absolute;
    width: 0;
    height: 0;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-top: 20px solid rgba(255, 255, 255, 0.3);
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
`;

const DayContainer = styled.div`
    min-width: 200px;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    &:hover {
        border: 2px solid rgba(255, 255, 255, 0.7);
    }
    &:hover ${DayChevron} {
        border-top: 20px solid rgba(255, 255, 255, 0.7);
    }
    position: relative;
`;

const DayDate = styled.div`
    font-size: 20px;
`;

const DayWeatherIcon = styled.img`
    width: 100px;
`;

const DayTemperature = styled.div``;

const DayTemperatureMax = styled.span`
    font-size: 30px;
    margin-right: 5px;
`;

const DayTemperatureMin = styled.span`
    color: rgba(255, 255, 255, 0.7);
`;

const DayWeatherStatus = styled.div``;

function Day({ weather_of_day, unit, selected, changeSelected, index }) {
    if (selected) {
        return (
            <DayContainer
                style={{ backgroundColor: "rgba(255, 255, 255, 0.3)" }}
            >
                <DayDate>
                    {days[new Date(weather_of_day.date_epoch * 1000).getDay()]}{" "}
                    {new Date(weather_of_day.date_epoch * 1000).getDate()}
                </DayDate>
                <DayWeatherIcon src={weather_of_day.day.condition.icon} />
                <DayTemperature>
                    <DayTemperatureMax>
                        {unit === "C"
                            ? `${Math.trunc(weather_of_day.day.maxtemp_c)}`
                            : `${Math.trunc(weather_of_day.day.maxtemp_f)}`}
                        °
                    </DayTemperatureMax>
                    <DayTemperatureMin>
                        {unit === "C"
                            ? `${Math.trunc(weather_of_day.day.mintemp_c)}`
                            : `${Math.trunc(weather_of_day.day.mintemp_f)}`}
                        °
                    </DayTemperatureMin>
                </DayTemperature>
                <DayWeatherStatus>
                    {weather_of_day.day.condition.text}
                </DayWeatherStatus>
                <DayChevron />
            </DayContainer>
        );
    }
    return (
        <DayContainer
            onClick={() => {
                changeSelected(index);
            }}
        >
            <DayDate>
                {days[new Date(weather_of_day.date_epoch * 1000).getDay()]}{" "}
                {new Date(weather_of_day.date_epoch * 1000).getDate()}
            </DayDate>
            <DayWeatherIcon src={weather_of_day.day.condition.icon} />
            <DayTemperature>
                <DayTemperatureMax>
                    {unit === "C"
                        ? `${Math.trunc(weather_of_day.day.maxtemp_c)}`
                        : `${Math.trunc(weather_of_day.day.maxtemp_f)}`}
                    °
                </DayTemperatureMax>
                <DayTemperatureMin>
                    {unit === "C"
                        ? `${Math.trunc(weather_of_day.day.mintemp_c)}`
                        : `${Math.trunc(weather_of_day.day.mintemp_f)}`}
                    °
                </DayTemperatureMin>
            </DayTemperature>
            <DayWeatherStatus>
                {weather_of_day.day.condition.text}
            </DayWeatherStatus>
        </DayContainer>
    );
}

export default Day;
