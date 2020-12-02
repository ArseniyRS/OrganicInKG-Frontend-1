import {Upload, Modal, Button,message} from 'antd';
import React, {useEffect, useState} from "react";
import './ImgUploader.css';
import ImageUploading from 'react-images-uploading';
import {uploadBtnSVG,editSVG,trashSVG} from '../../assets/icons'


const ImgUploader = ({setFieldValue,name,value})=>{
    const [files,setFile] = useState(value ? value : [])

    useEffect(()=>{
        setFieldValue(name,files)
    },[files])

    const onChange = (fileList) => setFile(fileList);

    console.log(files)
    // function beforeUpload(file) {
    //     const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
    //     if (!isJpgOrPng) {
    //         message.error('You can only upload JPG/PNG file!');
    //     }
    //     const isLt2M = file.size / 1024 / 1024 < 2;
    //     if (!isLt2M) {
    //         message.error('Image must smaller than 2MB!');
    //     }
    //     return isJpgOrPng && isLt2M;
    // }
        return (
            <ImageUploading
                multiple
                value={files}
                onChange={onChange}
                maxNumber={4}
                dataURLKey="data_url"
            >
                {({
                      onImageUpload,
                      onImageRemoveAll,
                      onImageUpdate,
                      onImageRemove,
                      isDragging,
                      dragProps,
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
                        {files.map((image, index) => (
                            <div key={index} className="upload__image-item">
                                <img src={image['data_url'] ? image['data_url'] : image} alt=""  />
                                <div className="image-item__btn-wrapper">
                                    <span><img src={editSVG} onClick={() => onImageUpdate(index)}/></span>
                                    <span><img src={trashSVG} onClick={() => onImageRemove(index)}/></span>
                                </div>
                            </div>
                        ))}
                        </div>
                        {files.length!==0 && <div className={'upload__image-remove-allBtn'} onClick={onImageRemoveAll}>Удалить все файлы</div> }
                    </div>
                )}
            </ImageUploading>

        )
}

export default ImgUploader