/* eslint-disable no-unused-vars */

const url = import.meta.env.VITE_URL;

const findByIdConta = async (id) => {
    const response = await fetch(`${url}transferencia?contaId=${id}`, {
        method: 'GET',
        mode: 'cors',
    });
    const data = await response.json();
    return data;
}

const findAll = async () => {
    const response = await fetch(`${url}/transferencia/all`, {
        method: 'GET',
        mode: 'cors',
    });
    const data = await response.json();
    return data;
}

const findByNameOperador = async (nome) => {
    const response = await fetch(`${url}/transferencia/${nome}`, {
        method: 'GET',
        mode: 'cors',
    });
    const data = await response.json();
    return data;
}

const findByDates = async (date) => {
    const dates = date.split(",");
    const first = `${dates[0]} 00:00:00`;
    const last = `${dates[1]} 00:00:00`;
    const response = await fetch(`${url}/transferencia/datas?first=${first}&last=${last}`, {
        method: 'GET',
        mode: 'cors',
    });
    const data = await response.json();
    return data;
}

const get = {
    findByIdConta,
    findAll,
    findByNameOperador,
    findByDates
};
export default get;
