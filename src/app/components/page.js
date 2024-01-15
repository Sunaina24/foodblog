import React from 'react';
import styles from '../styles/BlogPost.module.css';

const BlogPost = ({ title, content }) => {
  return (
    <div className={styles.blogpost}>
      <h2 className={styles.blogtitle}>{title}</h2>
      <p className={styles.blogcontent}>{content}</p>
    </div>
  );
};

export default BlogPost;
