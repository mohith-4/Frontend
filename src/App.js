 
import './App.css';
import Signup from './components/Signup';
import {BrowserRouter , Route , Routes} from 'react-router-dom' ;
import ViewTable from './components/ViewTable';
import Login from './components/Login';
import Editpage from './components/Editpage';
function App() {
  return (
    <BrowserRouter>
     
    <Routes>
       <Route path='/' element ={<Signup />} />
       <Route path='/login' element ={<Login />} />
       <Route path='/view' element ={<ViewTable/> } />
       <Route  path='/edit-employee/:id' element={<Editpage />}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
