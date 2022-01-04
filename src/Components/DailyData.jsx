import React from "react";
import styled from "styled-components";

const DailyDataContainer = styled.div``;

const DailyDataHeading = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

const DailyDataContent = styled.div`
    display: flex;
`;

function DailyData(props) {
    function toTime(unixTimeString) {
        let time = new Date(unixTimeString * 1000);
        let time_string = `${time.getHours()}:${time.getMinutes()}`;
        return time_string;
    }
    return (
        <DailyDataContainer>
            <DailyDataHeading>Daily Details</DailyDataHeading>
            <DailyDataContent>
                {/* {props.forecast.forecastday.map()} */}
            </DailyDataContent>
        </DailyDataContainer>
    );
}

export default DailyData;
