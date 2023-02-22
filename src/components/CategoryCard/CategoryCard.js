/**
 * @component    Category Card having a image, name  and its description
 */

import React from "react";
import "./CategoryCard.scss";

/**
 *@component Component to show  category card having a image, name  and its description
 *
 * @param  {String} name The category name
 * @param  {String}  mainImageUrl  Category Image
 * @param  {String}  description Category description
 * @return  {Jsx}  It returns jsx for render a category card.
 *
 */

const CategoryCard = ({ name, mainImageUrl, description }) => {
  return (
    <div className="category-card">
      <div className="card-image">
        <img src={mainImageUrl} alt="category" />
      </div>
      <div className="category-card_content">
        <h2>{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CategoryCard;