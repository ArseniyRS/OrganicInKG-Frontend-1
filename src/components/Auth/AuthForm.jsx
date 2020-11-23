import React from 'react'
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import PasswordInput from "../Inputs/PasswordInput/PasswordInput";
import PhoneInput from "../Inputs/PhoneInput/PhoneInput";
import {connect} from "react-redux";
import ErrorMsg from "../Modals/ErrorMessage";
import {writeAuthMessage} from "../../redux/reducers/mainReducer";



const AuthForm = (props)=>{
    return(
        <Formik
            initialValues={{
                username:'',
                password: ''
            }}
            validationSchema={Yup.object({
                username: Yup.string().required(),
                password: Yup.string().required(),
            })}
            onSubmit={(values)=>props.submitHandler(values)}
        >
            <Form
                onClick={()=>props.writeAuthMessage('')}
            >
                <Field name="username" placeholder="Логин">
                    {({field:{name},form: { setFieldValue}})=>  <PhoneInput setFieldValue={setFieldValue} name={name} />}
                </Field>
                <Field name="password" >
                    {({field:{name},form: { setFieldValue}})=> <PasswordInput setFieldValue={setFieldValue} name={name} placeholder="Пароль"/>}
                </Field>
                <button className={"auth__btn"} type={'submit'}>Войти</button>
                {props.authErrorMessage && <ErrorMsg text={props.authErrorMessage}/>}
            </Form>
        </Formik>
    )
}
const mapStateToProps = state=>{
    return{
        authErrorMessage: state.main.authErrorMessage
    }
}
export default connect(mapStateToProps,{writeAuthMessage})(AuthForm)