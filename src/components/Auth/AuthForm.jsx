import React from 'react'
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import PasswordInput from "../Inputs/PasswordInput/PasswordInput";
import PhoneInput from "../Inputs/PhoneInput/PhoneInput";



const AuthForm = (props)=>{
    return(
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
                console.log(values)
                props.submitHandler(values)
            }}
        >
            <Form>
                <Field name="login" placeholder="Логин">
                    {({field:{name},form: { setFieldValue}})=>  <PhoneInput setFieldValue={setFieldValue} name={name} />}
                </Field>
                <Field name="password" >
                    {({field:{name},form: { setFieldValue}})=> <PasswordInput setFieldValue={setFieldValue} name={name} placeholder="Пароль"/>}
                </Field>
                <button className={"auth__btn"} type={'submit'}>Войти</button>
            </Form>
        </Formik>
    )
}

export default AuthForm