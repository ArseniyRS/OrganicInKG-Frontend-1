import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import {backSVG} from "../../assets/icons";






const CreateOrEditProviderForm = (props)=>{
    let initialVals ={
        full_name: '',
        phone: '',
        status: '',

    }

    return(
        <div className='createOrEditContainer'>
            <div className={'createOrEditContainer__title'}><Link to={props.urlToTable}><img src={backSVG} alt=""/></Link><h2>{props.loadData? "Редактирование поставщика": "Создание поставщика"}</h2></div>


            <Formik
                initialValues={initialVals}
                validationSchema={Yup.object({
                    full_name: Yup.string(),


                    phone: Yup.string(),

                    status: Yup.string(),



                })}
                onSubmit={(values)=>{
                    props.submitHandler(values)
                }}
            >
                <Form>
                    <div className="createOrEditField">
                        <label htmlFor="full_name">Имя</label>
                        <Field name="full_name" placeholder="Анисимова Виктория Викторовна"/>
                        <span  className='authError'><ErrorMessage name="full_name"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="phone">Телефон</label>
                        <Field name="phone" placeholder="+(999) 00-00-00"/>
                        <span  className='authError'><ErrorMessage name="phone"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="status">Статус</label>
                        <Field name="status" />
                        <span  className='authError'><ErrorMessage name="status"/></span>
                    </div>

                    <button className='createOrEditBtn-submit' type='submit'>Сохранить</button>
                    <button className='createOrEditBtn-cancel'>Отмена</button>

                </Form>
            </Formik>
        </div>
    )
}
export default CreateOrEditProviderForm