
import './App.css';
import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './Component/Home/Home';
import ProjectDetails from './Component/Home/ProjetDetails';
import Signup from './Component/Login/Signup';
import Signin from './Component/Login/Signin';
import CreateProject from './Component/Home/CreateProject';
import Caro from './Component/Home/Caro';

function App() {
  return (
    <>
    <BrowserRouter>
    
<Routes>
      <Route path="/" exact element={<Caro/>} />
      <Route path="/boad" exact element={<Home />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/news" element={<Signin />} />
      <Route path="/new" element={<CreateProject/>} />
</Routes>



    
    </BrowserRouter>
  
    </>
  );
}

export default App;


 