
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Customer from "./components/customer";
import Contact from "./components/contact";
import Main from "./components/main";
import Blog from "./components/blog";

function App() {

  return (
    <>
        <Router>
        <Routes>
          <Route path="/pricing" element={<Home />} />
          <Route path="/customer-stories" element={<Customer />} />
          <Route path="/signup" element={<Contact/>} />
          <Route path="/" element={<Main/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="/features" element={<Contact/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
