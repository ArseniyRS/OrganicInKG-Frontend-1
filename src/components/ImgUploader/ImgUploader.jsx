import {Upload, Modal, Button,message} from 'antd';
import React, {useEffect, useState} from "react";
import './ImgUploader.css';
import ImageUploading from 'react-images-uploading';
import {uploadBtnSVG,editSVG,trashSVG} from '../../assets/icons'


const ImgUploader = ({setFieldValue,name,value,imageCount=1,fileTypes=['jpg', 'gif', 'png','svg']})=>{
    const [files,setFile] = useState(value ? Array.isArray(value) ? value : [value] : [])

    useEffect(()=>{
        setFieldValue(name,files)
    },[files])

    const onChange = (fileList) => setFile(fileList);

        return (
            <ImageUploading
                multiple
                value={files}
                onChange={onChange}
                maxNumber={imageCount}
                dataURLKey="data_url"
                acceptType={fileTypes}
            >
                {({
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,errors
                  }) => (
                    <div className="upload__image-wrapper">
                        <div
                            className={'upload__image-uploadBtn'}
                            style={isDragging ? { borderColor: '#009B00' } : undefined}
                            onClick={onImageUpload}
                            {...dragProps}
                        >
                            <img src={uploadBtnSVG} alt=""/>
                           Нажмите или перетащите файл, чтобы загрузить
                        </div>
                        <div className={'upload__image-container'}>
                            {
                        files.map((image, index) => (
                            <div key={index} className="upload__image-item">
                                <img src={image['data_url'] ? image['data_url'] : image} alt=""  />
                                <div className="image-item__btn-wrapper">
                                    <span><img src={editSVG} onClick={() => onImageUpdate(index)}/></span>
                                    <span><img src={trashSVG} onClick={() => onImageRemove(index)}/></span>
                                </div>
                            </div>
                        ))
                            }
                        </div>
                        {files.length!==0 && <div className={'upload__image-remove-allBtn'} onClick={onImageRemoveAll}>Удалить все файлы</div> }

                        {errors &&
                        <>
                            {errors.maxNumber &&
                            <span className='formErrorMessage'>{`Максимальное количество фото - ${imageCount}`}</span>}
                            {errors.acceptType && <span
                                className='formErrorMessage'>{`Этот тип файла не поддерживается. Загрузить можно (${fileTypes})`}</span>}
                        </>
                        }
                    </div>
                )}
            </ImageUploading>

        )
}

export default ImgUploader