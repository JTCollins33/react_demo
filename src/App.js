import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import HomePage from './home/Home';
import NotFoundPage from './notFound/NotFoundPage';
import Page1 from './page1/Page1';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UseMemo from './useMemo/UseMemo';

function App() {


  return (
    <BrowserRouter>
      <div>
        <Header/>
        <br/><br/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/page1" element={<Page1/>}/>
          <Route path="/useMemo" element={<UseMemo/>}/>
          <Route path="/useCallback" element={<UseCallback/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <br/><br/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
