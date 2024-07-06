import './App.css'

import { Routes, Route} from 'react-router-dom';
import Authorization from "./components/Authorization";


function App() {

  return (
      <Routes>
          <Route path="/" element={<Authorization />} />
      </Routes>
  )

}

export default App
