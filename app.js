const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para otener el clima',
        demand: true
    }
}).argv;

// const encodedUrl = encodeURI(argv.d)


// console.log(argv.d);


const getInfo = async(direccion) => {

    try {

        const coord = await lugar.getLugarLatLng(direccion);
        const temp = await clima.getClima(coord.lat, coord.lng);

        return `El clima de ${ coord.direccion } es de ${ temp }`;

    } catch (e) {

        return `No se pudo determinar el clima del lugar ${ direccion }`
    }


}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);