import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const Login = () => {
    return (
      <>
      <Navbar />
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold">Login</h1>
        <p className="mt-4">Sign in to access exclusive features.</p>
      </div>

      <Footer />
      </>
    );
  };
  
  export default Login;
  