import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { search_data } from "../data";

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
    let locationInput = useRef();
    let locationOptions = useRef();
    useEffect(() => {
        locationInput.current.addEventListener("keyup", function (e) {
            // fetch(
            //     `https://api.weatherapi.com/v1/search.json?key=07ea304d0187480f863192418220201&q=${e.target.value}`
            // )
            //     .then((response) => response.json())
            //     .then((data) => {
            //         locationOptions.current.innerHTML = "";
            //         data.map(function (result, id) {
            //             if (id > 3) {
            //                 return;
            //             }
            //             let option = document.createElement("option");
            //             option.value = result.name;
            //             locationOptions.current.append(option);
            //         });
            //     });
            locationOptions.current.innerHTML = "";
            search_data.map(function (result, id) {
                if (id > 3) {
                    return;
                }
                let option = document.createElement("option");
                option.value = `${result.name}, ${result.country}`;
                locationOptions.current.append(option);
            });
        });
    });
    return (
        <HeaderContainer>
            <ReloadButton>
                <i class="fas fa-redo-alt"></i>
            </ReloadButton>
            <Search>
                <Input
                    type="text"
                    placeholder="Search"
                    list="locations"
                    ref={locationInput}
                />
                <i
                    class="fas fa-search"
                    style={{ cursor: "pointer" }}
                    onClick={() => {
                        searchWeather(locationInput.current.value);
                    }}
                ></i>
            </Search>
            <DataList id="locations" ref={locationOptions}></DataList>
        </HeaderContainer>
    );
}

export default Header;
