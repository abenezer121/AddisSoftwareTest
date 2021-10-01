import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './data.css'
import Navbar from './components/navbar/navbar'

import Home from "./components/home/home"
import Users from './components/user/users'
import AddUsers from './components/addusers/addusers';

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
function App ()  {
  
  // const users:any = useSelector((state:RootState) => state.users);
  // const dispatch = useDispatch();
  // const [id, setId] = useState("");
  // const [name, setName] = useState("");
  // const [gender, setGender] = useState("");
  // const [salary, setSalary] = useState("");

  useEffect(() => {
      //dispatch(getUserById("6154a53f8bda0a0a15044a49"))
      //
      //dispatch(deleteUser("61554c5d3c71c2e64dc7c0ce"))
      ////dispatch(getUsers())
     // dispatch(updateUser("61554c633c71c2e64dc7c0d1" , "bbbbaasdasdaasdfasdfasdasd"))
      //
   

  }, []);


  return (
    
 
      <Router>
        <Navbar/>
        <main>
          <Switch>
            <Route path={'/'} exact>
              <Home />
            </Route>

            <Route path={'/users'} exact>
              <Users />
            </Route>

            <Route path={'/addusers'} exact>
              <AddUsers />
            </Route>

          </Switch>
        </main>
      </Router>
    
  );
}

export default App;
