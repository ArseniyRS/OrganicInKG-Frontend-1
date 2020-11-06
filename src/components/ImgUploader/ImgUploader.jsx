import { Upload, Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React,{useState} from "react";
import './ImgUploader.css';

function getBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });
}

const ImgUploader = ({setFieldValue,name,value})=>{
    const [imges,setImges] = useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [
            {
                uid: '-1',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-2',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-3',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-4',
                name: 'image.png',
                status: 'done',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-xxx',
                percent: 50,
                name: 'image.png',
                status: 'uploading',
                url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            },
            {
                uid: '-5',
                name: 'image.png',
                status: 'error',
            },
        ],
    })

    const handleCancel = () => setImges(imges.previewVisible= false);

    const handlePreview = async file => {
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }

        setImges({
            previewImage: file.url || file.preview,
            previewVisible: true,
            previewTitle: file.name || file.url.substring(file.url.lastIndexOf('/') + 1),
        });
    };

    const handleChange = ({ fileList }) => {
        console.log(fileList)
        setImges({ fileList });
        //const files = imges.map(item=>item.fileList.map(item=>item.url))
        //console.log(files)
        //setFieldValue(name,files)
    }

        const { previewVisible, previewImage, fileList, previewTitle } = imges;
        const uploadButton = (
            <div>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
            </div>)

        return (
            <>
                <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76" //upload url
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={handlePreview}
                    onChange={handleChange}
                >
                    {fileList.length >= 8 ? null : uploadButton}
                </Upload>
                <Modal
                    visible={previewVisible}
                    title={previewTitle}
                    footer={null}
                    onCancel={handleCancel}
                >
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </>
        )
}

export default ImgUploader