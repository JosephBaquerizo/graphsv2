export const capitalizeFunc = (str) => {
    const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
    return capitalized;
}

export const getAverage = (arr) => {
    const qty = arr.length;
    let sum = 0;
    for (let i=0; i < qty; i++) {
        sum += arr[i];
    }
    return (sum / qty).toFixed(2);
}

export const getMax = (arr) => {
    let max = Number.NEGATIVE_INFINITY;
    for (let i=0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

export const getMin = (arr) => {
    let min = Number.POSITIVE_INFINITY;
    for (let i=0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

export const getLatest = (arr) => {
    return arr[arr.length - 1];
}

export const range = (queries) => {
    return Array(queries).fill().map((_, idx) => 1 + idx);
}

export const stuctureResponse = (response) => {
    let temperatureArray = [];
    let sensationArray = [];
    let pressureArray = [];
    let humidityArray = [];
    let windArray = [];
    response.list.forEach(item => {
        temperatureArray.push(item.main.temp);
        sensationArray.push(item.main.feels_like);
        pressureArray.push(item.main.pressure);
        humidityArray.push(item.main.humidity);
        windArray.push(item.wind.speed);
    })
    const cnt = response.cnt;
    const visibility = response.list[cnt - 1].visibility / 100;
    const city = response.city.name;
    const country = response.city.country;
    const timezone = response.city.timezone;
    const description = response.list[cnt - 1].weather[0].description;

    const obj = {
        "city": city,
        "visibility": visibility,
        "country": country,
        "timezone": timezone,
        "description": description,
        "cnt": cnt,
        "temperature": {
            "name": "temperature",
            "units": "K",
            "data": temperatureArray,
            "bColor": "#ff2e2e",
            "bgColor": "#ffcccb",
            "label": "Temperature (K)",
        },
        "sensation": {
            "name": "sensation",
            "units": "K",
            "data": sensationArray,
            "bColor": "orange",
            "bgColor": "#fee165",
            "label": "Sensation (K)"
        },
        "pressure": {
            "name": "pressure",
            "units": "psi",
            "data": pressureArray,
            "bColor": "#6666ff",
            "bgColor": "lightblue",
            "label": "Pressure (psi)"
        },
        "humidity": {
            "name": "humidity",
            "units": "%",
            "data": humidityArray,
            "bColor": "#234c6f",
            "bgColor": "#a5c6e2",
            "label": "Humidity (%)"
        },
        "wind": {
            "name": "wind",
            "units": "km/h",
            "data": windArray,
            "bColor": "grey",
            "bgColor": "#cbcccb",
            "label": "Speed (km/h)"
        }
    };

    return obj;
}