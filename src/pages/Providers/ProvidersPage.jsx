import React, {useEffect} from 'react'
import {connect} from "react-redux";
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {
    clearProvider,
    createProvider,
    deleteProvider, getProviderById,
    getProviders,
    updateProvider
} from "../../redux/reducers/providerReducer";
import {providerInputConfig} from "../../configs/Providers/inputFormConfig";
import {ProviderColumns} from "../../configs/Providers/tableColumnsConfig";
import {recordViewProviderConfig} from "../../configs/Providers/recordViewConfig";




const ProvidersPage = ({providers,providerById,getProviders,getProviderById,createProvider,updateProvider,deleteProvider,clearProvider})=>{
    return(
        <PageRenderer
            pageUrl ={'providers'}
            pageTitle ={'Поставщики'}

            tableData={providers}
            tableColumnsConfig={ProviderColumns}

            recordViewTitlesConfig={recordViewProviderConfig}

            creatorTitle={'Создание поставщика'}
            updaterTitle={'Редактирование поставщика'}
            formInputsConfig={providerInputConfig}
            //optionsForSelectorData={providers}
           // loadSelectorData={}
            creatorInitialFormValues={{
                fullName: '',
                phone: '',
                email: '',
                placeOfProduction: '',
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
                placeOfProduction:  providerById?.placeOfProduction,
                produces:  providerById?.produces,
                walletNumber:  providerById?.ewalletNumber,
                PASSPORT: [],
                SERTIFICATE: [],
                CONTRACT: [],
                isActive:  providerById?.isActive
            }}
            getDataFunc={getProviders}
            valueById={providerById}
            getByIdFunc={getProviderById}
            createFunc={createProvider}
            updateFunc={updateProvider}
            clearFunc={clearProvider}
            deleteFunc={deleteProvider}

        />
    )
}
const mapStateToProps = state=>{
    return{
        providers: state.provider.providers,
        providerById: state.provider.providerById
    }
}

export  default  connect(mapStateToProps,
    {
        getProviders,
        getProviderById,
        createProvider,
        updateProvider,
        deleteProvider,
        clearProvider
    }
)(ProvidersPage)
