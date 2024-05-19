import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header.jsx';
import Figure from './components/Figure.jsx';

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
     <Route path='/' element ={<Header />} />
    </Routes>
    </BrowserRouter>
    
    <div className='game-container'>
      <Figure />
    </div>

    </>
  )
}

export default App
