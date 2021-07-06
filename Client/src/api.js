import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: '/api',
})

export const getItems = () => {
    return instance
        .get(`/product`)
        .then((response) => ({ response }))
        .catch((error) => ({ error }))
}

export const getCategory = () => {
    return instance
        .get('/category')
        .then((response) => ({ response }))
        .catch((error) => ({ error }))
}

export const getBasketApi = () => {
    return instance
        .get('/basket')
        .then((response) => ({ response }))
        .catch((error) => ({ error }))
}

export const setBasket = (payload) => {
    return instance
        .post('/basket', payload)
        .then((response) => ({ response }))
        .catch((error) => console.log(error.message))
}
