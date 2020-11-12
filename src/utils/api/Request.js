
import * as axios from 'axios'


const instance = axios.create({
    baseURL: 'http://165.227.131.111:8080/api/v1/'
})
export const authReq = (data)=>instance.post('auth',data)
export const categoryGetReq = ()=>instance.get('categories').then(response=>response.data)
export const categoryGetByIdReq = (id)=>instance.get(`categories/${id}`).then(response=>response.data)
export const categoryPostReq = (data)=>instance.post('categories',data)
export const categoryDelReq = (id)=>instance.delete(`categories/${id}`)
export const categoryUpdReq = (data,id)=>instance.put(`categories/${id}`,data)


export const productsGetReq = ()=>instance.get('products').then(response=>response.data)
export const productGetByIdReq = (id)=>instance.get(`products/${id}`).then(response=>response.data)
export const productPostReq = (data)=>instance.post('products',data)
export const productDelReq = (id)=>instance.delete(`products/${id}`)
export const productUpdReq = (data,id)=>instance.put(`products/${id}`,data)