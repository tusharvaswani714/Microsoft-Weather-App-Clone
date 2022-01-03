import React, { useState } from "react";
import styled from "styled-components";

const RealTimeWeatherContainer = styled.div`
    text-align: center;
    font-family: "Spline Sans", sans-serif;
    font-weight: 300;
`;

const Location = styled.div``;

const Temperature = styled.div`
    font-weight: 400;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const TemperatureIcon = styled.img`
    width: 35px;
`;

const TemperatureValue = styled.div`
    font-size: 50px;
`;

const DegreeSymbol = styled.span``;

const TemperatureUnitSwitcher = styled.div``;

const SelectedUnit = styled.div``;

const OtherUnit = styled.div`
    margin-top: 2px;
    color: #dbdde9;
    &:hover {
        border: 1px solid;
        background: rgb(255, 255, 255, 0.2);
    }
`;

const TemperatureText = styled.div``;

const LastUpdated = styled.div`
    font-size: 10px;
    margin: 11px 0px;
`;

const Extras = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    gap: 20px;
    letter-spacing: 0.6px;
    word-spacing: 3px;
    margin-bottom: 8px;
`;

const Extra = styled.div``;

function RealTimeWeather(props) {
    const [currentUnit, changeCurrentUnit] = useState("C");
    function toTime(unixTimeString) {
        let time = new Date(unixTimeString * 1000);
        let time_string = `${time.getHours()}:${time.getMinutes()}`;
        return time_string;
    }
    function changeUnit() {
        if (currentUnit === "C") {
            changeCurrentUnit("F");
            return;
        }
        changeCurrentUnit("C");
    }
    return (
        <RealTimeWeatherContainer>
            <Location>
                {props.location.name}, {props.location.country}
            </Location>
            <Temperature>
                <TemperatureIcon src={"https://ratentoi.sirv.com/sunny.svg"} />
                <TemperatureValue>
                    {currentUnit === "C"
                        ? props.current.temp_c
                        : props.current.temp_f}
                    <DegreeSymbol>°</DegreeSymbol>
                </TemperatureValue>
                <TemperatureUnitSwitcher>
                    <SelectedUnit>{currentUnit}</SelectedUnit>
                    <OtherUnit onClick={changeUnit}>
                        {currentUnit === "C" ? "F" : "C"}
                    </OtherUnit>
                </TemperatureUnitSwitcher>
            </Temperature>
            <TemperatureText>{props.current.condition.text}</TemperatureText>
            <LastUpdated>
                Updated as of {toTime(props.current.last_updated_epoch)}
            </LastUpdated>
            <Extras>
                <Extra>
                    Feels Like{" "}
                    {currentUnit === "C"
                        ? props.current.feelslike_c
                        : props.current.feelslike_f}
                    <DegreeSymbol>°</DegreeSymbol>
                </Extra>
                <Extra>Wind {props.current.wind_kph}</Extra>
                <Extra>Visibility {props.current.vis_km}</Extra>
            </Extras>
            <Extras>
                <Extra>Barometer {props.current.pressure_mb}</Extra>
                <Extra>Humidity {props.current.humidity}%</Extra>
                <Extra>Dew Point</Extra>
            </Extras>
        </RealTimeWeatherContainer>
    );
}

export default RealTimeWeather;
