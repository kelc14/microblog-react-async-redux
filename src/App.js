import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./common/Header";
import Blog from "./Blog";
import NewPost from "./posts/NewPost";
import Post from "./posts/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/:id" element={<Post />} />
      </Routes>
    </div>
  );
}

export default App;
