import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {Link} from "react-router-dom";
import {backSVG} from "../../assets/icons";
import EditBtn from "../Btns/EditBtn";
import CancelBtn from "../Btns/CancelBtn";
import PasswordInput from "../PasswordInput/PasswordInput";
import SelectorInput from "../SelectorInput/SelectorInput";






const CreateOrEditProviderForm = (props)=>{
    let initialVals ={
        full_name: '',
        phone: '',
        email: '',
        address: '',
        product: '',
        passport_photo: '',
        sertif_photo: '',
        bank_number: ''
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
                        <label htmlFor="email">E-mail</label>
                        <Field name="email" placeholder="example@gmail.com"/>
                        <span  className='authError'><ErrorMessage name="email"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="address">Адрес</label>
                        <Field name="address" placeholder="">
                            {({field:{name,value},form: { setFieldValue}})=>{
                               return( <SelectorInput
                                    setFieldValue={setFieldValue}
                                    value={value}
                                    name={name}
                                    placeholder="Пароль"/>
                               )}}

                        </Field>
                        <span  className='authError'><ErrorMessage name="address"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="product">Товары</label>
                        <Field name="product" placeholder="Картошка,..."/>
                        <span  className='authError'><ErrorMessage name="product"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="passport_photo">Фото пасспорта</label>
                        <Field name="passport_photo" placeholder="+(999) 00-00-00"/>
                        <span  className='authError'><ErrorMessage name="passport_photo"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="sertif_photo">Фото сертификата</label>
                        <Field name="sertif_photo" />
                        <span  className='authError'><ErrorMessage name="sertif_photo"/></span>
                    </div>
                    <div className="createOrEditField">
                        <label htmlFor="bank_number">Банковский счет</label>
                        <Field name="bank_number" />
                        <span  className='authError'><ErrorMessage name="bank_number"/></span>
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
export default CreateOrEditProviderForm