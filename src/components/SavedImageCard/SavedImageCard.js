import React, { useState } from 'react'
import './SavedImageCard.scss'
import { images } from '../../constants'


/**
 *@component SavedImageCard Component to show saved Image card having a image, name  and its description
 *
 * @param  {String}  mainImageUrl  Category Image
 * @param  {String}  date Category description
 * @param  {String}  imageTitle Category description
 * @return  {Jsx}  It returns jsx for render a category card.
 *
 */

const SavedImageCard = (props) => {
  const { mainImageUrl, date, imageTitle } = props
  //popup and Image zoom in out
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [originalZoom] = useState(1)

  const handleZoomIn = () => {
    setZoom(zoom + 0.1)
  }

  const handleZoomOut = () => {
    if (zoom > 0.7) {
      setZoom(zoom - 0.1)
    }
  }
  const preventClose = (event) => {
    event.stopPropagation()
  }

  const togglePopup = () => {
    setIsOpen(!isOpen)
    setZoom(originalZoom)
    if (!isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }
  return (
    <div className="saveImage-card-wrapper" onClick={togglePopup}>
      <div className="saveImage-download-icon mb-4">
        <img src={images.DownloadImageIcon} alt="" />
      </div>
      <div className="saveImage-edit-icon mb-4">
        <img src={images.editTitleIcon} alt="" />
      </div>
      <div className="saveImage-image-card">
        <img src={mainImageUrl} alt="saveImagedImage" />
        <div className='imgTitle'>{imageTitle}</div>
        <div className='imgDate'>{date}</div>
      </div>
      {isOpen && (
        <div className="popup" onClick={preventClose}>
          <div className="popup_wrapper">
            <div className="image__view">
              <div className="row d-flex justify-content-center">
                <div className="col-md-6">
                  <div className="image__view-wrapper d-flex justify-content-end flex-column ">
                    <div className="popup_toogleButtons d-flex align-items-center">
                      <button
                        onClick={handleZoomIn}
                        className="btn btn-zoomUp me-2"
                      >
                        <i class="ri-zoom-in-line"></i>
                      </button>
                      <button
                        onClick={handleZoomOut}
                        className="btn btn-zoomDown me-2"
                      >
                        <i class="ri-zoom-out-line"></i>
                      </button>
                      <button
                        className="btn close_popUp-btn "
                        onClick={togglePopup}
                      >
                        <i class="ri-close-line"></i>
                      </button>
                    </div>
                    <img
                      src={mainImageUrl}
                      alt="saveImagedImage"
                      className="mainImg"
                      style={{ transform: `scale(${zoom})` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default SavedImageCard
