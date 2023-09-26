import { FC } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// fonts
import "@fontsource/inter";
import "@fontsource/inter/400.css";
// components
import Home from "./pages/home";
import About from "./pages/about";
import Career from "./pages/careers";
import Products from "./pages/products";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";

const App: FC = () => {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/about" Component={About} />
        <Route path="/products" Component={Products} />
        <Route path="/career" Component={Career} />
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
