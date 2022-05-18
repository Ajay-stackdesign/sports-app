import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import GetDetail from "./component/GetDetail.js"
import VideoCreate from "./component/Video.js"

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/video/get' element={<GetDetail />} />
        <Route exact path='/video' element={<VideoCreate />} />
      </Routes>
    </Router>
  );
}

export default App;
