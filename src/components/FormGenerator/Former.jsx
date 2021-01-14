import React from 'react'
import {ErrorMessage, Field, Form, Formik, useFormikContext} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import {backSVG} from "../../assets/icons";
import EditBtn from "../Btns/EditBtn";
import CancelBtn from "../Btns/CancelBtn";
import FormInput from "./FormInput";
import {validationGenerator} from "./validationGenerator";




const Former = (props)=>{
    const inputs = Object.keys(props.initialVals).map((item,index)=>{
        return(
            <FormInput
                key={item}
                name={item}
                placeholder={props.inputConfig[index]?.placeholder}
                label={props.inputConfig[index]?.label}
                type={props.inputConfig[index]?.type}
                selectInputData={props.inputConfig[index]?.selectInputData}
                options={props.optionsForSelector}
                selectorProperty={props.inputConfig[index]?.selectorProperty}
                fileTypes={props.inputConfig[index]?.fileTypes}
                imageCount={props.inputConfig[index]?.imageCount}
            />
        )
    })
    const array= Object.keys(props.initialVals)
    const schema = validationGenerator(array,props.inputConfig)
    return(
        <div className='createOrEditContainer'>
            <div className={'createOrEditContainer__title'}>
                <Link to={props.urlToTable}><img src={backSVG} alt=""/></Link>
                <h2>{props.formTitle}</h2>
            </div>
            <Formik
                initialValues={props.initialVals}
                validationSchema={Yup.object(schema)}
                onSubmit={ async (values)=>{
                  await props.handleSubmit(values)
                }}
            >
                {({handleSubmit,errors,values}) =>{

                    return (
                    <Form>
                        {inputs}
                        <div className={"createOrEditContainer__btns"}>
                            <EditBtn
                                    values = {values}
                                    urlToTable={props.urlToTable}
                                    confirmFunc={handleSubmit}
                                    disabled={Object.keys(errors).length !== 0 && true}
                                />

                        <CancelBtn urlToTable={props.urlToTable}/>
                        </div>
                    </Form>
                )}}

            </Formik>
        </div>
    )
}
export default Former