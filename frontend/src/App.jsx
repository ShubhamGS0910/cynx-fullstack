const App = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full max-w-[1440px] px-4 md:px-8 lg:px-0">
        {children}
      </div>
    </div>
  );
};

export default App;
