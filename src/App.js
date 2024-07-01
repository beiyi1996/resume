import Banner from "./components/banner";
import Contents from "./components/contents";
import ThemedMode from "./components/themeMode";
import "./App.css";

function App() {
  return (
    <div className="App text-base">
      <ThemedMode />
      <Banner />
      <Contents />
    </div>
  );
}

export default App;
