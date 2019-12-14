import React, { Suspense, lazy } from 'react';
import { Switch, Route } from 'react-router-dom';
//import { IndexRoute } from 'react-router';
import 'bootstrap/dist/css/bootstrap.min.css';


import MainLayout from './components/layout/MainLayout/MainLayout';
//routes
const Home = lazy(() => import('./components/pages/HomePage/HomePage'));
const ProductSupPage = lazy(() => import('./components/pages/ProductSupPage/ProductSupPage'));
const FAQPage = lazy(() => import('./components/pages/FAQPage/FAQPage'));
const RulesPage = lazy(() => import('./components/pages/RulesPage/RulesPage'));
const Contact = lazy(() => import('./components/pages/ContactPage/ContactPage'));
const CartPage = lazy(() => import('./components/pages/CartPage/CartPage'));
const ErrorPage = lazy(() => import('./components/pages/ErrorPage/ErrorPage'));

class App extends React.Component {

  render() {
    return (
      <MainLayout>
        <Suspense fallback={<div>Wczytywanie...</div>}>
          <Switch>
            <Route path='/products' exact component={Home} />
            <Route path='/faq' exact component={FAQPage}/>
            <Route path='/rules' exact component={RulesPage}/>
            <Route path='/contact' exact component={Contact} />
            <Route path='/cart' exact component={CartPage} />
            <Route path='/products/:id' exact component={ProductSupPage}/>
            <Route component={ErrorPage} />
          </Switch>
        </Suspense>
      </MainLayout>
    );
  }
}

export default App;