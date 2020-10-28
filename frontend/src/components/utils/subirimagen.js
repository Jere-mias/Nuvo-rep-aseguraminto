//importamos las libreiras necesarias para este modulo
import React, { useState } from 'react'
import Dropzone from 'react-dropzone';
import { Icon } from 'antd';
import Axios from 'axios';
function FileUpload(props) {
    const [Images, setImages] = useState([])
    const onDrop = (files) => {

        let formData = new FormData();
        const config = {
            header: { 'content-type': 'multipart/form-data' }
        }
        //instaniasmo el tipo de archivo
        formData.append("file", files[0])
        //guardamos la img en el backend
        Axios.post('/api/product/uploadImage', formData, config)
            .then(response => {
                if (response.data.success) {

                    setImages([...Images, response.data.image])
                    props.refreshFunction([...Images, response.data.image])

                } else {
                    alert('Hubo un error en subir la imgaen')
                }
            })
    }


    const onDelete = (image) => {
        const currentIndex = Images.indexOf(image);

        let newImages = [...Images]
        newImages.splice(currentIndex, 1)

        setImages(newImages)
        props.refreshFunction(newImages)
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {/* zona donde elegimos la imagen a subir mendiate la libreria dropzone */}
            <Dropzone
                onDrop={onDrop}
                multiple={false}
                maxSize={800000000} >
                
                {({ getRootProps, getInputProps }) => (
                    <div style={{
                        width: '100px', height: '100px', border: '1px solid lightgray',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    }}
                        {...getRootProps()}>
                        {console.log('getRootProps', { ...getRootProps() })}
                        {console.log('getInputProps', { ...getInputProps() })}
                        <input {...getInputProps()} />
                        <Icon type="folder-add" style={{ fontSize: 50, marginBottom: 3, }} className="btn btn-primary" />
                    </div>
                    
                )}
            </Dropzone>
            <Icon type="retweet" style={{ fontSize: 50, marginBottom: 3, }} className="btn btn-primary" />
            <div style={{ display: 'flex', width: '200px', height: '150px', overflowX: 'scroll'}}>
                {Images.map((image, index) => (
                    <div onClick={() => onDelete(image)}>
                        <img style={{ minWidth: '180px', width: '180px', height: '130px' }} src={`http://localhost:5000/${image}`} alt={`productImg-${index}`} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default FileUpload
