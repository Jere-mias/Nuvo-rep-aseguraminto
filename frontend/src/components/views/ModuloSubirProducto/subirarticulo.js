//importamos las librerias necesarias para este modulo
import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import FileUpload from '../../utils/subirimagen'
import Axios from 'axios';

const { title } = Typography;
const { TextArea } = Input;
//categorias disponibles
const categorias = [
    { key: 1, value: "Samsung" },
    { key: 2, value: "Dell" },
    { key: 3, value: "Toshiba" },
    { key: 4, value: "Mac" },
    { key: 5, value: "Compac" },
    { key: 6, value: "Sony" },
    { key: 7, value: "Php" }
]

function UploadProductPage(props) {

    const [titleValue, settitleValue] = useState("")
    const [DescriptionValue, setDescriptionValue] = useState("")
    const [precioValue, setprecioValue] = useState(0)
    const [ContinentValue, setContinentValue] = useState(1)

    const [Images, setImages] = useState([])


    const ontitleChange = (event) => {
        settitleValue(event.currentTarget.value)
    }

    const onDescriptionChange = (event) => {
        setDescriptionValue(event.currentTarget.value)
    }

    const onprecioChange = (event) => {
        setprecioValue(event.currentTarget.value)
    }

    const oncategoriasSelectChange = (event) => {
        setContinentValue(event.currentTarget.value)
    }

    const updateImages = (newImages) => {
        setImages(newImages)
    }
    const onSubmit = (event) => {
        event.preventDefault();

//si los campos no estan llenos mostrar este mensaje
        if (!titleValue || !DescriptionValue || !precioValue ||
            !ContinentValue || !Images) {
            return alert('llena todos los campos primero!')
        }
        const variables = {
            writer: props.user.userData._id,
            title: titleValue,
            description: DescriptionValue,
            precio: precioValue,
            images: Images,
            categorias: ContinentValue,
        }
//seccion de advertencias  si se guardo o no el articulo deseado
        Axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('Se guardo el articulo satisfactorimente')
                    props.history.push('/')
                } else {
                    alert('Erron al guardat este articulo')
                }
            })

    }
//seccion del formulario para subir un nuevo articulo
    return (
        <div style={{ maxWidth: '400px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <title level={2}> Subir un Articulo</title>
            </div>


            <Form onSubmit={onSubmit} >

                {/* aca es donde elegimos la imgaen del articulo */}
                <FileUpload refreshFunction={updateImages} />

                <br />
                <br />
                {/* aca es donde elegimos las demas caracteristicas del producto */}
                <label>title del Producto: </label>
                <Input
                    onChange={ontitleChange}
                    value={titleValue}
                />
                <br />
                <br />
                <label>Descripcion del Producto: </label>
                <TextArea
                    onChange={onDescriptionChange}
                    value={DescriptionValue}
                />
                <br />
                <br />
                <label>precio Q: </label>
                <Input
                    onChange={onprecioChange}
                    value={precioValue}
                    type="number"
                />
                <br /><br />
                <label>Seleccione una Categoria:    </label>
                <select onChange={oncategoriasSelectChange} value={ContinentValue}>
                    {categorias.map(item => (
                        <option key={item.key} value={item.key}>{item.value} </option>
                    ))}
                </select>
                <br />
                <br />
                {/* boton para guardar los datos en el backend */}
                <Button onClick={onSubmit} type="primary">
                    Aceptar
                    <Icon type="plus" style={{ fontSize: 30, marginBottom: 5 }} className="btn btn-primary" />
                </Button>
            </Form>
        </div>
    )
}
export default UploadProductPage
