import React from "react";
import styled from "styled-components";
import { activemoonphases, inactivemoonphases } from "../data";

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
    border-top: 1px solid rgba(255, 255, 255, 0.5);
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    font-size: 15px;
`;

const DayDetailText = styled.div``;

const DayDetailTextHeading = styled.div`
    margin-bottom: 10px;
`;

const DayDetailTextContent = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 20px;
    flex-wrap: wrap;
`;

const DayDetailTextContentLogo = styled.img`
    width: 50px;
`;

const DayDetailTextContentDesc = styled.div``;

function getMoonPhasesImgs(active) {
    let moonphasesimgurls = [];
    for (let passivemoonphase of inactivemoonphases.keys()) {
        if (passivemoonphase === active) {
            moonphasesimgurls.push(activemoonphases.get(active));
            continue;
        }
        moonphasesimgurls.push(inactivemoonphases.get(passivemoonphase));
    }
    return moonphasesimgurls;
}

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
                                {props.forecast.forecastday[0].astro.sunrise}
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
                                {props.forecast.forecastday[0].astro.sunset}
                            </DayDetailTextContentDesc>
                        </DayDetailTextContent>
                    </DayDetailText>
                </DayDetail>
                <DayDetail>
                    <DayDetailText>
                        <DayDetailTextHeading>Moonrise</DayDetailTextHeading>
                        <DayDetailTextContent>
                            <DayDetailTextContentLogo
                                src={
                                    "https://ik.imagekit.io/dchud9yflpr/sunrise_bhQw0Iuzr.svg?updatedAt=1641230704341"
                                }
                            />
                            <DayDetailTextContentDesc>
                                {props.forecast.forecastday[0].astro.moonrise}
                            </DayDetailTextContentDesc>
                        </DayDetailTextContent>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextHeading>Moonset</DayDetailTextHeading>
                        <DayDetailTextContent>
                            <DayDetailTextContentLogo
                                src={
                                    "https://ik.imagekit.io/dchud9yflpr/sunset_xmlFFk7th.svg?updatedAt=1641230704467"
                                }
                            />
                            <DayDetailTextContentDesc>
                                {props.forecast.forecastday[0].astro.moonset}
                            </DayDetailTextContentDesc>
                        </DayDetailTextContent>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextHeading>Moon Phase</DayDetailTextHeading>
                        <DayDetailTextContent>
                            {getMoonPhasesImgs(
                                props.forecast.forecastday[0].astro.moon_phase
                            ).map(function (url, index) {
                                return <DayDetailTextContentLogo src={url} />;
                            })}
                        </DayDetailTextContent>
                    </DayDetailText>
                    <DayDetailText>
                        <DayDetailTextHeading>
                            {props.forecast.forecastday[0].astro.moon_phase}
                        </DayDetailTextHeading>
                    </DayDetailText>
                </DayDetail>
                <DayDetail></DayDetail>
                <DayDetail></DayDetail>
                <DayDetail></DayDetail>
            </DayDetailsContent>
        </DayDetailsContainer>
    );
}

export default DayDetails;
