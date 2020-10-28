//Seccion de librerias necesarias para el NavBar
import React, { useState } from 'react';
import MenuHome from './Modulos/MenuHome';
import MenuLogeo from './Modulos/MenuLogeo';
import { Drawer, Button, Icon } from 'antd';
import './Modulos/Navbar.css';

//creamos la funcion para llamar el NavBar
function NavBar() {
  const [visible, setVisible] = useState(false)
  const showDrawer = () => {
    setVisible(true)
  };
  const onClose = () => {
    setVisible(false)
  };
// codigo html para para mostrar el baner de navegacion
  return (
    <nav className="menu" style={{ position: 'fixed', zIndex: 5, width: '100%' }}>
      <div className="menu__logo">
        <a href="/"><img src="/umg.png" className="logoumg"></img></a>
      </div>
      <div className="menu__container">
        <div className="menu_left">
          <MenuHome mode="horizontal" type="primary"/ >
        </div>
        <div className="menu_rigth">
          <MenuLogeo mode="horizontal"/>
        </div>
        <Button
          className="menu__mobile-button"
          type="primary"
          onClick={showDrawer}>

          <Icon type="align-right"/>
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}>

          <MenuHome mode="inline" />
          <MenuLogeo mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar
