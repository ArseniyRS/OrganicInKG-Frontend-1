import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import {backSVG} from "../../assets/icons";
import EditBtn from "../Btns/EditBtn";
import CancelBtn from "../Btns/CancelBtn";






const CreateOrEditProductForm = (props)=>{

    let initialVals ={
            title: '',
            category: '',
            description: '',
            rate: '',
            sales_amount: '',

    }

    return(
        <div className='createOrEditContainer'>
            <div className={'createOrEditContainer__title'}><Link to={props.urlToTable}><img src={backSVG} alt=""/></Link> <h2>{props.loadData? "Редактирование товара": "Создание товара"}</h2></div>


        <Formik
            initialValues={initialVals}
            validationSchema={Yup.object({
                title: Yup.string(),


                category: Yup.string(),

                description: Yup.string(),

                rate: Yup.string(),
                sales_amount: Yup.string()


        })}
            onSubmit={(values)=>{
                props.submitHandler(values)
            }}
            >
        <Form>
            <div className="createOrEditField">
                <label htmlFor="title">Название</label>
                <Field name="title" placeholder="Клубника"/>
                <span  className='authError'><ErrorMessage name="title"/></span>
            </div>
            <div className="createOrEditField">
                <label htmlFor="category">Категория</label>
                <Field name="category" placeholder="Выберите категорию"/>
                <span  className='authError'><ErrorMessage name="category"/></span>
            </div>
            <div className="createOrEditField">
                <label htmlFor="description">Описание</label>
                <Field name="description" placeholder="Иссык-Кульская клубника..."/>
                <span  className='authError'><ErrorMessage name="description"/></span>
            </div>
            <div className="createOrEditField">
                <label htmlFor="rate">Рейтинг</label>
                <Field name="rate" placeholder="Рейтинг"/>
                <span  className='authError'><ErrorMessage name="rate"/></span>
            </div>
            <div className="createOrEditField">
                <label htmlFor="sales_amount">Количество продаж</label>
                <Field name="sales_amount" placeholder="Количество продаж"/>
                <span  className='authError'><ErrorMessage name="sales_amount"/></span>
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
export default CreateOrEditProductForm