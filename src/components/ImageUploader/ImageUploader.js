import React, { useRef } from "react";
import "./ImageUploader.scss";

/**
 *@component Component to upload new image from your device
 *
 * @param  {String} text image uploader text
 * @param  {String}  image  image uploader icon
 * @param  {String}  description image uploader file upload button text
 * @return  {Jsx}  It returns jsx for render a image uploader to upload image from your device.
 *
 */

const ImageUploader = ({
  image,
  text,
  uploadFileText,
  onFileSelectSuccess,
}) => {
  const fileInput = useRef(null);

  const handleFileInput = (e) => {
    // handle validations
    const file = e.target.files[0];
    onFileSelectSuccess(file);
  };
  return (
    <div>
      <div className="upload-file-background" useRef={fileInput}>
        <img src={image} alt="newImage" />
        <div className="upload-file-wrapper">
          <p>{text}</p>
          <input
            type="file"
            name="file"
            id="file"
            className="inputfile"
            onChange={handleFileInput}
          />
          <label className="input-label" for="file">
            {uploadFileText}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
