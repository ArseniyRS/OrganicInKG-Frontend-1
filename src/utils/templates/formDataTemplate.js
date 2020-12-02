import {providerImgPostReq} from "../api/Request";


export const formDataProviderTemplate = async (id,data,key)=>{
    const formData = new FormData()
    formData.append('supplierId', id)
    formData.append('supplierFileType', key)
    data[key].map(item=>formData.append('images',item))
    await providerImgPostReq(formData)
}