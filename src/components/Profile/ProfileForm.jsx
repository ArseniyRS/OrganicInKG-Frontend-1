import  React from 'react'
import {Link} from "react-router-dom";
import {backSVG} from "../../assets/icons";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import EditBtn from "../Btns/EditBtn";
import CancelBtn from "../Btns/CancelBtn";
import PasswordInput from "../PasswordInput/PasswordInput";




const ProfileForm = (props)=>{
    return(
        <div className='createOrEditContainer'>
            <div className={'createOrEditContainer__title'}><Link to={props.urlToBack}><img src={backSVG} alt=""/></Link> <h2>{"Редактирование профиля"}</h2></div>

            <Formik
                initialValues={{
                    name: '',
                    password: '',
                    new_password: ''
                }}
                validationSchema={Yup.object({
                    name: Yup.string(),


                    password: Yup.string(),

                    new_password: Yup.string(),



                })}
                onSubmit={(values)=>{
                }}
            >
                <Form>
                    <div className="createOrEditField">

                        <Field name="name" placeholder="Имя"/>
                        <span  className='authError'><ErrorMessage name="name"/></span>
                    </div>
                    <div className="createOrEditField">

                        <Field name="password" >
                            {({field:{name},form: { setFieldValue}})=> <PasswordInput setFieldValue={setFieldValue} name={name} placeholder={"Старый пароль"}/>}

                        </Field>
                        <span  className='authError'><ErrorMessage name="password"/></span>
                    </div>
                    <div className="createOrEditField">

                        <Field name="new_password" >
                            {({field:{name},form: { setFieldValue}})=> <PasswordInput setFieldValue={setFieldValue} name={name} placeholder={"Новый пароль"}/>}

                        </Field>
                        <span  className='authError'><ErrorMessage name="new_password"/></span>
                    </div>




                    <EditBtn />
                    <CancelBtn />
                </Form>
            </Formik>
        </div>
    )
}

export default ProfileForm;