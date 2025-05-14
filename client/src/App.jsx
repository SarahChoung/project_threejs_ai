import Canvas from "./canvas";
import Customizer from "./pages/Customizer";
import Home from "./pages/Home";

function App() {
  return (
    <main className="app transition-all ease-in">
      <Home />
      <Canvas />
      <Customizer />
      <div>
        <h1 className="head-text">ThreeJS</h1>
      </div>
    </main>
  );
}

export default App;
