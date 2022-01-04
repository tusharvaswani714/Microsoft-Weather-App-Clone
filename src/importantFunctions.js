export function toTime(unixTimeString) {
    let time = new Date(unixTimeString * 1000);
    let time_string = `${time.getHours()}:${time.getMinutes()}`;
    return time_string;
}
