import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import {backSVG} from "../../assets/icons";
import EditBtn from "../Btns/EditBtn";
import CancelBtn from "../Btns/CancelBtn";






const CreateOrEditOrdersForm = (props)=>{

    let initialVals ={
        product: '',
        amount: '',
        total: '',
        delivery_address: ''
    }

    return(
        <div className='createOrEditContainer'>

            <div className={'createOrEditContainer__title'}><Link to={props.urlToTable}><img src={backSVG} alt=""/></Link> <h2>{props.loadData? "Редактирование заказа": "Создание заказа"}</h2></div>

            <Formik
                initialValues={initialVals}
                validationSchema={Yup.object({
                    product: Yup.string(),


                    amount: Yup.string(),

                    total: Yup.string(),
                    delivery_address: Yup.string()


                })}
                onSubmit={(values)=>{
                    props.submitHandler(values)
                }}
            >
                <Form>
                    <div className="createOrEditField">
                        <label htmlFor="product">Товары</label>
                        <Field name="product" placeholder="Клубника, картофель"/>
                        <span  className='authError'><ErrorMessage name="product"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="amount">Количество</label>
                        <Field name="amount" placeholder="50кг"/>
                        <span  className='authError'><ErrorMessage name="amount"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="total">Цена</label>
                        <Field name="total" placeholder="1400"/>
                        <span  className='authError'><ErrorMessage name="total"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="delivery_address">Адрес доставки</label>
                        <Field name="delivery_address" placeholder="Бишкек..."/>
                        <span  className='authError'><ErrorMessage name="delivery_address"/></span>
                    </div>
                    <EditBtn />
                    <CancelBtn />
                    {/*<button className='createOrEditBtn-submit' type='submit'>Сохранить</button>*/}
                    {/*<button className='createOrEditBtn-cancel'>Отмена</button>*/}

                </Form>
            </Formik>

        </div>
    )
}
export default CreateOrEditOrdersForm