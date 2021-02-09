import  React from 'react'
import {Link} from "react-router-dom";
import {backSVG} from "../../assets/icons";
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import EditBtn from "../Btns/EditBtn";
import CancelBtn from "../Btns/CancelBtn";




const ProfileForm = (props)=>{
    return(
        <div className='createOrEditContainer'>
            <div className={'createOrEditContainer__title'}><Link to={props.urlToBack}><img src={backSVG} alt=""/></Link> <h2>{"Редактирование профиля"}</h2></div>

            <Formik
                initialValues={{
                    firstName: props.profile?.firstName,
                    lastName: props.profile?.lastName,
                    middleName: props.profile?.middleName,
                    email: props.profile?.email
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string().nullable(),
                    lastName: Yup.string().nullable(),
                    middleName: Yup.string().nullable(),
                    email: Yup.string().nullable()
                })}
                onSubmit={(values)=>props.handleSubmit(values)}
            >
                {({handleSubmit,errors,values}) => {

                    return (
                        <Form>
                            <div className="createOrEditField">
                                <label htmlFor={'firstName'}>Имя
                                <Field name="firstName" placeholder="Виктория"/>
                                <span className='authError'><ErrorMessage name="firstName"/></span>
                                </label>
                            </div>
                            <div className="createOrEditField">
                                <label htmlFor={'lastName'}>Фамилия
                                <Field name="lastName" placeholder="Ансимова"/>
                                <span className='authError'><ErrorMessage name="lastName"/></span>
                                </label>
                            </div>
                            <div className="createOrEditField">
                                <label htmlFor={'middleName'}>Отчество
                                <Field name="middleName" placeholder="Викторовна"/>
                                <span className='authError'><ErrorMessage name="middleName"/></span>
                                </label>
                            </div>
                            <div className="createOrEditField">
                                <label htmlFor={'email'}>E-mail
                                    <Field name="email" placeholder="example.com"/>
                                    <span className='authError'><ErrorMessage name="email"/></span>
                                </label>
                            </div>

                            <div className={"createOrEditContainer__btns"}>
                                <EditBtn
                                    urlToTable={'providers'}
                                    confirmFunc={handleSubmit}
                                    disabled={Object.keys(errors).length !== 0 && true}
                                />
                                <CancelBtn
                                    urlToTable={'providers'}
                                />
                            </div>
                        </Form>
                    )
                }}
            </Formik>
        </div>
    )
}

export default ProfileForm;