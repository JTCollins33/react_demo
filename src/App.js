import './App.css';
import Header from './header/Header';
import Footer from './footer/Footer';
import HomePage from './home/Home';
import NotFoundPage from './notFound/NotFoundPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import UseMemoPage from './useMemoPage/UseMemoPage';
import UseCallbackPage from './useCallbackPage/UseCallbackPage';
import UseReducerPage from './useReducerPage/UseReducerPage';
import UseContextPage from './useContextPage/UseContextPage';
import PropDrillingSolutionPage from './propDrillingSolutionPage/PropDrillingSolutionPage';
import { useState } from 'react';
import { CountContext } from './context/Context';
import UseRefPage from './useRefPage/UseRefPage';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Header/>
        <br/><br/>
        <CountContext.Provider value={{count, setCount}}>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/useReducerPage" element={<UseReducerPage/>}/>
            <Route path="/useMemoPage" element={<UseMemoPage/>}/>
            <Route path="/useCallbackPage" element={<UseCallbackPage/>}/>
            <Route path="/useContextPage" element={<UseContextPage/>}/>
            <Route path="/propDrillingSolutionPage" element={<PropDrillingSolutionPage/>}/>
            <Route path="/useRefPage" element={<UseRefPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Routes>
        </CountContext.Provider>
        <br/><br/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
