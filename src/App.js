import "./App.css";
import Home from "./pages/Home";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";

function App() {
  function getLibrary(provider) {
    return new Web3Provider(provider);
  }

  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="App">
        <Home />
      </div>
    </Web3ReactProvider>
  );
}

export default App;
