
import React from 'react';
import styles from '../styles/RecipeForm.module.css';

const RecipeForm = () => {
  return (
    <div className={styles.recipeform}>
      <h2>Add a New Recipe</h2>
      <form>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" name="title" required />

        <label htmlFor="ingredients">Ingredients:</label>
        <textarea id="ingredients" name="ingredients" required />

        <label htmlFor="instructions">Instructions:</label>
        <textarea id="instructions" name="instructions" required />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RecipeForm;
