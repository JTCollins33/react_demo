import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import HomePage from './home/Home';
import Page1 from './page1/Page1';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
      <div>
        <Header/>
        <br/><br/>
        <Routes>
          <Route path="/" element={HomePage}/>
          <Route path="/page1" element={Page1}/>
        </Routes>
        <br/><br/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
