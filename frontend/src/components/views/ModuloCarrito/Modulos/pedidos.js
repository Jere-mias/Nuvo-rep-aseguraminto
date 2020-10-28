import React from 'react'
import { Link } from 'react-router-dom'
import { Menu, Icon, Badge } from 'antd';
//Modulo pedidos de la pagina
function UserCardBlock(props) {

    const renderCartImage = (images) => {
        if(images.length > 0) {
            let image = images[0]
            return `http://localhost:5000/${image}`
        }
    }
    const renderItems = () => (
        props.products && props.products.map(product => (
            <tr key={product._id}>
                <td>
                    <img style={{ width: '70px' }} alt="product"
                    src={renderCartImage(product.images)} />
                </td>
                <td>{product.quantity} Unidad</td>
                <td>Q {product.precio} </td>
                <td><button onClick={()=> props.removeItem(product._id)} >
                    Quitar 
                    <Icon type="delete" style={{ fontSize: 30, marginBottom: 3 }} />
                    </button> 
                    <button> 
                    <Link to={`/`} className="btn btn-primary">  
                    Home    
                    <Icon type="home" style={{ fontSize: 30, marginBottom: 3 }} />
                    </Link>
                    </button> 
                    
                    </td>
            </tr>
        ))
    )


    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>precio</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    {renderItems()}
                </tbody>
            </table>
        </div>
    )
}

export default UserCardBlock
