import React from 'react'
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {
    clearFaq,
    clearFaqs,
    createFaq,
    deleteFaq,
    getFaq,
    getFaqById,
    updateFaq
} from "../../redux/reducers/faqReducer";
import {connect} from "react-redux";
import {faqInputConfig} from "../../configs/Faq/inputFormConfig";
import {FaqColumns} from "../../configs/Faq/tableColumnsConfig";
import {recordViewFaqConfig} from "../../configs/Faq/recordViewConfig";


const FaqPage = props=>{
    return(
        <PageRenderer
            pageUrl ={'faq'}
            pageTitle ={'FAQ'}

            tableData={props.faq}
            tableColumnsConfig={FaqColumns}

            recordViewTitlesConfig={recordViewFaqConfig}

            creatorTitle={'Создание вопроса-ответа'}
            updaterTitle={'Редактирование вопроса-ответа'}
            formInputsConfig={faqInputConfig}
            creatorInitialFormValues={{
                question: "",
                answer: "",
                order: ""

            }}
            updaterInitialFormValues={{
                question: props.faqById?.question,
                answer: props.faqById?.answer,
                order: props.faqById?.order

            }}
            getDataFunc={props.getFaq}
            valueById={props.faqById}
            getByIdFunc={props.getFaqById}
            createFunc={props.createFaq}
            updateFunc={props.updateFaq}
            deleteFunc={props.deleteFaq}
            clearFunc={props.clearFaq}
            isLoading={props.faqFetchLoader}
            hasData={props.hasFaq}
            clearTable = {props.clearFaqs}
        />
    )
}
const mapStateToProps = state=>{
    return{
        faq: state.faq.faq,
        faqById: state.faq.faqById,
        faqFetchLoader: state.faq.faqFetchLoader,
        hasFaq: state.faq.hasFaq
    }
}
export  default  connect(mapStateToProps,
    {
        getFaq,
        getFaqById,
        createFaq,
        updateFaq,
        deleteFaq,
        clearFaq,clearFaqs
    }
)(FaqPage)
