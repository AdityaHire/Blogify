import React, { useState } from "react";
import { createBlog } from "../services/blogApi";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const [form, setForm] = useState({ title: "", content: "", author: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createBlog(form);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" value={form.title} onChange={handleChange} required />
        <br /><br />
        <textarea name="content" placeholder="Content" value={form.content} onChange={handleChange} required />
        <br /><br />
        <input name="author" placeholder="Author" value={form.author} onChange={handleChange} />
        <br /><br />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CreateBlog;
