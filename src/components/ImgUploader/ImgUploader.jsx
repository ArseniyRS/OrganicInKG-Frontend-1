import {Upload, Modal, Button,message} from 'antd';
import React, {useEffect, useState} from "react";
import './ImgUploader.css';
import UploadOutlined from "@ant-design/icons/lib/icons/UploadOutlined";



const ImgUploader = ({setFieldValue,name,value})=>{
    const [file,setFile] = useState([])

    useEffect(()=>{
        setFieldValue(name,file)
    },[file])

    const onChange = (e) => setFile([...file,e.target.files[0]]);

    function beforeUpload(file) {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error('You can only upload JPG/PNG file!');
        }
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            message.error('Image must smaller than 2MB!');
        }
        return isJpgOrPng && isLt2M;
    }
   console.log(file)
        return (
            <input type="file" multiple  onChange  = {onChange}/>
            // <Upload
            //     listType="picture"
            //     className="picture-card"
            //     onChange  = {onChange}
            //     beforeUpload={beforeUpload}
            //
            // >
            //     <div>
            //         <UploadOutlined /> Click to Upload
            //     </div>
            // </Upload>

        )
}

export default ImgUploader