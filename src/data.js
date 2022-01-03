export let realtime_weather = {
    location: {
        name: "Merath",
        region: "Uttar Pradesh",
        country: "India",
        lat: 29.02,
        lon: 77.77,
        tz_id: "Asia/Kolkata",
        localtime_epoch: 1641215091,
        localtime: "2022-01-03 18:34",
    },
    current: {
        last_updated_epoch: 1641213900,
        last_updated: "2022-01-03 18:15",
        temp_c: 17.7,
        temp_f: 63.9,
        is_day: 0,
        condition: {
            text: "Sunny",
            icon: "//cdn.weatherapi.com/weather/64x64/night/113.png",
            code: 1000,
        },
        wind_mph: 6.3,
        wind_kph: 10.1,
        wind_degree: 274,
        wind_dir: "W",
        pressure_mb: 1016,
        pressure_in: 30,
        precip_mm: 0,
        precip_in: 0,
        humidity: 38,
        cloud: 24,
        feelslike_c: 17.7,
        feelslike_f: 63.9,
        vis_km: 10,
        vis_miles: 6,
        uv: 5,
        gust_mph: 13,
        gust_kph: 20.9,
        air_quality: {
            co: 1188.300048828125,
            no2: 20.100000381469727,
            o3: 121.5999984741211,
            so2: 19.299999237060547,
            pm2_5: 182.8000030517578,
            pm10: 207.1999969482422,
            "us-epa-index": 5,
            "gb-defra-index": 10,
        },
    },
};

// let lat, long;
// window.navigator.geolocation.getCurrentPosition(
//     function (location) {
//         lat = location.coords.latitude;
//         long = location.coords.longitude;
//         fetch(
//             `https://api.weatherapi.com/v1/current.json?key=07ea304d0187480f863192418220201&q=${lat},${long}&aqi=yes`
//         )
//             .then((response) => response.json())
//             .then(console.log);
//     },
//     (err) => {
//         console.log(err);
//     },
//     { enableHighAccuracy: true }
// );
