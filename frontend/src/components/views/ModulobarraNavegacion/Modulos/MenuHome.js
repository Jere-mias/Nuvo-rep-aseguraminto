//seccion donde se importan los componenetes necesarios de react
import React from 'react';
import { Menu } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
//Apartado para el menu home del lado izquiedo de la barra de navegacion
function MenuHome(props) {
  return (
  <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Principal</a>
    </Menu.Item>
  </Menu>
  )
}
export default MenuHome
