import React, { useEffect, useState } from 'react'
import { Button, Descriptions,Icon} from 'antd';

function ProductInfo(props) {

    const [Product, setProduct] = useState({})

    useEffect(() => {

        setProduct(props.detail)

    }, [props.detail])

    const addToCarthandler = () => {
        props.addToCart(props.detail._id)
    }


    return (
        <div>
            <Descriptions title="Informacion del producto">
                <Descriptions.Item label="precio Q">{Product.precio}</Descriptions.Item>
                <Descriptions.Item label="Cantidad Vendidos">{Product.sold}</Descriptions.Item>
                <Descriptions.Item label="Vistas"> {Product.views}</Descriptions.Item>
                <Descriptions.Item label="Descripcion"> {Product.description}</Descriptions.Item>
            </Descriptions>

            <br />
            <br />
            <br />
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <Button size="large"  type="primary" onClick={addToCarthandler}>
                    Agregar al Carrito
                    <Icon type="shopping-cart" style={{ fontSize: 30, marginBottom: 3 }} />
                    </Button>
            </div>
        </div>
    )
}

export default ProductInfo
