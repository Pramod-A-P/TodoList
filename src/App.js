import "./App.css";
import Navbar from "./components/Navbar";
import Infobar from "./components/Infobar";
import Task from "./components/Task";
import Taskinfo from "./components/Taskinfo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Infobar />
      <Task />
      <Taskinfo />
    </div>
  );
}

export default App;
