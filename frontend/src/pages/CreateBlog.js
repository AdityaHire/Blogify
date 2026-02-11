import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

  const handlePublish = (e) => {
    e.preventDefault();
    // Add your publish logic here
    console.log("Publishing blog:", { title, content, category });
    navigate("/blogs");
  };

  const handleSaveDraft = () => {
    // Add your save draft logic here
    console.log("Saving draft:", { title, content, category });
  };

  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-12 animate-slideUp">
          <h1 className="font-display text-5xl text-warmBrown mb-3">
            Write your story
          </h1>
          <p className="text-warmBrown/60">
            Share your thoughts, experiences, and ideas with the world
          </p>
        </div>

        <form onSubmit={handlePublish} className="space-y-6 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <div>
            <label className="block text-sm font-medium text-warmBrown/70 mb-2">Category</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-48 px-4 py-2 rounded-xl border border-warmBrown/10 bg-warmCream/30 focus:bg-white focus:border-warmTerra focus:ring-2 focus:ring-warmTerra/20 outline-none transition-all text-sm"
              placeholder="e.g., Lifestyle, Stories"
            />
          </div>

          <div>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-0 py-3 text-4xl font-display text-warmBrown border-0 border-b-2 border-warmBrown/10 bg-transparent focus:border-warmTerra outline-none transition-all placeholder:text-warmBrown/20"
              placeholder="Your story title..."
              required
            />
          </div>

          <div>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={16}
              className="w-full px-6 py-6 rounded-2xl border border-warmBrown/10 bg-white focus:border-warmTerra focus:ring-2 focus:ring-warmTerra/20 outline-none transition-all text-lg leading-relaxed text-warmBrown/80 placeholder:text-warmBrown/30 resize-none"
              placeholder="Begin your story..."
              required
            />
          </div>

          <div className="flex gap-4 pt-6">
            <button 
              type="submit"
              className="px-8 py-3 bg-warmTerra text-white rounded-xl font-medium hover:bg-warmSienna transition-all hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Publish
            </button>
            <button 
              type="button"
              onClick={handleSaveDraft}
              className="px-8 py-3 bg-warmBrown/5 text-warmBrown rounded-xl font-medium hover:bg-warmBrown/10 transition-all"
            >
              Save Draft
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default CreateBlog;
