import React from 'react';
import './Blog.css';

const posts = [
  {
    title: 'Şuanda Bulunmamaktadır',
    org: '',
    date: '2025',
     logo: process.env.PUBLIC_URL + '',
    link: '#'
  }
];

const Blog = () => (
  <section className="blog-section">
    <div className="section-inner">
      <h2 className="section-title">Blog</h2>
      <div className="blog-list">
        {posts.map((post, idx) => (
          <a className="blog-btn" key={idx} href={post.link} target="_blank" rel="noopener noreferrer">
            <h3>{post.title}</h3>
            <p>{post.summary}</p>
            <div className="blog-meta">
              <span>{post.author}</span>
              <span>{new Date(post.date).toLocaleDateString('tr-TR')}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Blog; 