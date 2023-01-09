import React from 'react'
import {Route} from 'react-router-dom'
import { useSelector } from 'react-redux';
import Login from './components/user/login';
import Register from './components/user/register';
import DashboardContainer from './components/Dashboard/DashboardContainer';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

const App = () => {
  const user = useSelector((state) => {
    return state.user
  })
  return (
    <div className="App">
      <Route path='/' component={Login} exact/>
      <Route path='/register' component={Register} exact/>
      <PrivateRoute path='/dashboard' component={DashboardContainer}/>

    </div>
  );
}

export default App;
