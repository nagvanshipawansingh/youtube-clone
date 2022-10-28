
import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchPage from './SearchPage'

function App() {
  return (
   <div className='app'>
   <BrowserRouter>
   <Header/>
   

   
    <div className='app_page'>
    <Routes>
    <Route path='/search/:searchTerm' element={<Sidebar/>} />
    </Routes>
    <Routes>
    <Route path='/search/:searchTerm' element={<SearchPage/>} />
    </Routes>
    <Routes>
      <Route path='/' element={<Sidebar/>} />
      </Routes>
      <Routes>
        <Route path='/' element={ <RecommendedVideos/>} />
     
      </Routes>
    </div>
   </BrowserRouter>
   </div>
  );
}

export default App;
