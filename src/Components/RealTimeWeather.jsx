import React from "react";
import styled from "styled-components";
import { toTime } from "../importantFunctions";

const RealTimeWeatherContainer = styled.div`
    text-align: center;
`;

const Location = styled.div`
    font-size: 1.5625em;
`;

const Temperature = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const TemperatureIcon = styled.img`
    width: 70px;
`;

const TemperatureValue = styled.div`
    font-size: 4.6875em;
`;

const DegreeSymbol = styled.span``;

const TemperatureUnitSwitcher = styled.div`
    font-size: 1.5625em;
`;

const SelectedUnit = styled.div``;

const OtherUnit = styled.div`
    margin-top: 2px;
    color: #dbdde9;
    &:hover {
        border: 1px solid;
        background: rgb(255, 255, 255, 0.2);
    }
`;

const TemperatureText = styled.div`
    font-size: 1.5625em;
    margin: 18px 0px;
`;

const LastUpdated = styled.div`
    margin-bottom: 15px;
    font-size: 0.9375em;
`;

const Extras = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.9375em;
    gap: 20px;
    margin-bottom: 15px;
`;

const Extra = styled.div``;

function RealTimeWeather({ realtime_weather, unit, changeUnit }) {
    return (
        <RealTimeWeatherContainer>
            <Location>
                {realtime_weather.location.name},{" "}
                {realtime_weather.location.country}
            </Location>
            <Temperature>
                <TemperatureIcon src={"https://ratentoi.sirv.com/sunny.svg"} />
                <TemperatureValue>
                    {unit === "C"
                        ? Math.trunc(realtime_weather.current.temp_c)
                        : Math.trunc(realtime_weather.current.temp_f)}
                    <DegreeSymbol>°</DegreeSymbol>
                </TemperatureValue>
                <TemperatureUnitSwitcher>
                    <SelectedUnit>{unit}</SelectedUnit>
                    <OtherUnit onClick={changeUnit}>
                        {unit === "C" ? "F" : "C"}
                    </OtherUnit>
                </TemperatureUnitSwitcher>
            </Temperature>
            <TemperatureText>
                {realtime_weather.current.condition.text}
            </TemperatureText>
            <LastUpdated>
                Updated as of{" "}
                {toTime(realtime_weather.current.last_updated_epoch)}
            </LastUpdated>
            <Extras>
                <Extra>
                    Feels Like{" "}
                    {unit === "C"
                        ? Math.trunc(realtime_weather.current.feelslike_c)
                        : Math.trunc(realtime_weather.current.feelslike_f)}
                    <DegreeSymbol>°</DegreeSymbol>
                </Extra>
                <Extra>Wind {realtime_weather.current.wind_kph} km/h</Extra>
                <Extra>Visibility {realtime_weather.current.vis_km} km</Extra>
            </Extras>
            <Extras>
                <Extra>
                    Barometer {realtime_weather.current.pressure_mb} mb
                </Extra>
                <Extra>Humidity {realtime_weather.current.humidity}%</Extra>
                <Extra>Dew Point</Extra>
            </Extras>
        </RealTimeWeatherContainer>
    );
}

export default RealTimeWeather;
