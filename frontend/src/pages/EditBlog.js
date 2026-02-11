import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const EditBlog = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // In a real app, you would fetch the blog data based on the id
  const [title, setTitle] = useState("The Art of Slow Living");
  const [content, setContent] = useState("Discovering beauty in the everyday moments that often pass us by unnoticed. A journey through mindfulness and presence.\n\nIn our fast-paced world, we often forget to pause and appreciate the small moments that make life meaningful...");
  const [category, setCategory] = useState("Lifestyle");

  const handleUpdate = (e) => {
    e.preventDefault();
    // Add your update logic here
    console.log("Updating blog:", { id, title, content, category });
    navigate("/blogs");
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      // Add your delete logic here
      console.log("Deleting blog:", id);
      navigate("/blogs");
    }
  };

  const handleCancel = () => {
    navigate("/blogs");
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12 animate-slideUp">
          <h1 className="font-display text-5xl text-warmBrown mb-3">
            Edit your story
          </h1>
          <p className="text-warmBrown/60">
            Refine and polish your thoughts
          </p>
        </div>

        <form onSubmit={handleUpdate} className="space-y-6 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <div>
            <label className="block text-sm font-medium text-warmBrown/70 mb-2">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-48 px-4 py-2 rounded-xl border border-warmBrown/10 bg-warmCream/30 focus:bg-white focus:border-warmTerra focus:ring-2 focus:ring-warmTerra/20 outline-none transition-all text-sm"
            />
          </div>

          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-0 py-3 text-4xl font-display text-warmBrown border-0 border-b-2 border-warmBrown/10 bg-transparent focus:border-warmTerra outline-none transition-all"
              required
            />
          </div>

          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={16}
              className="w-full px-6 py-6 rounded-2xl border border-warmBrown/10 bg-white focus:border-warmTerra focus:ring-2 focus:ring-warmTerra/20 outline-none transition-all text-lg leading-relaxed text-warmBrown/80 resize-none"
              required
            />
          </div>

          <div className="flex gap-4 pt-6">
            <button 
              type="submit"
              className="px-8 py-3 bg-warmTerra text-white rounded-xl font-medium hover:bg-warmSienna transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Update
            </button>
            <button 
              type="button"
              onClick={handleCancel}
              className="px-8 py-3 bg-warmBrown/5 text-warmBrown rounded-xl font-medium hover:bg-warmBrown/10 transition-all"
            >
              Cancel
            </button>
            <button 
              type="button"
              onClick={handleDelete}
              className="ml-auto px-8 py-3 bg-red-50 text-red-600 rounded-xl font-medium hover:bg-red-100 transition-all"
            >
              Delete
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default EditBlog;
