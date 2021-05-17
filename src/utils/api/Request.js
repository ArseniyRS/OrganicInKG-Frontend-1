
import * as axios from 'axios'
const tokenGetter = ()=>{ return { headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} }}
const instance = axios.create({
    //baseURL: 'https://organicinkg.net:8443/api/v1/',
    baseURL: 'http://localhost:8444/api/v1/',
})
export const authReq = (data)=>instance.post('auth',data).then(response=>response.data)
export const authRefreshReq = (data)=>instance.post('refresh',data).then(response=>response.data)


export const categoryGetByIdReq = (id)=>instance.get(`categories/${id}`).then(response=>response.data)
export const categoryPostReq = (data)=>instance.post('categories',data,tokenGetter())
export const categoryDelByIdReq = (id)=>instance.delete(`categories/${id}`,tokenGetter())
export const categoryUpdReq = (data,id)=>instance.put(`categories/${id}`,data,tokenGetter())
export const categoryGetSearchReq = (searchText,page)=>instance.get(`${searchText ? 
    `categories/search?name=${searchText}&page=${page}&size=20` 
    : `categories?page=${page}&size=20`}`)
    .then(response=>response.data)


export const productsGetReq = (searchText,page)=>instance.get(`${searchText ?
    `products/like?prodName=${searchText}&page=${page}&size=20`
    : `products?page=${page}&size=20`}`)
    .then(response=>response.data)
export const productGetByIdReq = (id)=>instance.get(`products/${id}`).then(response=>response.data)
export const productPostReq = (data)=>instance.post('products',data,tokenGetter())
export const productDelByIdReq = (id)=>instance.delete(`products/${id}`,tokenGetter())
export const productUpdReq = (data,id)=>instance.put(`products/${id}`,data,tokenGetter())

export const productImgPostReq = (data)=>instance.post(`productImages`,data,
    {headers: { 'content-type': 'multipart/form-data',"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`}})
export const productImgUpdReq = (data,id)=> instance.put(`productImages/${id}`,data, {headers: { 'content-type': 'multipart/form-data',"Authorization" : `Bearer ${localStorage.getItem('accessToken')}` }})

export const measureUnitGetReq = ()=>instance.get(`measureUnit`,tokenGetter()).then(response=>response.data)


export const providersGetReq = (searchText,page)=>instance.get(`${searchText ?
    `supplier/search?name=${searchText}&page=${page}&size=20`
    : `supplier?page=${page}&size=20`}`,tokenGetter())
    .then(response=>response.data)
export const providerGetByIdReq = (id)=>instance.get(`supplier/${id}`,tokenGetter()).then(response=>response.data)
export const providerPostReq = (data)=>instance.post('supplier',data,tokenGetter())
export const providerImgPostReq = (data)=> instance.post('supplierFile',data,tokenGetter())
export const providerDelByIdReq = (id)=>instance.delete(`supplier/${id}`,tokenGetter())
export const providerUpdReq = (data,id)=>instance.put(`supplier/${id}`,data,tokenGetter())
export const providerActiveGetReq = ()=>instance.get(`supplier/active`,tokenGetter()).then(response=>response.data)
export const providerPlaceOfProductionPostReq = (data)=>instance.post(`placeOfProduction`,data,tokenGetter())
export const providerPlaceOfProductionUpdReq = (data,id)=>instance.put(`placeOfProduction/${id}`,data,tokenGetter())

export const usersGetReq = (searchText,page)=>instance.get(`${searchText ?
    `client/search?firstName=${searchText}&page=${page}&size=20`
    : `client/?page=${page}&size=20`}`,tokenGetter())
    .then(response=>response.data)
export const userGetByIdReq = (id)=>instance.get(`client/${id}`,tokenGetter()).then(response=>response.data)
export const userDelByIdReq = (id)=>instance.delete(`client/${id}`,tokenGetter())
export const userUpdReq = (data,id)=>instance.put(`client/${id}`,data,tokenGetter())




export const ordersGetReq = (searchText,page)=>instance.get(`${searchText ?
    `orders/search?name=${searchText}&page=${page}&size=20`
    : `orders?page=${page}&size=20`}`,tokenGetter())
    .then(response=>response.data)
export const orderGetByIdReq = (id)=>instance.get(`orders/${id}`,tokenGetter()).then(response=>response.data)
export const orderPostReq = (data)=>instance.post('orders',data,tokenGetter())
export const orderDelByIdReq = (id)=>instance.delete(`orders/${id}`,tokenGetter())
export const orderUpdStatusReq = (data,id)=>instance.put(`orders/status/${id}?orderStatus=${data}`,data)

export const deliveryCashGetReq = ()=>instance.get(`orderSetting/1`,tokenGetter()).then(response=>response.data)
export const deliveryCashUpdReq = (data)=>instance.put(`orderSetting/1`,data,tokenGetter())




export const faqGetReq = (searchText,page)=>instance.get(`${searchText ? `faq/search?question=${searchText}&page=${page}&size=20`
    : `faq/?page=${page}&size=20`}`)
    .then(response=>response.data)
export const faqGetByIdReq = (id)=>instance.get(`faq/${id}`).then(response=>response.data)
export const faqPostReq = (data)=>instance.post('faq',data,tokenGetter())
export const faqDelByIdReq = (id)=>instance.delete(`faq/${id}`,tokenGetter())
export const faqUpdReq = (data,id)=>instance.put(`faq/${id}`,data,tokenGetter())

export const aboutUsGetReq = (searchText,page)=>instance.get(`${searchText ?
    `about/search?header=${searchText}&page=${page}&size=20`
    : `about/?page=${page}&size=20`}`)
    .then(response=>response.data)
export const aboutUsGetByIdReq = (id)=>instance.get(`about/${id}`).then(response=>response.data)
export const aboutUsPostReq = (data)=>instance.post('about',data,tokenGetter())
export const aboutUsDelByIdReq = (id)=>instance.delete(`about/${id}`,tokenGetter())
export const aboutUsUpdReq = (data,id)=>instance.put(`about/${id}`,data,tokenGetter())