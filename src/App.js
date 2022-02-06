import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Header></Header>} />
        <Route exact path="/home" element={<Header></Header>} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
