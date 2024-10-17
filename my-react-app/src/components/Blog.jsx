import React from 'react';
import './Blog.css';

const blogs = [
  {
    title: 'The Benefits of Essential Oils for Mental Health',
    description: 'Discover how essential oils can help reduce stress and improve well-being.',
  },
  {
    title: 'How to Use Essential Oils in Your Daily Routine',
    description: 'Learn practical ways to incorporate essential oils into your lifestyle.',
  },
  {
    title: 'Top 5 Essential Oils for Focus and Concentration',
    description: 'Boost your productivity with these highly effective oils.',
  },
];

const Blog = () => {
  return (
    <section className="blog">
      <h2>Latest Articles</h2>
      <div className="blog-list">
        {blogs.map((blog, index) => (
          <div className="blog-card" key={index}>
            <h3>{blog.title}</h3>
            <p>{blog.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
