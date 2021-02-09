import React from 'react'
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {connect} from "react-redux";
import {
    clearAboutUs,
    createAboutUs,
    deleteAboutUs,
    getAboutUs,
    getAboutUsById,
    updateAboutUs
} from "../../redux/reducers/aboutUsReducer";
import {aboutUsInputConfig} from "../../configs/AboutUs/inputFormConfig";
import {AboutUsColumns} from "../../configs/AboutUs/tableColumnsConfig";
import {recordViewAboutUsConfig} from "../../configs/AboutUs/recordViewConfig";


const AboutUsPage = props=>{

    return(
        <PageRenderer
            pageUrl ={'aboutus'}
            pageTitle ={'О нас'}

            tableData={props.aboutUs}
            tableColumnsConfig={AboutUsColumns}

            recordViewTitlesConfig={recordViewAboutUsConfig}

            creatorTitle={'Создание параграфа "О нас"'}
            updaterTitle={'Редактирование параграфа "О нас"'}
            formInputsConfig={aboutUsInputConfig}
            creatorInitialFormValues={{
                header: '',
                paragraph: '',
                order: ''
            }}
            updaterInitialFormValues={{

                header: props.aboutUsById?.header,
                paragraph: props.aboutUsById?.paragraph,
                order: props.aboutUsById?.order

            }}
            getDataFunc={props.getAboutUs}
            valueById={props.aboutUsById}
            getByIdFunc={props.getAboutUsById}
            createFunc={props.createAboutUs}
            updateFunc={props.updateAboutUs}
            deleteFunc={props.deleteAboutUs}
            clearFunc={props.clearAboutUs}
            hasData={props.hasAbout}
            isLoading={props.aboutFetchLoader}
        />
    )
}
const mapStateToProps = state=>{
    return{
        aboutUs: state.aboutUs.aboutUs,
        aboutUsById: state.aboutUs.aboutUsById,
        aboutFetchLoader: state.aboutUs.aboutFetchLoader,
        hasAbout: state.aboutUs.hasAbout
    }
}
export  default  connect(mapStateToProps,
    {
        getAboutUs,
        getAboutUsById,
        createAboutUs,
        updateAboutUs,
        deleteAboutUs,
        clearAboutUs
    }
)(AboutUsPage)
