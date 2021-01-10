import {providerImgPostReq} from "../api/Request";


export const formDataProviderTemplate = async (id,data,key)=>{
    console.log(data[key])
    const formData = new FormData()
    formData.append('supplierId', id)
    formData.append('supplierFileType', key)
    data[key].map(item=>formData.append('images',item.file))
    await providerImgPostReq(formData)
}