import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import HomePage from './home/Home';
import NotFoundPage from './notFound/NotFoundPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UseMemoPage from './useMemoPage/UseMemoPage';
import UseCallbackPage from './useCallbackPage/UseCallbackPage';
import UseReducerPage from './useReducerPage/UseReducerPage';

function App() {


  return (
    <BrowserRouter>
      <div>
        <Header/>
        <br/><br/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/useReducerPage" element={<UseReducerPage/>}/>
          <Route path="/useMemoPage" element={<UseMemoPage/>}/>
          <Route path="/useCallbackPage" element={<UseCallbackPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
        <br/><br/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
