
import * as axios from 'axios'
const tokenGetter = ()=>{ return { headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} }}
console.log(tokenGetter())
const instance = axios.create({
    baseURL: 'http://165.227.131.111:8080/api/v1/',
    //headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`}
})
export const authReq = (data)=>instance.post('auth',data).then(response=>response.data)
export const authRefreshReq = (data)=>instance.post('refresh',data).then(response=>response.data)


export const categoryGetReq = ()=>instance.get('categories').then(response=>response.data)
export const categoryGetByIdReq = (id)=>instance.get(`categories/${id}`).then(response=>response.data)
export const categoryPostReq = (data)=>instance.post('categories',data)
export const categoryDelReq = (id)=>instance.delete(`categories`,id)
export const categoryDelByIdReq = (id)=>instance.delete(`categories/${id}`)
export const categoryUpdReq = (data,id)=>instance.put(`categories/${id}`,data)


export const productsGetReq = ()=>instance.get('products').then(response=>response.data)
export const productGetByIdReq = (id)=>instance.get(`products/${id}`).then(response=>response.data)
export const productPostReq = (data)=>instance.post('products',data)
export const productDelReq = (id)=>instance.delete(`products`,id)
export const productDelByIdReq = (id)=>instance.delete(`products/${id}`)
export const productUpdReq = (data,id)=>instance.put(`products/${id}`,data)

export const providersGetReq = ()=>instance.get('supplier').then(response=>response.data)
export const providerGetByIdReq = (id)=>instance.get(`supplier/${id}`).then(response=>response.data)
export const providerPostReq = (data)=>instance.post('supplier',data)
export const providerFilePostReq = (data)=>instance.post('supplierFile',data)
export const providerDelReq = (id)=>instance.delete(`supplier`,id)
export const providerDelByIdReq = (id)=>instance.delete(`supplier/${id}`)
export const providerUpdReq = (data,id)=>instance.put(`supplier/${id}`,data)
export const providerActiveGetReq = ()=>instance.get(`supplier/active`).then(response=>response.data)

export const usersGetReq = ()=>instance.get('client/').then(response=>response.data)
export const userGetByIdReq = (id)=>instance.get(`client/${id}`).then(response=>response.data)
export const userDelReq = (id)=>instance.delete(`client`,id)
export const userDelByIdReq = (id)=>instance.delete(`client/${id}`)


export const ordersGetReq = ()=>instance.get('orders').then(response=>response.data)
export const orderGetByIdReq = (id)=>instance.get(`orders/${id}`).then(response=>response.data)
export const orderPostReq = (data)=>instance.post('orders',data)
export const orderDelReq = (id)=>instance.delete(`orders`,id)
export const orderDelByIdReq = (id)=>instance.delete(`orders/${id}`)
export const orderUpdReq = (data,id)=>instance.put(`orders/${id}`,data)