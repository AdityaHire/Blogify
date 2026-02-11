import React from "react";
import { Link } from "react-router-dom";

function Layout({ children, showHeader = true }) {
  return (
    <div className="min-h-screen bg-warmCream">
      {showHeader && (
        <header className="border-b border-warmBrown/10 bg-warmCream/80 backdrop-blur-sm sticky top-0 z-50">
          <nav className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
            <Link to="/blogs" className="group flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-warmTerra to-warmSienna flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                <span className="text-white text-sm font-serif italic">B</span>
              </div>
              <span className="font-display text-xl text-warmBrown tracking-tight">Blogify</span>
            </Link>
            <div className="flex items-center gap-6">
              <Link to="/blogs" className="text-warmBrown/70 hover:text-warmBrown transition-colors text-sm">
                Stories
              </Link>
              <Link to="/create" className="px-4 py-2 bg-warmTerra text-white rounded-full text-sm hover:bg-warmSienna transition-all hover:shadow-lg transform hover:-translate-y-0.5">
                Write
              </Link>
            </div>
          </nav>
        </header>
      )}
      <main className="animate-fadeIn">
        {children}
      </main>
    </div>
  );
}

export default Layout;