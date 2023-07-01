import "./App.css";
import { Routes, Route } from "react-router-dom";

import Header from "./common/Header";
import Blog from "./Blog";
import NewPost from "./posts/NewPost";
import Post from "./posts/Post";
import NoPage from "./common/NoPage";

/** App component
 * - top level component that renders the header and all routes:
 *
 *      Home          "/"
 *      New           "/new"
 *      PostDetails   "/:id"
 *      *    Not Found
 */
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Blog />} />
        <Route path="/new" element={<NewPost />} />
        <Route path="/:id" element={<Post />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
