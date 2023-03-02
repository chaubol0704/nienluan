import { Routes, Route } from "react-router-dom";
import {Home, Homepage, Login} from './containers/Public'
import {path} from './ultils/constant'
function App() {
  return (
    <div className="bg-primary ">
    
      <Routes>
        <Route path={path.HOME} element={<Home/>}>
          < Route path={path.LOGIN} element={<Login/>} />
          < Route path='*' element={<Homepage/>} />
          < Route path={path.HOME__PAGE} element={<Homepage/>} />

        </Route>
       
         
      </Routes>
      
    </div>
  );
}

export default App;
