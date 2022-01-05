import React from "react";
import styled from "styled-components";

const HourDataContainer = styled.div``;

const HourWeatherIcon = styled.img``;

const HourTemperature = styled.div``;

const HourExtras = styled.div``;

const HourHumidity = styled.div``;

const HourWindSpeed = styled.div``;

const HourWeatherStatus = styled.div``;

const HourWeatherDetail = styled.div`
    display: flex;
    flex-direction: column;
`;

const HourOfWeatherTime = styled.div`
    border-top: 2px solid rgba(255, 255, 255, 0.7);
`;

function HourData({ weather_of_hour, unit }) {
    console.log(weather_of_hour);
    return (
        <HourDataContainer>
            <HourWeatherDetail>
                <HourWeatherIcon
                    src={weather_of_hour.condition.icon}
                ></HourWeatherIcon>
                <HourTemperature>
                    {unit === "C"
                        ? `${Math.trunc(weather_of_hour.temp_c)}`
                        : `${Math.trunc(weather_of_hour.temp_f)}`}
                    °
                </HourTemperature>
                <HourWeatherStatus>
                    {weather_of_hour.condition.text}
                </HourWeatherStatus>
            </HourWeatherDetail>
            <HourOfWeatherTime>
                {new Date(weather_of_hour.time_epoch * 1000).getHours() >= 12
                    ? `${
                          24 -
                          new Date(weather_of_hour.time_epoch * 1000).getHours()
                      } pm`
                    : `${new Date(
                          weather_of_hour.time_epoch * 1000
                      ).getHours()} am`}
            </HourOfWeatherTime>
        </HourDataContainer>
    );
}

export default HourData;
