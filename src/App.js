import { Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Header></Header>} />
          <Route exact path="/home" element={<Header></Header>} />
          <Route exact path="*" element={<NotFound></NotFound>} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
