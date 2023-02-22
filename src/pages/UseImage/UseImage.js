import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import "./UseImage.scss";
import ImageUploader from "../../components/ImageUploader/ImageUploader";
import GenerateImage from "../../components/GenerateImages/GenerateImages";
import RangeSlider from "react-bootstrap-range-slider";
import dataPrevTable from "../../TestData/PreviousTableData";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

/**
 * Page to preview new searches images, pending images and previous images
 * @param  {Number} value having starting number of ai slider
 * @param  {Number}  setValue to set the value of ai slider
 * @param  {Number} quantityValue having starting  number of quantity slider
 * @param  {Number}  setQuantityValue to set the value of quantity slider
 * @component
 * @ImageUploader passing image uploader data to this component.
 * @SwiperSlider show uploaded images.
 * @return  {Jsx}  It returns jsx to render image uploader, sliders and heading.
 *
 * )
 */

const UseImage = () => {
  const [value, setValue] = useState(0);
  const [quantityValue, setQuantityValue] = useState(0);
  const [activeTab, setActiveTab] = useState("newSearches");
  const [selectedFile, setSelectedFile] = useState([]);

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  const [tableData, setTableData] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const handleResult = () => {
    setShowResult(!showResult);
  };
  useEffect(() => {
    setTableData((current) => [...current, ...dataPrevTable]);
    return () => {
      setTableData([]);
    };
  }, []);

  const removeSlectedImage = (index) => {
    console.log("hello", index);
    let arr = [...selectedFile];
    arr.splice(index, 1);
    setSelectedFile((current) => [...arr]);
  };

  return (
    <>
      <div className="useImage">
        <div className="tabs">
          <button
            className={`tab-item ${
              activeTab === "newSearches" ? "active" : ""
            }`}
            onClick={() => onClickTabItem("newSearches")}
          >
            New Search
          </button>

          <button
            className={`tab-item ${
              activeTab === "pendingSearches" ? "active" : ""
            }`}
            onClick={() => onClickTabItem("pendingSearches")}
          >
            Pending Searches
            <span></span>
          </button>
          <button
            className={`tab-item ${
              activeTab === "previousSearches" ? "active" : ""
            }`}
            onClick={() => onClickTabItem("previousSearches")}
          >
            Previous Searches
            <span></span>
          </button>
        </div>
        <div className="tab-content">
          {activeTab === "newSearches" && (
            <div className="tab-content_wrapper">
              <div class="container">
                <div className="row justify-content-center">
                  <div className=" col-12 col-lg-7 col-xl-7">
                    <div className="content-title">
                      <h3>Upload A Reference Image</h3>
                      <span>
                        Upload a reference to create more interested images
                      </span>
                    </div>

                    <ImageUploader
                      image={images.ImageUploadIcon}
                      text="Drag an image here or"
                      uploadFileText="upload a file"
                      onFileSelectSuccess={(file) => {
                        console.log(file.name);
                        let reader = new FileReader();
                        reader.onload = function (e) {
                          setSelectedFile((current) => [
                            ...current,
                            e.target.result,
                          ]);
                        };
                        reader.readAsDataURL(file);
                      }}
                    />

                    <div className="swiper-slider-wrapper">
                      <Swiper
                        className="swiperSlider"
                        modules={[Navigation, Pagination, Scrollbar, A11y]}
                        spaceBetween={10}
                        slidesPerView={5}
                        navigation
                        onSwiper={(swiper) => console.log(swiper)}
                        onSlideChange={() => console.log("slide change")}
                      >
                        {selectedFile.map((item, index) => {
                          return (
                            <SwiperSlide>
                              <div className="swiperSlider-item">
                                <img
                                  src={item}
                                  alt=""
                                  className="swiperSlider-image"
                                />
                                <button
                                  onClick={() => removeSlectedImage(index)}
                                  className="swiper-slider-close-icon"
                                  type="button"
                                  aria-label="Close"
                                >
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                            </SwiperSlide>
                          );
                        })}
                      </Swiper>
                    </div>

                    <form action="" className="mt-5">
                      <div className="mt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-title">
                            <h4>Size of image</h4>
                            <span className="sub-title">
                              Select the format this image will be created in
                            </span>
                          </div>
                        </div>
                        <div class="form-group mt-3">
                          <select
                            class="form-select"
                            aria-label="Default select example"
                          >
                            <option selected>Select</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-title">
                            <h4>How wild do you want the AI to go?</h4>
                            <span className="sub-title">
                              Decide how “wild” the image generation process
                              should be from 1 to 6
                            </span>
                          </div>
                        </div>
                        <div class="form-group mt-3 ">
                          <div className="field d-flex align-items-center justify-content-center">
                            <span className="value left">0</span>
                            <RangeSlider
                              className="range"
                              min={0}
                              max={6}
                              step={1}
                              value={value}
                              // tooltip="on"
                              onChange={(changeEvent) =>
                                setValue(changeEvent.target.value)
                              }
                            />
                            <span className="value right">6</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-title">
                            <h4>Quantity</h4>
                            <span className="sub-title">
                              The number of image to generate
                            </span>
                          </div>
                        </div>
                        <div class="form-group mt-3">
                          <div className="field d-flex align-items-center justify-content-center">
                            <span className="value left">0</span>
                            <RangeSlider
                              className="range"
                              variant="primary"
                              min={0}
                              max={10}
                              step={1}
                              value={quantityValue}
                              // tooltip="on"
                              onChange={(changeEvent) =>
                                setQuantityValue(changeEvent.target.value)
                              }
                            />
                            <span className="value right">10</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-title">
                            <h4>Face Enhance</h4>
                            <span className="sub-title">
                              Active will run the image through our facial
                              enhancement/fixing engine
                            </span>
                          </div>
                        </div>
                        <div class="form-group mt-3 d-flex align-items-center justify-content-start">
                          <div class="form-check">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                            ></input>
                            <label
                              class="form-check-label ms-2"
                              for="flexRadioDefault1"
                            >
                              Active
                            </label>
                          </div>
                          <div class="form-check ms-4">
                            <input
                              class="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                              checked
                            ></input>
                            <label
                              class="form-check-label ms-2"
                              for="flexRadioDefault2"
                            >
                              Disabled
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="use-image-generate-button">
                        <button className="btn-generate">Generate</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
          {activeTab === "pendingSearches" && (
            <div className="tab-content_wrapper">
              <div className="table-responsive">
                <table className="table ">
                  <thead>
                    <tr>
                      <th scope="col">S.N</th>
                      <th scope="col">Created</th>
                      <th scope="col">Prompt</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {tableData.length > 0 ? (
                      tableData.slice(0, 4).map((item, index) => {
                        return (
                          <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>
                              <div className="table_createDate d-flex align-items-center">
                                <img src={images.CategoryIcon} alt="" />
                                <div className="date ms-2">{item.date}</div>
                              </div>
                            </td>
                            <td>
                              <p>{item.prompt}</p>
                            </td>
                            <td>
                              <div className="table_processing d-flex align-items-center">
                                <i class="ri-loader-4-line me-2"></i>In
                                processing
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    ) : (
                      <td colSpan={4} className="no-data text-center">
                        No data
                      </td>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          )}
          {activeTab === "previousSearches" && (
            <div className="tab-content_wrapper">
              {!showResult && (
                <div className="table-responsive">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th scope="col">S.N</th>
                        <th scope="col">Created</th>
                        <th scope="col">Prompt</th>
                        <th scope="col"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {tableData.length > 0 ? (
                        tableData.map((item, index) => {
                          return (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>
                              <td>
                                <div className="table_createDate d-flex align-items-center">
                                  <img src={images.CategoryIcon} alt="" />
                                  <div className="date ms-2">{item.date}</div>
                                </div>
                              </td>
                              <td>
                                <p>{item.prompt}</p>
                              </td>
                              <td>
                                <button
                                  className="btn-viewResult"
                                  onClick={handleResult}
                                >
                                  View result
                                  <img src={images.RightVectorIcon} alt="" />
                                </button>
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <td colSpan={4} className="no-data text-center">
                          No data
                        </td>
                      )}
                    </tbody>
                  </table>
                </div>
              )}
              {showResult && <GenerateImage onClick={handleResult} />}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UseImage;
