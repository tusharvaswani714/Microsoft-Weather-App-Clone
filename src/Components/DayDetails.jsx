import React from "react";
import styled from "styled-components";
import { realtime_weather } from "../data";

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

const DayDetailText = styled.div``;

const DayDetailTextHeading = styled.div`
    margin-bottom: 10px;
`;

const DayDetailTextContent = styled.div`
    color: #d9dde8;
    display: flex;
    align-items: center;
    gap: 12px;
`;

const DayDetailTextContentLogo = styled.img`
    width: 50px;
`;

const DayDetailTextContentDesc = styled.div`
    color: #d9dde8;
`;

function DayDetails(props) {
    return (
        <DayDetailsContainer>
            <DayDetailsHeading>Day Details</DayDetailsHeading>
            <DayDetailsContent>
                <DayDetail>
                    <DayDetailText>
                        <DayDetailTextHeading>Day</DayDetailTextHeading>
                        <DayDetailTextContent>Night Skies</DayDetailTextContent>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextHeading>Night</DayDetailTextHeading>
                        <DayDetailTextContent>Night Skies</DayDetailTextContent>
                    </DayDetailText>
                </DayDetail>
                <DayDetail>
                    <DayDetailText>
                        <DayDetailTextHeading>Sunrise</DayDetailTextHeading>
                        <DayDetailTextContent>
                            <DayDetailTextContentLogo
                                src={
                                    "https://ik.imagekit.io/dchud9yflpr/sunrise_bhQw0Iuzr.svg?updatedAt=1641230704341"
                                }
                            />
                            <DayDetailTextContentDesc>
                                {
                                    realtime_weather.forecast.forecastday[0]
                                        .astro.sunrise
                                }
                            </DayDetailTextContentDesc>
                        </DayDetailTextContent>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextHeading>Sunset</DayDetailTextHeading>
                        <DayDetailTextContent>
                            <DayDetailTextContentLogo
                                src={
                                    "https://ik.imagekit.io/dchud9yflpr/sunset_xmlFFk7th.svg?updatedAt=1641230704467"
                                }
                            />
                            <DayDetailTextContentDesc>
                                {
                                    realtime_weather.forecast.forecastday[0]
                                        .astro.sunset
                                }
                            </DayDetailTextContentDesc>
                        </DayDetailTextContent>
                    </DayDetailText>
                </DayDetail>
                <DayDetail></DayDetail>
                <DayDetail></DayDetail>
                <DayDetail></DayDetail>
                <DayDetail></DayDetail>
            </DayDetailsContent>
        </DayDetailsContainer>
    );
}

export default DayDetails;
