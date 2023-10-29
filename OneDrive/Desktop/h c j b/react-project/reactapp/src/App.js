
import './App.css';

import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import Counter from './componets/Counter';
import Example from './componets/Example';
import Login from './componets/Login';
import ForgetPass from './componets/ForgetPass';
import Home from './componets/Home';
function App() {
  return (
    
<BrowserRouter>
<Routes>

  <Route path='/' Component={Example}   />
  <Route path='/login' Component={Login}   />
  <Route path='/counter' Component={Counter}   />
  <Route path='/forget-password' Component={ForgetPass}  />
  <Route path='/home'  Component={Home} />
</Routes>
</BrowserRouter>
  );
}

export default App;
