import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/shared/Header/Header';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';
import Home from './components/home/Home/Home';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ManageAllOrders from './components/shared/ManageAllOrders/ManageAllOrders';
import AddNewService from './components/shared/AddNewService/AddNewService';
import MyOrders from './components/shared/MyOrders/MyOrders';
import PlaceOrder from './components/PlaceOrder/PlaceOrder';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <PrivateRoute path='/myOrders'>
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path='/manageAllOrders'>
              <ManageAllOrders></ManageAllOrders>
            </PrivateRoute>
            <PrivateRoute path='/addNewService'>
              <AddNewService></AddNewService>
            </PrivateRoute>
            <PrivateRoute path='/placeOrder/:id'>
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
