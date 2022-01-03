import React from "react";
import styled from "styled-components";

const DayDetailsContainer = styled.div``;

const DayDetailsHeading = styled.div`
    font-size: 25px;
    margin-bottom: 20px;
`;

const DayDetailsContent = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-gap: 25px;
`;

const DayDetail = styled.div`
    width: 290px;
    border-top: 1px solid #8190b5;
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 20px;
`;

const DayAndNightText = styled.div``;

const DayAndNightTextHeading = styled.div`
    margin-bottom: 10px;
`;

const DayAndNightTextContent = styled.div`
    color: #d9dde8;
`;

function DayDetails(props) {
    return (
        <DayDetailsContainer>
            <DayDetailsHeading>Day Details</DayDetailsHeading>
            <DayDetailsContent>
                <DayDetail>
                    <DayAndNightText>
                        <DayAndNightTextHeading>Day</DayAndNightTextHeading>
                        <DayAndNightTextContent>
                            Night Skies
                        </DayAndNightTextContent>
                    </DayAndNightText>
                    <DayAndNightText>
                        <DayAndNightTextHeading>Night</DayAndNightTextHeading>
                        <DayAndNightTextContent>
                            Night Skies
                        </DayAndNightTextContent>
                    </DayAndNightText>
                </DayDetail>
                <DayDetail></DayDetail>
                <DayDetail></DayDetail>
                <DayDetail></DayDetail>
                <DayDetail></DayDetail>
                <DayDetail></DayDetail>
            </DayDetailsContent>
        </DayDetailsContainer>
    );
}

export default DayDetails;
