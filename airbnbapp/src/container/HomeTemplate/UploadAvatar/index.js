import { PlusOutlined } from '@ant-design/icons';
import { Alert, Button, Modal, Upload } from 'antd';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actUploadAvatar } from './module/action';
import "./style.css"

export default function UploadAvatar() {
  const successMessage = useSelector(state => state.uploadAvatarReducer.data)
  const errorMessage = useSelector(state => state.uploadAvatarReducer.error)
  const dispatch = useDispatch()
  const [image, setImage] = useState({
    previewVisible: false,
    previewImage: '',
    fileList: [],
  })
  if (successMessage !== null) {
    return (
      <Alert 
        message="Thay đổi thành công" 
        type="success" 
        showIcon 
        style={{ marginTop: 20 }}
        closable
        afterClose={() => window.location.reload()}
      />

    )
  }
  if (errorMessage !== null) {
    return (
      <Alert 
        message={errorMessage} 
        type="error" 
        showIcon 
        style={{ marginTop: 20 }}
        closable
        afterClose={() => window.location.reload()}
      />
    )
  }

  const getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  
  const handleCancel = () => setImage({ previewVisible: false });

  const handlePreview = async file => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setImage({
      previewImage: file.url || file.preview,
      previewVisible: true,
    });
  };

  const handleUpload = ({ fileList }) => {
    setImage({ fileList });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let formData = new FormData();
    formData.append("avatar", image.fileList[0].originFileObj);  
    dispatch(actUploadAvatar(formData))
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div className="ant-upload-text">Upload</div>
    </div>
  )

  return (
    <div className='uploadAvatar'>
      <p>Chọn ảnh</p>
      <Upload
          listType="picture-card"
          fileList={image.fileList}
          onPreview={handlePreview}
          onChange={handleUpload}
          beforeUpload={() => false}
        >
          {uploadButton}
        </Upload>

        <Button onClick={handleSubmit} className="uploadButton">
            Submit
        </Button>

        <Modal
          visible={image.previewVisible}
          footer={null}
          onCancel={handleCancel}
        >
          <img alt="example" style={{ width: "100%" }} src={image.previewImage} />
        </Modal>
    </div >
  )
}
