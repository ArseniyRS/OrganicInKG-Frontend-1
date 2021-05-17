import React, {useEffect} from 'react'
import {connect} from "react-redux";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {
    clearProvider, clearProviders,
    createProvider,
    deleteProvider, getProviderById,
    getProviders,
    updateProvider
} from "../../redux/reducers/providerReducer";
import {providerInputConfig} from "../../configs/Providers/inputFormConfig";
import {ProviderColumns} from "../../configs/Providers/tableColumnsConfig";
import {recordViewProviderConfig} from "../../configs/Providers/recordViewConfig";




const ProvidersPage = ({providers,providerById,getProviders,getProviderById,createProvider,updateProvider,deleteProvider,clearProvider,...props})=>{
    return(
        <PageRenderer
            pageUrl ={'providers'}
            pageTitle ={'Поставщики'}

            tableData={providers}
            tableColumnsConfig={ProviderColumns}

            recordViewTitlesConfig={recordViewProviderConfig}
            recordViewValuesConfig={{
                fullName: providerById?.fullName,
                phone: providerById?.phone,
                email:  providerById?.email,
                placeOfProduction:  <span>
                    {providerById?.placeOfProduction?.country}
                    <br/>
                        {providerById?.placeOfProduction?.region}
                        <br/>{providerById?.placeOfProduction?.city}<br/>
                            {providerById?.placeOfProduction?.street}
                        </span>,
                produces:  providerById?.produces,
                walletNumber:  providerById?.ewalletNumber,
                PASSPORT: providerById?.supplierFile?.filter(item=>item.supplierFileType==='PASSPORT' ? item.imgUrl : 'Нет фото/документа'),
                SERTIFICATE: providerById?.supplierFile?.filter(item=>item.supplierFileType==='SERTIFICATE' ? item.imgUrl : 'Нет фото/документа'),
                CONTRACT: providerById?.supplierFile?.filter(item=>item.supplierFileType==='CONTRACT' ? item.imgUrl : 'Нет фото/документа'),
                isActive:  providerById?.isActive
            }}
            creatorTitle={'Создание поставщика'}
            updaterTitle={'Редактирование поставщика'}
            formInputsConfig={providerInputConfig}
            creatorInitialFormValues={{
                fullName: '',
                phone: '',
                email: '',
                placeOfProduction: {},
                produces: '',
                walletNumber: '',
                PASSPORT: [],
                SERTIFICATE: [],
                CONTRACT: [],
                isActive: false

            }}
            updaterInitialFormValues={{
                fullName: providerById?.fullName,
                phone: providerById?.phone,
                email:  providerById?.email,
                placeOfProduction: {
                    id: providerById?.placeOfProduction?.id,
                    country: providerById?.placeOfProduction?.country,
                    city: providerById?.placeOfProduction?.city,
                    region: providerById?.placeOfProduction?.region,
                    street: providerById?.placeOfProduction?.street
                },
                produces:  providerById?.produces,
                walletNumber:  providerById?.ewalletNumber,
                PASSPORT: providerById?.supplierFile?.filter(item=>item.supplierFileType==='PASSPORT'),
                SERTIFICATE: providerById?.supplierFile?.filter(item=>item.supplierFileType==='SERTIFICATE'),
                CONTRACT: providerById?.supplierFile?.filter(item=>item.supplierFileType==='CONTRACT'),
                isActive:  providerById?.isActive
            }}
            getDataFunc={getProviders}
            valueById={providerById}
            getByIdFunc={getProviderById}
            createFunc={createProvider}
            updateFunc={updateProvider}
            clearFunc={clearProvider}
            deleteFunc={deleteProvider}
            isLoading={props.providerFetchLoader}
            hasData={props.hasProvider}
            clearTable = {props.clearProviders}

        />
    )
}
const mapStateToProps = state=>{
    return{
        providers: state.provider.providers,
        providerById: state.provider.providerById,
        providerFetchLoader: state.provider.providerFetchLoader,
        hasProvider: state.provider.hasProvider

    }
}

export  default  connect(mapStateToProps,
    {
        getProviders,
        getProviderById,
        createProvider,
        updateProvider,
        deleteProvider,
        clearProvider,clearProviders
    }
)(ProvidersPage)
