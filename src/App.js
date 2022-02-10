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
      {/* Header Section */}
      <Header></Header>
      <div className="container">
        <Routes>
          {/* Front Page */}
          <Route exact path="/" element={<FrontPage></FrontPage>} />
          {/* Front Page */}
          <Route exact path="/home" element={<FrontPage></FrontPage>} />
          {/* Courses Page */}
          <Route exact path="/courses" element={<Courses></Courses>} />
          {/* Students Page */}
          <Route exact path="/students" element={<Students></Students>} />
          {/* About Us Page */}
          <Route exact path="/about-us" element={<About></About>} />
          {/* Not Found Page */}
          <Route exact path="*" element={<NotFound></NotFound>} />
        </Routes>
      </div>
      {/* Footer Page */}
      <Footer></Footer>
    </div>
  );
}

export default App;
