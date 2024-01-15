import React from 'react';
import styles from '../styles/Contact.module.css';

const Contact = () => {
  return (
    <div className={styles.contactcontainer}>
      <h1>Contact Us</h1>
      <p>
        Have questions or feedback? Reach out to us using the form below, and we&apos;ll get back to you as soon as
        possible.
      </p>
      <ul>
        <li>Email: <a href="mailto:msunaina2471@gmail.com">msunaina2471@gmail.com</a></li>
        <li>Phone: 1234567890</li>
      </ul>
    </div>
  );
};

export default Contact;
