import React, { useState, useEffect } from 'react'
import CategoryImages from '../../components/CategoryImages/CategoryImages'
import data from '../../TestData/Categories'
import { MdArrowBackIos } from 'react-icons/md'
import './CategoryResults.scss'
import { useNavigate } from 'react-router'

/**
 * Component to display the page after category Images are Generated
 *
 */

/**
 * Used for displaying the result images
 */

const CategoryResults = () => {
  const [categoriesResult, setCategoriesResult] = useState([])
  useEffect(() => {
    setCategoriesResult((current) => [...current, ...data])
    return () => {
      setCategoriesResult([])
    }
  }, [])

  /**
   * Used for displaying the rloading GIF  .Moving forward the fetch operation can be done here
   */

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 5000)

  const navigate = useNavigate()

  return (
    <div>
      <div className="content-title">
        <div className="d-flex flex-row">
          <MdArrowBackIos
            style={{ marginTop: 5 }}
            onClick={() => navigate(-1)}
          />
          <h3>Animals/Wildlife</h3>
        </div>
        <span>Choose the best image category to start creating one</span>
      </div>
      <div>
        {loading ? (
          <div className=" w-100 gif justify-content-center align-content-center">
            <div class="loader"> </div>
            <div>Loading Results...</div>
          </div>
        ) : (
          <div className="row">
            {categoriesResult.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-md-3 col-sm-6 col-lg-3 mb-3 mb-md-4"
                >
                  <CategoryImages image={item.image} />
                </div>
              )
            })}
          </div>
        )}
      </div>
      <div className='d-flex justify-content-center' >
        <button className="btn btn-generate" >
          Generate More
        </button>
      </div>
    </div>
  )
}

export default CategoryResults
