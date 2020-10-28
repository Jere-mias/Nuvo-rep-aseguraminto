import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import Auth from "../hoc/auth";
// pages for this product
import LandingPage from "./views/ModuloInicial/mostrarproducto.js";
import LoginPage from "./views/ModuloLogin/logeo.js";
import RegisterPage from "./views/ModuloRegistro/RegisterPage.js";
import NavBar from "./views/ModulobarraNavegacion/barradenavegacion";
import Footer from "./views/Footer/Footer"
import productomodulo from './views/ModuloSubirProducto/subirarticulo'
import DetailProductPage from './views/Modulodetalleproducto/detalleproducto';
import CartPage from './views/ModuloCarrito/carrito';
import HistoryPage from './views/ModuloHistoria/historial';


function App() {
  return (
    <Suspense fallback={(<div>Cargando...</div>)}>
      <NavBar />
      <div style={{ paddingTop: '75px', minHeight: 'calc(100vh - 80px)' }}>
        <Switch>
          <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
          <Route exact path="/product/upload" component={Auth(productomodulo, true)} />
          <Route exact path="/product/:productId" component={Auth(DetailProductPage, null)} />
          <Route exact path="/user/cart" component={Auth(CartPage, true)} />
          <Route exact path="/history" component={Auth(HistoryPage, true)} />

        </Switch>
      </div>
      <Footer />
    </Suspense>
  );
}

export default App;
