import React, { useEffect, useState } from "react";
import { getBlogs, deleteBlog } from "../services/blogApi";
import { Link, useNavigate } from "react-router-dom";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user") || "null");

  const fetchBlogs = async () => {
    const res = await getBlogs();
    setBlogs(res.data);
  };

  const handleDelete = async (id) => {
    await deleteBlog(id);
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h2>All Blogs</h2>
        {user ? (
          <div>
            <span style={{ marginRight: "10px" }}>Welcome, {user.name}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        ) : (
          <Link to="/">
            <button>Login</button>
          </Link>
        )}
      </div>

      <Link to="/create">
        <button>Create Blog</button>
      </Link>

      {blogs.map((blog) => (
        <div key={blog._id} style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}>
          <h3>{blog.title}</h3>
          <p>{blog.content}</p>
          <p><b>Author:</b> {blog.author}</p>

          <Link to={`/edit/${blog._id}`}>
            <button>Edit</button>
          </Link>

          <button onClick={() => handleDelete(blog._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
