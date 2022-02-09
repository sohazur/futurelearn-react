import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Courses from "./components/Courses/Courses";
import Footer from "./components/Footer/Footer";
import FrontPage from "./components/FrontPage/FrontPage";
import Header from "./components/Header/Header";
import NotFound from "./components/NotFound/NotFound";
import Students from "./components/Students/Students";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<FrontPage></FrontPage>} />
          <Route exact path="/home" element={<FrontPage></FrontPage>} />
          <Route exact path="/courses" element={<Courses></Courses>} />
          <Route exact path="/students" element={<Students></Students>} />
          <Route exact path="/about-us" element={<About></About>} />
          <Route exact path="*" element={<NotFound></NotFound>} />
        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
