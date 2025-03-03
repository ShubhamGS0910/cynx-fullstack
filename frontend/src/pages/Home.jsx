import CTAButton from "../components/ctaction/CTAButton"

const Home = () => {
    return (
      <div className="text-center p-10">
        <h1 className="text-4xl font-bold pt-10">Welcome to CYN-X</h1>
        <p className="mt-4">Innovating the future with high-tech solutions.</p>

        <div className="flex content-center justify-center items-center min-h-2 p-40 bg-gray-100 dark:bg-gray-900">
          <CTAButton />
        </div>
      </div>
      
    );
  };
  
  export default Home;
  