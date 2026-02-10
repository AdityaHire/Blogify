import React, { useEffect, useState } from "react";
import { getBlogById, updateBlog } from "../services/blogApi";
import { useNavigate, useParams } from "react-router-dom";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({ title: "", content: "", author: "" });

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await getBlogById(id);
      setForm(res.data);
    };
    fetchBlog();
  }, [id]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateBlog(id, form);
    navigate("/");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Edit Blog</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" value={form.title} onChange={handleChange} required />
        <br /><br />
        <textarea name="content" value={form.content} onChange={handleChange} required />
        <br /><br />
        <input name="author" value={form.author} onChange={handleChange} />
        <br /><br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBlog;
