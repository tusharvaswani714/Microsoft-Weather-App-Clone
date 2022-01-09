import React, { useRef, useEffect, useState } from "react";
import styled from "styled-components";

const HeaderContainer = styled.div`
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    padding: 10px 40px;
    position: sticky;
    top: 0px;
    z-index: 1;
    color: #fff;
    min-height: 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 20px;
    font-size: 20px;
    @media screen and (max-width: 420px) {
        justify-content: center;
    }
`;

const ReloadButton = styled.div`
    cursor: pointer;
`;

const Search = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

const Input = styled.input`
    color: #fff;
    border: 0;
    padding: 10px;
    background: transparent;
    &::placeholder {
        color: #fff;
    }
`;

const DataList = styled.datalist``;

function Header({ searchWeather }) {
    const [options, setOptions] = useState([]);
    let locationInput = useRef();
    useEffect(() => {
        locationInput.current.addEventListener("keyup", (elem) => {
            if (elem.target.value) {
                fetch(
                    `https://api.weatherapi.com/v1/search.json?key=07ea304d0187480f863192418220201&q=${elem.target.value}`
                )
                    .then((response) => response.json())
                    .then((data) => {
                        setOptions(data);
                    });
            }
        });
    }, []);
    return (
        <HeaderContainer>
            <ReloadButton>
                <i className="fas fa-redo-alt"></i>
            </ReloadButton>
            <Search>
                <Input
                    type="text"
                    placeholder="Search"
                    list="locations"
                    ref={locationInput}
                />
                <i
                    className="fas fa-search"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        searchWeather(locationInput.current.value);
                    }}
                ></i>
            </Search>
            <DataList id="locations">
                {options.map((option) => {
                    return (
                        <option value={`${option.name}, ${option.country}`} />
                    );
                })}
            </DataList>
        </HeaderContainer>
    );
}

export default Header;
