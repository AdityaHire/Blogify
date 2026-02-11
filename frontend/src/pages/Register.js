import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log("Register:", { name, email, password });
    navigate("/blogs");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-warmCream via-warmPeach/20 to-warmCream flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-12 animate-slideUp">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-warmTerra to-warmSienna flex items-center justify-center shadow-xl">
              <span className="text-white text-2xl font-serif italic">B</span>
            </div>
          </div>
          <h1 className="font-display text-4xl text-warmBrown mb-2">Start writing</h1>
          <p className="text-warmBrown/60">Share your thoughts with the world</p>
        </div>

        <div className="bg-white rounded-3xl shadow-warm p-8 animate-slideUp" style={{ animationDelay: '0.1s' }}>
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-warmBrown/70 mb-2">Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-warmBrown/10 bg-warmCream/30 focus:bg-white focus:border-warmTerra focus:ring-2 focus:ring-warmTerra/20 outline-none transition-all"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-warmBrown/70 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-warmBrown/10 bg-warmCream/30 focus:bg-white focus:border-warmTerra focus:ring-2 focus:ring-warmTerra/20 outline-none transition-all"
                placeholder="your@email.com"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-warmBrown/70 mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-warmBrown/10 bg-warmCream/30 focus:bg-white focus:border-warmTerra focus:ring-2 focus:ring-warmTerra/20 outline-none transition-all"
                placeholder="••••••••"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full py-3 bg-warmTerra text-white rounded-xl font-medium hover:bg-warmSienna transition-all hover:shadow-lg transform hover:-translate-y-0.5 mt-6"
            >
              Create account
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link to="/" className="text-sm text-warmBrown/60 hover:text-warmTerra transition-colors">
              Already have an account? <span className="font-medium">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
