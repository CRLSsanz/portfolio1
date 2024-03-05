import Portfolio from "./pages/Portfolio";
import Navbar from "./components/Navbar";
import { AppProvider } from "./context/AppProvider";

function App() {
  return (
    <AppProvider>
      <div className="text-white">
        <div className="hidden w-full fixed z-50 top-0">
          <Navbar />
        </div>
        <Portfolio />
      </div>
    </AppProvider>
  );
}

export default App;
