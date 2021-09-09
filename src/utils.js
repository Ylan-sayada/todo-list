export let minTwoDigits = (num) => {
    return (num < 10 ? '0' : '') + num;
}
export let setupDate = (date) => {
    return new Date(date);
}
export let getFullDate = (dateToDisplay) => {
    let date = setupDate(dateToDisplay);
    let year = date.getFullYear();
    let month = minTwoDigits((date.getMonth() + 1));
    let day = minTwoDigits((date.getDate() + 1));
    return (`${year}/${month}/${day}`);
}
export let getFullTime = (dateToDisplay) => {
    let date = setupDate(dateToDisplay);
    let second = minTwoDigits(date.getHours());
    let minute = minTwoDigits(date.getMinutes());
    let hour = minTwoDigits(date.getSeconds())

    return (`${second}:${minute}:${hour}`);
}