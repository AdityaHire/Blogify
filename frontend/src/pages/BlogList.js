import React, { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../components/Layout";

function BlogList() {
  const [blogs] = useState([
    {
      id: 1,
      title: "The Art of Slow Living",
      excerpt: "Discovering beauty in the everyday moments that often pass us by unnoticed. A journey through mindfulness and presence.",
      author: "Sarah Mitchell",
      date: "Feb 10, 2026",
      readTime: "5 min read",
      category: "Lifestyle"
    },
    {
      id: 2,
      title: "Conversations with Strangers",
      excerpt: "What happened when I decided to talk to one new person every day for a month. The unexpected connections that changed my perspective.",
      author: "James Chen",
      date: "Feb 8, 2026",
      readTime: "8 min read",
      category: "Stories"
    },
    {
      id: 3,
      title: "Building Things That Last",
      excerpt: "In a world of constant change, creating work that stands the test of time. Thoughts on craftsmanship and intentionality.",
      author: "Maria Garcia",
      date: "Feb 5, 2026",
      readTime: "6 min read",
      category: "Craft"
    },
    {
      id: 4,
      title: "Learning to Cook Without Recipes",
      excerpt: "The freedom that comes from understanding ingredients rather than following instructions. How intuitive cooking transformed my relationship with food.",
      author: "David Park",
      date: "Feb 3, 2026",
      readTime: "7 min read",
      category: "Food"
    },
    {
      id: 5,
      title: "The Books That Changed My Mind",
      excerpt: "A personal exploration of the literature that fundamentally shifted how I see the world, from classic philosophy to contemporary fiction.",
      author: "Emma Thompson",
      date: "Jan 30, 2026",
      readTime: "9 min read",
      category: "Books"
    },
    {
      id: 6,
      title: "Running at Dawn",
      excerpt: "Why I wake up before sunrise to run through empty streets. Reflections on solitude, discipline, and the quiet magic of early mornings.",
      author: "Marcus Williams",
      date: "Jan 28, 2026",
      readTime: "6 min read",
      category: "Wellness"
    },
    {
      id: 7,
      title: "Letters to My Younger Self",
      excerpt: "If I could send advice back in time, what would I say? An honest reflection on growth, mistakes, and the wisdom that only comes with experience.",
      author: "Sofia Rodriguez",
      date: "Jan 25, 2026",
      readTime: "5 min read",
      category: "Personal Growth"
    },
    {
      id: 8,
      title: "Finding Silence in the City",
      excerpt: "Urban environments are loud, chaotic, and overwhelming. But pockets of peace exist if you know where to look.",
      author: "Alex Kim",
      date: "Jan 22, 2026",
      readTime: "4 min read",
      category: "Urban Living"
    },
    {
      id: 9,
      title: "The Practice of Gratitude",
      excerpt: "Beyond thankfulness journals and morning affirmations—what does it really mean to cultivate gratitude as a daily practice?",
      author: "Rachel Green",
      date: "Jan 20, 2026",
      readTime: "7 min read",
      category: "Mindfulness"
    },
    {
      id: 10,
      title: "Why I Quit Social Media",
      excerpt: "The unexpected freedom of disconnecting from the digital world. What I lost, what I gained, and what I learned about presence.",
      author: "Tom Anderson",
      date: "Jan 18, 2026",
      readTime: "8 min read",
      category: "Technology"
    }
  ]);

  return (
    <Layout>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-16 animate-slideUp">
          <h1 className="font-display text-6xl text-warmBrown mb-4 leading-tight">
            Stories worth<br />reading
          </h1>
          <p className="text-xl text-warmBrown/60 max-w-xl">
            Thoughtful essays and personal narratives from writers around the world
          </p>
        </div>

        <div className="space-y-12">
          {blogs.map((blog, index) => (
            <article 
              key={blog.id} 
              className="group cursor-pointer animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Link to={`/edit/${blog.id}`} className="block">
                <div className="flex gap-8 items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-xs font-medium text-warmTerra bg-warmTerra/10 px-3 py-1 rounded-full">
                        {blog.category}
                      </span>
                      <span className="text-sm text-warmBrown/40">·</span>
                      <span className="text-sm text-warmBrown/60">{blog.date}</span>
                    </div>
                    <h2 className="font-display text-3xl text-warmBrown mb-3 group-hover:text-warmTerra transition-colors">
                      {blog.title}
                    </h2>
                    <p className="text-warmBrown/70 leading-relaxed mb-4">
                      {blog.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-warmBrown/60">
                      <span>{blog.author}</span>
                      <span>·</span>
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  <div className="w-48 h-32 bg-gradient-to-br from-warmPeach/30 to-warmTerra/20 rounded-2xl flex-shrink-0 group-hover:shadow-warm transition-all transform group-hover:-translate-y-1" />
                </div>
              </Link>
              <div className="mt-8 border-t border-warmBrown/10" />
            </article>
          ))}
        </div>
      </div>
    </Layout>
  );
}

export default BlogList;