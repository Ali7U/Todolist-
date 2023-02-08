import Effect from "./components/Effect";
import { Routes, Route } from "react-router-dom";
import Post from "./components/Post";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Effect />} />
        <Route path="/login" element={<Post />} />
        <Route path="/updateUser" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
