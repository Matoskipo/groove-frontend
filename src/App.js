import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Dashboard from './components/Dashboard'
import TestCards from './components/common/Cards'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route  path='/' element={<Dashboard />}/>
        <Route  path='/test' element={<TestCards />}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
