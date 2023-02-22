/**
 * @component    Image Card having a image and a download button
 */
import React, { useState } from "react";
import "./GenerateImageCard.scss";
import { images } from "../../constants";

const GenerateImageCard = (props) => {
  const { mainImageUrl } = props;

  //popup and Image zoom in out
  const [isOpen, setIsOpen] = useState(false);
  const [zoom, setZoom] = useState(1);
  const [originalZoom] = useState(1);

  const handleZoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const handleZoomOut = () => {
    if (zoom > 0.7) {
      setZoom(zoom - 0.1);
    }
  };
  const preventClose = (event) => {
    event.stopPropagation();
  };

  const togglePopup = () => {
    setIsOpen(!isOpen);
    setZoom(originalZoom);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  };

  return (
    <div className="generate-card-wrapper" onClick={togglePopup}>
      <div className="generate-download-icon">
        <img src={images.DownloadImageIcon} alt="" />
      </div>
      <div className="generate-image-card">
        <img src={mainImageUrl} alt="generatedImage" />
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
                        alt="generatedImage"
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
  );
};

export default GenerateImageCard;
