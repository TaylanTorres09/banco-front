/* eslint-disable no-unused-vars */

const url = import.meta.env.VITE_URL;

const findByIdConta = async () => {

}

const findAll = async () => {
    const response = await fetch(`${url}transferencia/all`, {
        method: 'GET',
        mode: 'cors',
    });
    const data = await response.json();
    return data;
}

const get = {
    findByIdConta,
    findAll,
};
export default get;
