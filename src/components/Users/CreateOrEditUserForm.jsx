import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {backSVG} from "../../assets/icons";
import {Link} from "react-router-dom";






const CreateOrEditUsersForm = (props)=>{

    let initialVals ={
        first_name: '',
        last_name: '',
        middle_name: '',
        email: '',


    }

    return(
        <div className='createOrEditContainer'>
           <div className={'createOrEditContainer__title'}><Link to={props.urlToTable}><img src={backSVG} alt=""/></Link> <h2>{props.loadData? "Редактирование пользователя": "Создание пользователя"}</h2></div>

            <Formik
                initialValues={initialVals}
                validationSchema={Yup.object({
                    first_name: Yup.string(),


                    last_name: Yup.string(),

                    middle_name: Yup.string(),

                    email: Yup.string(),


                })}
                onSubmit={(values)=>{
                    props.submitHandler(values)
                }}
            >
                <Form>
                    <div className="createOrEditField">
                        <label htmlFor="first_name">Имя</label>
                        <Field name="first_name" placeholder="Василий"/>
                        <span  className='authError'><ErrorMessage name="first_name"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="last_name">Фамилия</label>
                        <Field name="last_name" placeholder="Серов"/>
                        <span  className='authError'><ErrorMessage name="last_name"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="middle_name">Отчество</label>
                        <Field name="middle_name" placeholder="Николаевич"/>
                        <span  className='authError'><ErrorMessage name="middle_name"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="email">E-mail</label>
                        <Field name="email" placeholder="example@gmail.com"/>
                        <span  className='authError'><ErrorMessage name="email"/></span>
                    </div>


                    <button className='createOrEditBtn-submit' type='submit'>Сохранить</button>
                    <button className='createOrEditBtn-cancel'>Отмена</button>

                </Form>
            </Formik>
        </div>
    )
}
export default CreateOrEditUsersForm