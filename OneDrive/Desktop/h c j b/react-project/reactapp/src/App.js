
import './App.css';
import Home from './componets/Message';
import {BrowserRouter , Route ,Routes} from 'react-router-dom'
import Counter from './componets/Counter';

import Example from './componets/Example';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' Component={Example}   />
  <Route path='/counter' Component={Counter}   />
</Routes>

</BrowserRouter>
  );
}

export default App;
