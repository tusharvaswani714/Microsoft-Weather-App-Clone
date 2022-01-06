import "./App.css";
import Main from "./Components/Main";
import Header from "./Components/Header";
import { useState } from "react";

function App() {
    let [location, changeLocation] = useState("");
    return (
        <div className="App">
            <Header searchWeather={changeLocation} />
            <Main location={location} />
        </div>
    );
}

export default App;
