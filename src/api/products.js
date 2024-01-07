import axios from 'axios';

const productsAPI_ = 'https://fakestoreapi.com';

const products = {
    getProducts : () => {
        return axios.get(`${productsAPI_}/products`);
    },
    getCategory : (data) => {
        return axios.get(`${productsAPI_}/products/category/${data}`);
    },
    getSingle : (id) => {
        return axios.get(`${productsAPI_}/products/${id}`);
    }
}
export default products;
