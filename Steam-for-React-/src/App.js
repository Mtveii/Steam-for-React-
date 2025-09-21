// src/App.js
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Home'; // Именованный экспорт
import  App1 from './Components/Comp';     // Экспорт по умолчанию

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<App1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
