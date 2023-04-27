import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Home_poage from './Pages/Home_poage';
import Add_contact_page from './Pages/Add_contact_page';
import Edit_page from './Pages/Edit_page';
import Map_view_page from './Pages/Map_view_page';


function App() {
  return (
    <>
<Routes>
  <Route path='/' element={<Home_poage/>}/>
  <Route path='/add-contact' element={<Add_contact_page/>}/>
  <Route path='/edit-contact/:id' element={<Edit_page/>}/>
  <Route path='/map-view' element={<Map_view_page/>}/>
</Routes>
    
    </>
  );
}

export default App;
