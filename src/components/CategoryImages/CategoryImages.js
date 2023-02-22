import React from 'react'
import './CategoryImages.scss'
import { images } from '../../constants'

/**
 * Component to display the Category images generated in Card Format
 */

/**
 *@component Component to display the Category images generated in Card Format
 *
 * @param  {String} name The category name
 * @param  {String}  mainImageUrl  Category Image
 * @param  {String}  description Category description
 * @return  {Jsx}  It returns jsx for render a category images.
 *
 */

const CategoryImages = (props) => {
  return (
    <div className="category-image-card">
      <div className="card-image">
        <img className="categoryImage" src={props.image} alt="category" />
        <div>
          <img
            className="downloadIcon"
            src={images.ImageDownloadIcon}
            alt="download"
          />
        </div>
      </div>
    </div>
  )
}

export default CategoryImages
