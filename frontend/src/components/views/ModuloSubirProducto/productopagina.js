import React, { Component } from 'react'
import { Typography, Button, Form, Input } from 'antd';
import axios from 'axios';
import FileUpload from '../../utils/subirimagen';

const { title } = Typography;
const { TextArea } = Input;

const categorias = [
    { key: 1, value: "Samsung" },
    { key: 2, value: "Dell" },
    { key: 3, value: "Toshiba" },
    { key: 4, value: "Mac" },
    { key: 5, value: "Compac" },
    { key: 6, value: "Sony" },
    { key: 7, value: "Php" }
]

export class UploadProductPage extends Component {

    state = {
        title: '',
        description: '',
        categorias: 1,
        images: [],
        precio: 0
    }

    handleChangetitle = (event) => {
        this.setState({ title: event.currentTarget.value })
    }

    handleChangeprecio = (event) => {
        this.setState({ precio: parseInt(event.currentTarget.value, 10) })
    }

    handleChangeDecsription = (event) => {
        // console.log(event.currentTarget.value)
        this.setState({ description: event.currentTarget.value })
    }

    handleChangecategorias = (event) => {
        this.setState({ categorias: event.currentTarget.value })
    }

    onSubmit = (event) => {
        event.preventDefault();

        if (this.props.user.userData && !this.props.user.userData.isAuth) {
            return alert('logerse antes')
        }

        if (!this.state.title || !this.state.description ||
            !this.state.categorias || !this.state.images
            || !this.state.precio) {
            return alert('complete todos los campos')
        }

        const variables = {
            writer: this.props.user.userData._id,
            title: this.state.title,
            description: this.state.description,
            images: this.state.images,
            categorias: this.state.categorias,
            precio: this.state.precio
        }

        axios.post('/api/product/uploadProduct', variables)
            .then(response => {
                if (response.data.success) {
                    alert('video Uploaded Successfully')
                    setTimeout(() => {
                        this.props.history.push('/')
                    }, 1000);
                } else {
                    alert('Failed to upload video')
                }
            })
    }

    updateFiles = (newImages) => {
        this.setState({ images: newImages })
    }


    render() {
        return (
            <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <title level={2} > Subir un articulot</title>
            </div>

            <Form onSubmit={this.onSubmit}>
               
               <FileUpload refreshFunction={this.updateFiles} />

                <br /><br />
                <label>title</label>
                <Input
                    onChange={this.handleChangetitle}
                    value={this.state.title}
                />
                <br /><br />
                <label>Description</label>
                <TextArea
                    onChange={this.handleChangeDecsription}
                    value={this.state.description}
                />
                <br /><br />
                <label>precio($)</label>
                <Input
                    type="number"
                    onChange={this.handleChangeprecio}
                    value={this.state.precio}
                />
                <br /><br />
                <select onChange={this.handleChangecategorias}>
                    {categorias.map(item => (
                        <option key={item.key} value={item.key}>{item.value}</option>
                    ))}
                </select>
                <br /><br />

                <Button type="primary" size="large" onClick={this.onSubmit}>
                    Submit
                </Button>
            </Form>
        </div>
        )
    }
}

export default UploadProductPage
