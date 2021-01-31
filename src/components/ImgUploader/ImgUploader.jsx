import React, {useEffect, useState} from "react";
import './ImgUploader.css';
import {uploadBtnSVG} from '../../assets/icons'
import {useDropzone} from "react-dropzone";



const ImgUploader = ({setFieldValue,name,value,imageCount=1,fileTypes="image/jpeg ,image/gif, image/png, image/svg+xml, application/pdf"})=>{
    const [files,setFiles] = useState(value ? Array.isArray(value) ? value : [value] : [])
    const [error,setError] = useState('')
    console.log(files)
    useEffect(()=>{
        setFieldValue(name,files)
    },[files])
    async function createFile(url){
        let response = await fetch(url);
        let data = await response.blob();
        let metadata = {
            type: data.type
        };
        let file = new File([data], "test.jpg", metadata);
        setFiles(file)
    }
    useEffect(()=>{
        if(typeof value === 'string' || value[0].imgUrl){
            createFile(value)
        }
    },[])
    function getBase64(file, callback) {
      const reader = new FileReader();
      reader.addEventListener('load', () => callback(reader.result));
      reader.readAsDataURL(file);
    }



    const {getRootProps, getInputProps} = useDropzone({
        accept: fileTypes,
        onDrop: acceptedFiles => {
                if(files.length>=imageCount) {
                    setError(`Максимальное количество файлов: ${imageCount}`)
                    return
                }
            for(let type in fileTypes){
             if(type.split('application/') || type.split('image/')===acceptedFiles.type) {
                 acceptedFiles.map(file => {
                     getBase64(file,(string)=>{
                         setFiles([...files,{file: file, data_url : string}])
                     })
                 })
                 }
                else{
                    setError(`Загрузка файлов возможно только с типом: ${fileTypes}`)
                }
            }
        }
    });

    const thumbs = files.map((file,index) =>{
        return (
        <div  key={index} className={'upload__image-container'}>
            <div className="upload__image-item">
                {typeof file !== 'string' ?
                    file?.file?.type.match('image') || file?.
                        Url ?
                        <img src={file?.data_url ? file?.data_url : file?.imgUrl} alt=""/>
                        : file.file.type.match('application/pdf')
                        ? <span
                            className={'upload__file-itemText'}>{file.file.type.toUpperCase().split('APPLICATION/')}</span>
                        : <span></span>
                    : <img src={file} alt=""/>
                }
            </div>
        </div>
    )})

    return (
        <div className="upload__image-wrapper" onClick={()=>setError('')}>
            <div {...getRootProps({className : 'upload__image-uploadBtn'})}>
                <input {...getInputProps()} />
                <img src={uploadBtnSVG} alt=""/>
                Нажмите или перетащите файл, чтобы загрузить
            </div>
            <div className={'upload__image-container'}>
                {thumbs}
            </div>
            {error && <span className='formErrorMessage'>{error}</span>}
        </div>
    );
    }
 export default ImgUploader
