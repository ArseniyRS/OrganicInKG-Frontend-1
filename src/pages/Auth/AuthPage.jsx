import React, {InputHTMLAttributes, useEffect, useRef} from 'react'
import './AuthPage.css'
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
const AuthPage = ()=>{


    return(
        <div className='auth__container'>
           <div className="auth__block">
               <div className="auth__title">Авторизация</div>
               <Formik
                   initialValues={{
                       login:'',
                       password: ''
                   }}
                   validationSchema={Yup.object({
                       login: Yup.string().required(),


                       password: Yup.string().required(),



                   })}
                   onSubmit={(values)=>{
                   }}
               >
                   <Form>
                       <Field name="login" placeholder="Логин"/>
                       <Field name="password" >
                           {({field:{name},form: { setFieldValue}})=> <PasswordInput setFieldValue={setFieldValue} name={name} placeholder="Пароль"/>}

                       </Field>
                        <button className={"auth__btn"} type={'submit'}>Войти</button>
                   </Form>
               </Formik>
           </div>
        </div>

    )
}

export  default  AuthPage