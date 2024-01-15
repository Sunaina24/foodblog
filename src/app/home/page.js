import React from 'react';
import Image from 'next/image'
import styles from '../styles/Home.module.css';

const Home = () => {
  return (
    <div className={styles.homecontainer}>
      <h1>Welcome to My Food Blog!</h1>
      <p>Explore delicious recipes and cooking tips.</p>
    <div className={styles.imageContainer}>
        <Image
          src="/images/pasta.jpg"
          alt="Delicious Pasta"
          width={600}
          height={400}
        />
        <Image
          src="/images/pizza.jpeg"
          alt="Perfect Pizza"
          width={600}
          height={400}
        />
        <Image
          src="/images/soup.jpg"
          alt="Soup"
          width={600}
          height={400}
        />
        <Image
          src="/images/garlicbread.jpeg"
          alt="Garlic Bread"
          width={600}
          height={400}
        />
        </div>
    </div>
  );
};

export default Home;
