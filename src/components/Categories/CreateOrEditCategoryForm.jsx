import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import {backSVG} from "../../assets/icons";
import EditBtn from "../Btns/EditBtn";
import CancelBtn from "../Btns/CancelBtn";






const CreateOrEditCategoryForm = (props)=>{
    let initialVals ={
        title: '',
        parent: '',
        description: '',

    }

    return(
        <div className='createOrEditContainer'>
            <div className={'createOrEditContainer__title'}><Link to={props.urlToTable}><img src={backSVG} alt=""/></Link><h2>{props.loadData? "Редактирование категории": "Создание категории"}</h2></div>


            <Formik
                initialValues={initialVals}
                validationSchema={Yup.object({
                    title: Yup.string(),


                    parent: Yup.string(),

                    description: Yup.string(),



                })}
                onSubmit={(values)=>{
                    props.submitHandler(values)
                }}
            >
                <Form>
                    <div className="createOrEditField">
                        <label htmlFor="title">Название</label>
                        <Field name="title" placeholder="Овощи"/>
                        <span  className='authError'><ErrorMessage name="title"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="parent">Вложен в</label>
                        <Field name="parent" placeholder="Органические"/>
                        <span  className='authError'><ErrorMessage name="parent"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="description">Описание</label>
                        <Field name="description" />
                        <span  className='authError'><ErrorMessage name="description"/></span>
                    </div>

                    {/*<button className='createOrEditBtn-submit' type='submit'>Сохранить</button>*/}
                    {/*<button className='createOrEditBtn-cancel'>Отмена</button>*/}
                    <EditBtn />
                    <CancelBtn />

                </Form>
            </Formik>
        </div>
    )
}
export default CreateOrEditCategoryForm