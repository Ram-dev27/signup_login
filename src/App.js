
import { BrowserRouter as Router,Route} from 'react-router-dom';
import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
   <Router>
     <Route exact path='/' component={Login}/>
     <Route path='/signup' component={Signup}/>
   </Router>
  )
}

export default App;
