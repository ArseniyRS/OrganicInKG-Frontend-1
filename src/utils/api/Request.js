
import * as axios from 'axios'
const tokenGetter = ()=>{ return { headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} }}
const instance = axios.create({
    baseURL: 'https://organicinkg.net:8443/api/v1/',
})
export const authReq = (data)=>instance.post('auth',data).then(response=>response.data)
export const authRefreshReq = (data)=>instance.post('refresh',data).then(response=>response.data)


export const categoryGetByIdReq = (id)=>instance.get(`categories/${id}`).then(response=>response.data)
export const categoryPostReq = (data)=>instance.post('categories',data)
export const categoryDelByIdReq = (id)=>instance.delete(`categories/${id}`)
export const categoryUpdReq = (data,id)=>instance.put(`categories/${id}`,data).catch(err=>console.log(err.response))
export const categoryGetSearchReq = (searchText,page)=>instance.get(`${searchText ? 
    `categories/search?name=${searchText}&page=${page}&size=20` 
    : `categories?page=${page}&size=20`}`)
    .then(response=>response.data)


export const productsGetReq = (searchText,page)=>instance.get(`${searchText ?
    `products/like?prodName=${searchText}&page=${page}&size=20`
    : `products?page=${page}&size=20`}`)
    .then(response=>response.data)
export const productGetByIdReq = (id)=>instance.get(`products/${id}`).then(response=>response.data)
export const productPostReq = (data)=>instance.post('products',data)
export const productDelByIdReq = (id)=>instance.delete(`products/${id}`)
export const productUpdReq = (data,id)=>instance.put(`products/${id}`,data)

export const productImgPostReq = (data)=>instance.post(`productImages`,data, {headers: { 'content-type': 'multipart/form-data' }})
export const productImgUpdReq = (data,id)=> instance.put(`productImages/${id}`,data, {headers: { 'content-type': 'multipart/form-data' }})

export const measureUnitGetReq = ()=>instance.get(`measureUnit`).then(response=>response.data)


export const providersGetReq = (searchText,page)=>instance.get(`${searchText ?
    `supplier/search?name=${searchText}&page=${page}&size=20`
    : `supplier?page=${page}&size=20`}`)
    .then(response=>response.data)
export const providerGetByIdReq = (id)=>instance.get(`supplier/${id}`).then(response=>response.data)
export const providerPostReq = (data)=>instance.post('supplier',data)
export const providerImgPostReq = (data)=> instance.post('supplierFile',data)
export const providerDelByIdReq = (id)=>instance.delete(`supplier/${id}`)
export const providerUpdReq = (data,id)=>instance.put(`supplier/${id}`,data)
export const providerActiveGetReq = ()=>instance.get(`supplier/active`).then(response=>response.data)
export const providerPlaceOfProductionPostReq = (data)=>instance.post(`placeOfProduction`,data)
export const providerPlaceOfProductionUpdReq = (data,id)=>instance.put(`placeOfProduction/${id}`,data)

export const usersGetReq = (searchText,page)=>instance.get(`${searchText ?
    `client/search?firstName=${searchText}&page=${page}&size=20`
    : `client/?page=${page}&size=20`}`)
    .then(response=>response.data)
export const userGetByIdReq = (id)=>instance.get(`client/${id}`).then(response=>response.data)
export const userDelByIdReq = (id)=>instance.delete(`client/${id}`)
export const userUpdReq = (data,id)=>instance.put(`client/${id}`,data)




export const ordersGetReq = (searchText,page)=>instance.get(`${searchText ?
    `orders/search?name=${searchText}&page=${page}&size=20`
    : `orders?page=${page}&size=20`}`)
    .then(response=>response.data)
export const orderGetByIdReq = (id)=>instance.get(`orders/${id}`).then(response=>response.data)
export const orderPostReq = (data)=>instance.post('orders',data)
export const orderDelByIdReq = (id)=>instance.delete(`orders/${id}`)
export const orderUpdStatusReq = (data,id)=>instance.put(`orders/status/${id}?orderStatus=${data}`,data)

export const deliveryCashGetReq = ()=>instance.get(`orderSetting/1`).then(response=>response.data)
export const deliveryCashUpdReq = (data)=>instance.put(`orderSetting/1`,data)




export const faqGetReq = (searchText,page)=>instance.get(`${searchText ? `faq/search?question=${searchText}&page=${page}&size=20`
    : `faq/?page=${page}&size=20`}`)
    .then(response=>response.data)
export const faqGetByIdReq = (id)=>instance.get(`faq/${id}`).then(response=>response.data)
export const faqPostReq = (data)=>instance.post('faq',data)
export const faqDelByIdReq = (id)=>instance.delete(`faq/${id}`)
export const faqUpdReq = (data,id)=>instance.put(`faq/${id}`,data)

export const aboutUsGetReq = (searchText,page)=>instance.get(`${searchText ?
    `about/search?header=${searchText}&page=${page}&size=20`
    : `about/?page=${page}&size=20`}`)
    .then(response=>response.data)
export const aboutUsGetByIdReq = (id)=>instance.get(`about/${id}`).then(response=>response.data)
export const aboutUsPostReq = (data)=>instance.post('about',data)
export const aboutUsDelByIdReq = (id)=>instance.delete(`about/${id}`)
export const aboutUsUpdReq = (data,id)=>instance.put(`about/${id}`,data)