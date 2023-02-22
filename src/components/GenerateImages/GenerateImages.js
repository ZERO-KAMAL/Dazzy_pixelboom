import React, { useState, useEffect } from "react";
import "./GenerateImages.scss";
import GenerateImageCard from "../GenerateImageCard/GenerateImageCard";
import { images } from "../../constants";

/**
 * Page to preview the Images like New Search, Pending searched and previous searched images
 * @param   {Array} data  array of images
 * @component    Generate images
 */

const data = [
  {
    image: images.generateCardImage,
  },
  {
    image: images.Lady,
  },
  {
    image: images.generateCardImage,
  },
  {
    image: images.Lady,
  },
  {
    image: images.generateCardImage,
  },
  {
    image: images.Lady,
  },
  {
    image: images.generateCardImage,
  },
  {
    image: images.Lady,
  },
  {
    image: images.generateCardImage,
  },
  {
    image: images.Lady,
  },
  {
    image: images.generateCardImage,
  },
  {
    image: images.Lady,
  },
  {
    image: images.generateCardImage,
  },
  {
    image: images.Lady,
  },
  {
    image: images.generateCardImage,
  },
  {
    image: images.Lady,
  },
  {
    image: images.generateCardImage,
  },
  {
    image: images.Lady,
  },
];

const GenerateImages = (props) => {
  //fetching generate Images
  const [generatedImage, setGeneratedImage] = useState([]);
  const [visibleItem, setvisibleItem] = useState(12);
  const handelLodeMore = () => {
    setvisibleItem((prevValue) => prevValue + 4);
  };

  useEffect(() => {
    setGeneratedImage((current) => [...current, ...data]);
    return () => {
      setGeneratedImage([]);
    };
  }, []);

  return (
    <>
      <div className="generateImages">
        <div className="content-title d-flex  align-items-center ">
          <img src={images.BackArowIcon} onClick={props.onClick} alt="icon" />
          <h3 className="mb-0 ms-3">Generated Images</h3>
        </div>
        <div className="row">
          {generatedImage.slice(0, visibleItem).map((item) => {
            return (
              <div className="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-6">
                <GenerateImageCard mainImageUrl={item.image} />
              </div>
            );
          })}
        </div>
        <div className="mt-4 d-flex justify-content-center">
          <button className="btn btn-primary" onClick={handelLodeMore}>
            <img
              src={images.ImageGeneraterIcon}
              alt="imageIcon"
              className="me-2"
            />
            Generate More
          </button>
        </div>
      </div>
    </>
  );
};

export default GenerateImages;
