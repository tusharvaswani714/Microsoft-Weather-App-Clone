import React, { useState } from "react";
import styled from "styled-components";

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
                        ? Math.trunc(props.current.temp_c)
                        : Math.trunc(props.current.temp_f)}
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
                        ? Math.trunc(props.current.feelslike_c)
                        : Math.trunc(props.current.feelslike_f)}
                    <DegreeSymbol>°</DegreeSymbol>
                </Extra>
                <Extra>Wind {props.current.wind_kph} km/h</Extra>
                <Extra>Visibility {props.current.vis_km} km</Extra>
            </Extras>
            <Extras>
                <Extra>Barometer {props.current.pressure_mb} mb</Extra>
                <Extra>Humidity {props.current.humidity}%</Extra>
                <Extra>Dew Point</Extra>
            </Extras>
        </RealTimeWeatherContainer>
    );
}

export default RealTimeWeather;
