import './App.css';
import Home from './Pages/Home.js';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Create from './Pages/Create.js';
import Update from './Pages/Update.js'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/create' element={<Create />}></Route>
        <Route path='/edit/:id' element={<Update />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
