import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import OrdersPage from './pages/Orders/OrdersPage';
import UsersPage from './pages/Users/UsersPage';
import ProductsPage from './pages/Products/ProductsPage';
import ProvidersPage from './pages/Providers/ProvidersPage';
import AuthPage from "./pages/Auth/AuthPage";
import CategoriesPage from "./pages/Categories/CategoriesPage";
import MainPage from "./pages/Main/MainPage";

function App() {

  return(
      <>
        <Switch>
            <Route path={'/main'} exact component={MainPage} />
        <Route path={'/orders'} exact component={OrdersPage} />
        <Route path={'/users'}  component={UsersPage} />
        <Route path={'/products'} exact component={ProductsPage} />
        <Route path={'/categories'} exact component={CategoriesPage} />
        <Route path={'/providers'}  component={ProvidersPage} />
        <Route path={'/'} exact component={AuthPage}/>
        </Switch>
      </>

  )
}

export default App;
