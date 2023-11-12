
import './App.css';

import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import Counter from './componets/Counter';
import Example from './componets/Example';
import Login from './componets/Login';
import ForgetPass from './componets/ForgetPass';
import Home from './componets/Home';
import Updates from './componets/Updates';
import Profile from './componets/Profile';
import EditProfile from './componets/EditProfile';
import DropQuestion from './componets/DropQuestion';
import UsersChannels from './componets/UsersChannels';
import settings from './componets/settings/settings';
function App() {
  return (
    
<BrowserRouter>
<Routes>
  <Route path='/' Component={Example}   />
  <Route path='/login' Component={Login}   />
  <Route path='/counter' Component={Counter}   />
  <Route path='/forget-password' Component={ForgetPass}  />
  <Route path='/home'  Component={Home} />
  <Route  path='/updates' Component={Updates} />
  <Route  path='/profile' Component={Profile} />
  <Route  path='/editprofile' Component={EditProfile} />
  <Route  path='/dropquestion' Component={DropQuestion} />
  <Route  path='/usersChannels' Component={UsersChannels} />
  <Route  path='/settings' Component={settings} />

</Routes>
</BrowserRouter>
  );
}

export default App;
