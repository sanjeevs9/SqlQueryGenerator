
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sql from './components/Sql';
import JsonDesign from './components/JsonDesign';


function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Sql />} />
          <Route path="/json" element={<JsonDesign  />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;