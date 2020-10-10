import React from 'react'
import {ErrorMessage, Field, Form, Formik} from "formik";
import * as Yup from "yup";
import { TimePicker } from 'antd';
import moment from 'moment'
import { Multiselect } from 'multiselect-react-dropdown';
import {
    clockSVG,
    companySVG,
    mailSVG,
    phoneSVG,
    locationSVG,
    userSVG,
    productSVG,
    webSVG, warehouseSVG, descriptionSVG, tagSVG
} from "../../assets/icons";


const CreateOrEditProviderForm = (props)=>{

    let initialVals
    if (props.loadData===1){
        initialVals={
            company: props.data.company,
            manager: props.data.manager,
            warehouse: props.data.warehouse,
            email: props.data.email,
            phone: props.data.phone,
            office: props.data.office,
            favorite: props.data.favorite,
            open: props.data.open,
            close: props.data.close,
            website: props.data.website,
            description: props.data.description,
            terms: props.data.terms,
            tags: props.data.tags
        }
    }else{
        initialVals={
            company: '',
            manager: '',
            warehouse: '',
            email: '',
            phone: '',
            office: '',
            favorite: false,
            open: '',
            close: '',
            website: '',
            description: '',
            terms: '',
            tags: []
        }
    }

    return(
        <div className='createOrEditUserForm'>
            <h2>{props.title}</h2>

        <Formik
            initialValues={initialVals}
            validationSchema={Yup.object({
                company: Yup.string()
               .required('Введите название компании'),

                manager: Yup.string()
                    .required('Введите имя менеджера'),
                warehouse: Yup.string()
                    .required('Склад, адрес склада'),
                phone: Yup.string(),
                email: Yup.string()
                .email('Невалидный email'),
                office: Yup.string(),
                favorite: Yup.bool(),
                site: Yup.string(),
                description: Yup.string(),
                terms: Yup.string(),
               tags: Yup.array().required('Укажите тег')

        })}
            onSubmit={(values)=>{
                const tags = values.tags.map(item=>item.id)
                values.tags=tags
                props.submitHandler(values)
            }}
            >
        <Form>
            <div className='divider'>
            <div className="authInput">
                <img src={companySVG} alt=""/>
                <Field name="company" placeholder="Компания"/>
                <span  className='authError'><ErrorMessage name="company"/></span>
            </div>
            <div className="authInput">
                <img src={mailSVG} alt=""/>
                <Field name="email" placeholder="E-mail"/>
                <span  className='authError'><ErrorMessage name="email"/></span>
            </div>
            <div className="authInput">
                <img src={phoneSVG} alt=""/>
                <Field name="phone" placeholder="Телефон"/>
                <span  className='authError'><ErrorMessage name="phone"/></span>
            </div>


            <div className="authInput">
                <img src={userSVG} alt=""/>
                <Field name="manager" placeholder="Менеджер"/>
                <span  className='authError'><ErrorMessage name="manager"/></span>
            </div>
            <div className="authInput">
                <img src={warehouseSVG} alt=""/>
                <Field name="warehouse" placeholder="Адрес склада"/>
                <span  className='authError'><ErrorMessage name="warehouse"/></span>
            </div>
            </div>
            <div className='divider'>
                <div className="authInput">
                    <img src={locationSVG} alt=""/>
                    <Field name="office" placeholder="Адрес офиса"/>
                    <span  className='authError'><ErrorMessage name="officer"/></span>
                </div>
                <div className="authInput">
                    <img src={clockSVG} alt=""/>
                    <Field name="open" >
                           {({field:{value,name},form: { setFieldValue}})=>{
                            const onChange = (time, timeString)=>setFieldValue(name,timeString)
                            return(
                                <TimePicker
                                    className='rangePicker'
                                    placeholder = {['Начало работы']}
                                    format={'HH:mm'}
                                    minuteStep={15}
                                    onChange={onChange}
                                    value={ value && moment(value,'HH:mm')}
                                />
                            )
                    }}
                    </Field>
                    <Field name="close" >
                        {({field:{value,name},form: { setFieldValue}})=>{
                            const onChange = (time, timeString)=>setFieldValue(name,timeString)
                            return(
                                <TimePicker
                                    className='rangePicker'
                                    placeholder = {['Конец работы']}
                                    format={'HH:mm'}
                                    minuteStep={15}
                                    onChange={onChange}
                                    value={value && moment(value,'HH:mm')}
                                />
                            )
                        }}
                    </Field>
                    <span  className='authError'><ErrorMessage name="open"/></span>

                </div>
                <div className="authInput">
                    <img src={webSVG} alt=""/>
                    <Field name="website" placeholder="Веб-сайт" />
                    <span  className='authError'><ErrorMessage name="website"/></span>
                </div>
                <div className="authInput">
                    <img src={descriptionSVG} alt=""/>
                    <Field component='textarea' name="description" placeholder="Описание"/>
                    <span  className='authError'><ErrorMessage name="description"/></span>
                </div>
                <div className="authInput">
                    <img src={productSVG} alt=""/>
                    <Field component='textarea' name="terms" placeholder="Условие отпуска товара"/>
                    <span  className='authError'><ErrorMessage name="terms"/></span>
                </div>
                <div className={'checkBoxInput'}>
                    <Field type='checkbox' name="favorite" />
                    <label htmlFor="favorite" >Избранность</label>
                    <span  className='authError'><ErrorMessage name="favorite"/></span>
                </div>
                <div className="authInput">
                    <img src={tagSVG} alt=""/>
                    <Field  name="tags" >
                   {({field:{value=[],name},form: { setFieldValue}})=>{
                          const style ={
                              multiselectContainer: {
                                  width: '100%',
                                  margin: '5px 0'
                              },
                              searchBox: { // To change search box element look
                                  border: 'none',
                                 padding: '0'
                    },
                        inputField: { // To change input field position or margin
                            background: '#F8F9FB',
                            margin: '0',
                            width: '100%',
                            height: '100%'

                        },
                        chips: { // To change css chips(Selected options)
                            background: '#F8F9FB',
                            color:'#212121'
                        },
                        optionContainer: {
                                  borderRadius:'none' // To change css for option container
                        },
                        option: { // To change css for dropdown options
                            color:'#000'
                        },

                        groupHeading: { // To chanage group heading style

                        }
                    }
                       const onChange = (selectedList,selectedItem)=>setFieldValue(name,selectedList)
                       const onRemove = (selectedList,removedItem)=>setFieldValue(name,selectedList)
                        return(
                        <Multiselect
                        options={props.tags}
                        selectedValues={value}
                        onSelect = {onChange}
                        onRemove={onRemove}
                        displayValue = {"title"}
                        placeholder="Набор тегов"
                        style={style}
                        closeIcon={'cancel'}
                        />
                        )
                    }}
                    </Field>
                    <span  className='authError'><ErrorMessage name="tags"/></span>
                </div>
            </div>
            <button className='authBtn' type='submit'>Сохранить</button>
        </Form>
        </Formik>
        </div>
    )
}
export default CreateOrEditProviderForm