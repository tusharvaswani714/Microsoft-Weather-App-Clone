import React from "react";
import styled from "styled-components";

const HourContainer = styled.div`
    min-width: 100px;
    border-top: 2px solid rgba(255, 255, 255, 0.7);
`;

const HourWeatherIcon = styled.img``;

const HourTemperature = styled.div`
    font-size: 25px;
`;

const HourExtras = styled.div`
    color: rgba(255, 255, 255, 0.7);
    font-size: 12px;
`;

const HourExtraLogo = styled.img`
    width: 12px;
`;

const HourExtra = styled.div`
    display: flex;
    gap: 8px;
    align-items: center;
`;

const HourWeatherStatus = styled.div`
    font-size: 12px;
    flex-grow: 1;
`;

const HourWeatherDetail = styled.div`
    display: flex;
    padding: 15px;
    flex-direction: column;
    height: 100%;
    gap: 12px;
`;

const HourOfWeatherTime = styled.div`
    border-top: 2px solid rgba(255, 255, 255, 0.7);
    padding-top: 10px;
    padding-left: 15px;
`;

function Hour({ weather_of_hour, unit }) {
    return (
        <HourContainer>
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
                <HourExtras>
                    <HourExtra>
                        <HourExtraLogo src="https://ik.imagekit.io/dchud9yflpr/drop_pULMAzF_zuy.svg?updatedAt=1641363493388" />
                        <span>{Math.trunc(weather_of_hour.humidity)}%</span>
                    </HourExtra>
                    <HourExtra>
                        <HourExtraLogo src="https://ik.imagekit.io/dchud9yflpr/wind.svg?updatedAt=1641364764299" />
                        <span>{Math.trunc(weather_of_hour.wind_kph)} km/h</span>
                    </HourExtra>
                </HourExtras>
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
        </HourContainer>
    );
}

export default Hour;
