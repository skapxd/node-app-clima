const axios = require('axios');

const getLugarLatLng = async(d) => {

    const encodedUrl = encodeURI(d)

    console.log(encodedUrl);

    const instance = axios.create({
        baseURL: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities?namePrefix=${ encodedUrl }`,
        headers: {
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.com',
            'x-rapidapi-key': '74da93b0d8mshb7680e94ac15a47p12b0e4jsn64c4fbb245a1'

        }
    })

    const resp = await instance.get();

    if (resp.data.data.length === 0) {
        throw new Error(`No hay resultados para ${ d }`);
    }

    const data = resp.data.data[0];
    const direccion = data.name;
    const lat = data.latitude;
    const lng = data.longitude;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}