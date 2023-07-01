import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "./features/postSlice";
import "./Blog.css";

const Blog = () => {
  const dispatch = useDispatch();

  const { posts, loading } = useSelector((store) => store.posts);

  // fetch posts when site loads
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  if (loading) return <p>Loading...</p>;

  console.log(posts);
  return (
    <div className="Blog">
      <p className="Blog-headline">
        Welcome to <b>Microblog</b>, our innovative site for communicating on
        the information superhighway.
      </p>
      <div className="Blog-all-post-container">
        {posts.map((post) => (
          <div className="Blog-post-container" key={post.id}>
            <Link to={`/${post.id}`} className="Blog-post-link">
              {post.title}
            </Link>
            <p className="Blog-post-description">{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
