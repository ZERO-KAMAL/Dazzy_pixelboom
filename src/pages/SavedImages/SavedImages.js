import React, {  useState } from 'react'
import SavedImageCard from '../../components/SavedImageCard/SavedImageCard'
import { images } from '../../constants'
import Form from 'react-bootstrap/Form'
import Pagination from 'react-bootstrap/Pagination'


/**
 * Page to preview the Images that are saved
 * 
 * @component    Saved images
 */


const SavedImages = () => {
  const data = [
    {
      image: images.generateCardImage,
      title: 'Deer.jpg',
      date: '1-1-1',
    },
    {
      image: images.Lady,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.generateCardImage,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.Lady,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.generateCardImage,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.Lady,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.generateCardImage,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.Lady,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.generateCardImage,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.Lady,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.generateCardImage,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.Lady,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.generateCardImage,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.Lady,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.generateCardImage,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.Lady,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.generateCardImage,
      title: 'Deer',
      date: '1-1-1',
    },
    {
      image: images.Lady,
      title: 'Deer',
      date: '1-1-1',
    },
  ]

   //Handle Pagination
  var [active, setActive] = useState(1)
  var pages = []
  const numOfEpisPerPage = 8
  var indOfLastEpi = active * numOfEpisPerPage
  var indOfFirstEpi = indOfLastEpi - numOfEpisPerPage
  const noOfPages = data.length/numOfEpisPerPage;


  for (let number = 1; number <= noOfPages; number++) {
    pages.push(
      <Pagination.Item
        key={number}
        active={number === active}
        onClick={() => pagination(number)}
        
      >
        {number}
      </Pagination.Item>
    )
  }
 
  function pagination(number) {
    indOfLastEpi = number * numOfEpisPerPage
    indOfFirstEpi = indOfLastEpi - numOfEpisPerPage
    setActive(number)   
  }


  return (
   <>
      <div className="saveImages">
        <div className="dashboard-heading-dropdown d-flex align-items-center justify-content-between flex-wrap">
          <div className="content-title">
            <h3>Saved Images</h3>
          </div>
          <div className="dashboard-timeframe-dropdown">
            <Form.Select>
              <option>
                Timeframe: <span>All time</span>
              </option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </div>
        </div>
        {data.length > 0 ? (
          <>
            <div className="row">
              {data.slice(indOfFirstEpi, indOfLastEpi).map((item) => {
                return (
                  <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-6">
                    <SavedImageCard
                      mainImageUrl={item.image}
                      imageTitle={item.title}
                      date={item.date}
                    />
                  </div>
                )
              })}
            </div>
            <div className="container d-flex justify-content-center">
              <Pagination size="sm">
                <Pagination.Prev
                  onClick={() => {
                    if (active > 1) {
                      pagination(active - 1)
                    }
                  }}
                />
                {pages}
                <Pagination.Next
                  onClick={() => {
                    if (active < noOfPages) {
                      pagination(active + 1)
                    }
                  }}
                />
              </Pagination>
            </div>
          </>
        ) : (
          <div className="d-flex flex-column empty justify-content-center align-items-center">
            <img src={images.NoImageIcon} alt="noImages" />
            <p>No Images</p>
          </div>
        )}
      </div>
    </>
  )
}

export default SavedImages
