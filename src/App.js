import logo from './logo.svg';
import './App.css';

//Components
import NavBar from './Components/NavBar';
import Interview from './Components/Interview';
import AllUser from './Components/AllUser';
import AddUser from './Components/AddUser';
import EditUser from './Components/EditUser';

import { BrowserRouter , Route,Routes} from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      
      <NavBar />
      <Routes>
        <Route path="/" element={<Interview />} />
        <Route path="/all" element={<AllUser />} />
        <Route path="/add" element={<AddUser />} />
        <Route path="/edit/:id" element={<EditUser />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
