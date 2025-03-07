import DisableZoom from "./styles/DisableZoom";

const App = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-amber-50  overflow-x-hidden">
      <div className="w-full min-w-[320px] max-w-[1440px] ">
        {children}
        <DisableZoom /> 
      </div>
    </div>
  );
};

export default App;
