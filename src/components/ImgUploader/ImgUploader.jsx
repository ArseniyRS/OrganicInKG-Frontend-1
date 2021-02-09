import React, {useEffect, useState} from "react";
import './ImgUploader.css';
import {trashSVG, uploadBtnSVG} from '../../assets/icons'
import {useDropzone} from "react-dropzone";



const ImgUploader = ({setFieldValue,name,value=[],imageCount=1,fileTypes="image/jpeg ,image/gif, image/png, image/svg+xml, application/pdf"})=>{
    const [files,setFiles] = useState([])
    const [error,setError] = useState('')
    console.log(value)
    useEffect(()=>{
        setFieldValue(name,files)
    },[files])
    const randomNameGenerator = () => {
        let res = '';
        for(let i = 0; i < 10; i++){
            const random = Math.floor(Math.random() * 27);
            res += String.fromCharCode(97 + random);
        };
        return res;
    };
    const createFile= async (url)=>{
            let response = await fetch(typeof url === 'object' ? url.imgUrl : url);
            let data = await response.blob();
            let metadata = {type: data.type};
            let file = new File([data], randomNameGenerator(),metadata);
            await getBase64(file,(string)=> setFiles([...files,{file: file, data_url: string}]))
    }

    const loadFiles = async ()=>{
        if(typeof value === 'string' && value!==''){
            await createFile(value)
        }else if(Array.isArray(value) && value.length){
            value.map(async url=> await createFile(url))
        }
    }
    useEffect(()=>{
        loadFiles()
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
                         setFiles([...files,{file: file, data_url : string}])})})}
                else{
                    setError(`Загрузка файлов возможно только с типом: ${fileTypes}`)
                }
            }
        }
    });
    const deleteItem = index =>setFiles([...files.slice(0, index), ...files.slice(index + 1)])
    const thumbs = files.map((file,index) =>{
        return (
        <div  key={index} className={'upload__image-container'}>
            <div className="upload__image-item">
                <div className='upload__image-delete'><img src={trashSVG} onClick={()=>deleteItem(index)} alt=""/></div>
                {typeof file !== 'string' ?
                    file?.file?.type.match('image') || file?.Url ?
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
