const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=01a2254174ef166c26ad14fbec02d6e8&units=metric`);

    return resp.data.main.temp;
}

module.exports = {
    getClima,
}