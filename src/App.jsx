import "./App.css";
import Title from "./components/Title";
import POPOSList from "./components/POPOSList";
import Footer from "./components/Footer";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import POPOSDetails from "./components/POPOSDetails";
import About from "./components/About";

function App() {
  const today = new Date();
  const year = today.getFullYear();

  return (
    <Router>
      <div className="App">
        <Title />
        <Routes>
          <Route path="/" Component={POPOSList} />
          <Route path="/about" Component={About} />
          <Route path="/details/:id" Component={POPOSDetails} />
        </Routes>
        <Footer year={year} />
      </div>
    </Router>
  );
}

export default App;
