import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
import Header from './components/shared/Header/Header';
import Login from './components/Login/Login';
import AuthProvider from './components/AuthProvider/AuthProvider';

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>

            <Route exact path='/'>

            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>

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
