import React from "react";
import styled from "styled-components";
import HourData from "./HourData";

const HourlyDataContainer = styled.div`
    padding: 20px 0px 40px 0px;
`;

const HourlyDataHeading = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

const HourlyDataContent = styled.div`
    display: flex;
    overflow-x: hidden;
    padding-bottom: 20px;
`;

function HourlyData({ realtime_weather, unit, selectedDay }) {
    return (
        <HourlyDataContainer>
            <HourlyDataHeading>Hourly Data</HourlyDataHeading>
            <HourlyDataContent>
                {realtime_weather.forecast.forecastday[selectedDay].hour.map(
                    function (weather_of_hour) {
                        return (
                            <HourData
                                weather_of_hour={weather_of_hour}
                                unit={unit}
                            />
                        );
                    }
                )}
            </HourlyDataContent>
        </HourlyDataContainer>
    );
}

export default HourlyData;
