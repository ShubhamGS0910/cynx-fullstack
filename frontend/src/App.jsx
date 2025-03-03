  import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
  import Navbar from "./components/navbar/Navbar.jsx";
  import Footer from "./components/Footer.jsx";
import CTAButton from "./components/ctaction/CTAButton.jsx";
import Home from "./pages/Home.jsx";

  const App = () => {
    return (
      <Router>
        <div className="flex flex-col min-h-screen bg-gray-900 text-white">
          {/* Navbar */}
          <Navbar />
          
          {/* Main Content */}
          <main className="flex-auto bg-gray-300 pt-10">
          <Home />
          
          </main>
          <div className="flex content-center justify-center items-center min-h-2 p-10 bg-gray-100 dark:bg-gray-900">
            <CTAButton />
          </div>
          {/* Footer - Stays at Bottom */}
          <Footer />
        </div>
      </Router>
    );
  }

  export default App;
