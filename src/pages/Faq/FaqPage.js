import React from 'react'
import PageRenderer from "../../components/PageRenderer/PageRendererContainer";
import {clearFaq, createFaq, deleteFaq, getFaq, getFaqById, updateFaq} from "../../redux/reducers/faqReducer";
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
        />
    )
}
const mapStateToProps = state=>{
    return{
        faq: state.faq.faq,
        faqById: state.faq.faqById
    }
}
export  default  connect(mapStateToProps,
    {
        getFaq,
        getFaqById,
        createFaq,
        updateFaq,
        deleteFaq,
        clearFaq
    }
)(FaqPage)
