
import React from 'react';
import Link from 'next/link';
import BlogPost from '../app/components/page';
import navbarstyles from '../app/styles/Navbar.module.css';
import styles from '../app/styles/BlogPost.module.css'



const Blog = () => {
  const posts = [
    { title: 'Delicious Pasta Recipe', content: 'Lorem ipsum dolor sit amet...' },
    { title: 'The Perfect Pizza Dough', content: 'Consectetur adipiscing elit...' },
    // Add more posts as needed
  ];

  return (
    <div className={styles.blogContainer}>
      <nav className={navbarstyles.navbar}>
        <ul>
          <li><Link href="/home">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          <li><Link href="/contact">Contact Us</Link></li>
          <li><Link href="/addrecipe">Add Recipe</Link></li>
        </ul>
      </nav>
      <h1>My Food Blog</h1>
      {posts.map((post, index) => (
        <BlogPost key={index} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default Blog;