// import logo from './logo.svg';
import './App.css';
import Header from "./component/header"
import Footer from "./component/footer"
import Body from "./component/body"
import Resume from "./pages/Resume/resume";
import About from "./pages/About/about";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

// import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
    <div className="App">
  <Header/>
  <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
  </Routes>
  <Footer/>
  
    </div>
    </Router>
    )
}

export default App;
