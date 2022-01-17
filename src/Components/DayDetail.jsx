import React from "react";
import styled from "styled-components";
import { activemoonphases, inactivemoonphases } from "../data";

const DayDetailContainer = styled.div`
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

const TemperatureThermometer = styled.div`
    width: 100%;
`;

const TemperatureThermometerBar = styled.div`
    width: 10px;
    height: 230px;
    position: relative;
    box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    background: #fff;
    margin: auto;
`;

const MaxTemp = styled.div`
    position: relative;
    top: 20px;
    right: -10px;
    display: flex;
    align-items: center;
    gap: 5px;
`;
const AverageTemp = styled.div`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    gap: 5px;
`;
const MinTemp = styled.div`
    position: absolute;
    bottom: 20px;
    left: 10px;
    display: flex;
    align-items: center;
    gap: 5px;
`;

const TempContent = styled.div`
    font-size: 20px;
`;

const TempLine = styled.div`
    width: 40px;
    height: 2px;
    background: rgba(255, 255, 255, 0.7);
    flex-shrink: 0;
`;

const TemperatureThermometerCircle = styled.div`
    margin: auto;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    box-shadow: 0px 0px 0px 5px rgba(255, 255, 255, 0.3);
    background: #fff;
    position: relative;
    top: -4px;
`;

function DayDetail({ details }) {
    return (
        <DayDetailContainer>
            {details.map((detail) => {
                return (
                    <DayDetailText>
                        {detail.heading ? (
                            <DayDetailTextHeading>
                                {detail.heading}
                            </DayDetailTextHeading>
                        ) : null}
                        {detail.content ||
                        detail.contentLogo ||
                        detail.contentDesc ? (
                            <DayDetailTextContent>
                                {detail.contentLogo ? (
                                    <DayDetailTextContentLogo
                                        src={detail.contentLogo}
                                    />
                                ) : null}
                                {detail.content ? (
                                    <DayDetailTextContentDesc>
                                        {detail.content}
                                    </DayDetailTextContentDesc>
                                ) : (
                                    detail.contentDesc.map((contentDesc) => {
                                        return (
                                            <DayDetailTextContentDesc>
                                                {contentDesc}
                                            </DayDetailTextContentDesc>
                                        );
                                    })
                                )}
                            </DayDetailTextContent>
                        ) : null}
                        {detail.contentDesc ? (
                            <DayDetailTextContentDesc></DayDetailTextContentDesc>
                        ) : null}
                    </DayDetailText>
                );
            })}
        </DayDetailContainer>
    );
}

export default DayDetail;
