import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import RangeSlider from "react-bootstrap-range-slider";
import GenerateImage from "../../components/GenerateImages/GenerateImages";
import dataPrevTable from "../../TestData/PreviousTableData";
import "./TypePrompt.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Grid, Navigation } from "swiper";

const data = [
  {
    title: "3D Rebder",
    image: images.ThemeImage1,
  },
  {
    title: "Cartoon",
    image: images.ThemeImage2,
  },
  {
    title: "Drawing",
    image: images.ThemeImage3,
  },
  {
    title: "Line Art",
    image: images.ThemeImage3,
  },
  {
    title: "Painting",
    image: images.ThemeImage2,
  },
  {
    title: "Photograph",
    image: images.ThemeImage1,
  },
  {
    title: "Painting",
    image: images.ThemeImage2,
  },
  {
    title: "Photograph",
    image: images.ThemeImage1,
  },
  {
    title: "Line Art",
    image: images.ThemeImage3,
  },
  {
    title: "Painting",
    image: images.ThemeImage2,
  },
  {
    title: "Photograph",
    image: images.ThemeImage1,
  },
  {
    title: "Painting",
    image: images.ThemeImage2,
  },
  {
    title: "Photograph",
    image: images.ThemeImage1,
  },
];

const TypePrompt = () => {
  const [value, setValue] = useState(0);
  const [quantityValue, setQuantityValue] = useState(0);
  const [tableData, setTableData] = useState([]);

  //popup
  const [isOpen, setIsOpen] = useState(false);
  const toggleWizard = (e) => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    e.preventDefault();
  };
  // tabs
  const [activeTab, setActiveTab] = useState("newSearches");
  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };
  //multi-step slider
  const [step, setStep] = useState(1);
  const totalSteps = 5;
  const handleNext = () => {
    setStep(Math.min(step + 1, totalSteps));
  };
  const handlePrev = () => {
    setStep(Math.max(step - 1, 1));
  };

  //view result
  const [showResult, setShowResult] = useState(false);
  const handleResult = () => {
    setShowResult(!showResult);
  };

  //sliderdata fetching
  const [sliderData, setSliderData] = useState([]);
  useEffect(() => {
    setTableData((current) => [...current, ...dataPrevTable]);
    setSliderData((current) => [...current, ...data]);
    return () => {
      setSliderData([]);
      setTableData([]);
    };
  }, []);

  return (
    <>
      <div className="tabs">
        <button
          className={`tab-item ${activeTab === "newSearches" ? "active" : ""}`}
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
            <div className="TypePrompt_settings">
              <div
                className="row d-flex justify-content-center
        "
              >
                <div className="col-lg-12 col-xl-7">
                  <div className="TypePrompt_settings-wrapper">
                    <div className="content-title">
                      <h3>Settings</h3>
                      <span>
                        Type what you'd like to see, and watch it come to life.
                      </span>
                    </div>
                    <form action="" className="mt-5">
                      <div className="mt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-title">
                            <h4>Describe the image you want to see</h4>
                            <span className="sub-title">
                              Include objects, color, locations, people,
                              landscape...
                            </span>
                          </div>
                          <button
                            className="btn btn-wizard"
                            onClick={toggleWizard}
                          >
                            <img src={images.Magic} alt="" className="me-1" />
                            Wizard
                          </button>
                        </div>
                        <div class="form-group mt-3">
                          <textarea
                            class="form-control"
                            name=""
                            rows="4"
                            placeholder="Eg. A girl with long blonde hair and big eyes in the grass at sunset"
                          ></textarea>
                        </div>
                      </div>
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
                            <option selected>Open this select menu</option>
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
                              name=""
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
                              name=""
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
                      <div className="mt-4 d-flex justify-content-end">
                        <button className="btn btn-primary">Generate</button>
                      </div>
                    </form>
                  </div>
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
                              <i class="ri-loader-4-line me-2"></i>In processing
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

      {isOpen && (
        <div className="popup">
          <div className="popup_wrapper">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-md-7 subjectWizard_wrapper  border-bg">
                  {step === 1 && (
                    <div className="subjectWizard ">
                      <div className="d-flex justify-content-end">
                        <button className="btn" onClick={toggleWizard}>
                          <img src={images.Close} alt="" />
                        </button>
                      </div>
                      <div className="content-title">
                        <h3>Subject Wizard</h3>
                        <span>
                          Our subject wizard will help you describe the subject
                          you want to use in your image generation
                        </span>
                      </div>
                      <div className="mt-4">
                        <div className="d-flex align-items-center justify-content-between">
                          <div className="form-title">
                            <h4>Describe the image you want to see</h4>
                          </div>
                        </div>
                        <div class="form-group mt-3">
                          <textarea
                            class="form-control"
                            name=""
                            rows="3"
                            placeholder="Eg. A girl with long blonde hair and big eyes in the grass at sunset"
                          ></textarea>
                        </div>
                      </div>
                      <div className="mt-4">
                        <div className="form-title  border-bg p-1">
                          <h4>Theme</h4>
                          <span className="sub-title">
                            This setting has the biggest influence on image
                            generation besides the subject and decides the style
                            medium
                          </span>
                        </div>
                        <div className="subjecWizard_slider mt-3">
                          <Swiper
                            slidesPerView={1}
                            grid={{
                              rows: 2,
                              fill: "row",
                            }}
                            spaceBetween={10}
                            navigation={true}
                            modules={[Grid, Navigation]}
                            className="mySwiper"
                            breakpoints={{
                              640: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                              },
                              768: {
                                slidesPerView: 2,
                                spaceBetween: 20,
                              },
                              1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                              },
                            }}
                          >
                            {sliderData.map((item) => {
                              return (
                                <SwiperSlide>
                                  <div className="sliderGrid-item">
                                    <img
                                      src={item.image}
                                      alt=""
                                      className="item-image"
                                    />
                                    <div class="item-check">
                                      <input
                                        class="form-check-input"
                                        type="radio"
                                        name="flexRadioDefault"
                                        id="flexRadioDefault2"
                                        // checked
                                      ></input>
                                    </div>
                                    <div className="item-title">
                                      {item.title}
                                    </div>
                                  </div>
                                </SwiperSlide>
                              );
                            })}
                          </Swiper>
                        </div>
                      </div>
                    </div>
                  )}
                  {step === 2 && (
                    <div>
                      <div className="subjectWizard ">
                        <div className="d-flex justify-content-end">
                          <button className="close-btn" onClick={toggleWizard}>
                            <img src={images.Close} alt="" />
                          </button>
                        </div>
                        <div className="content-title">
                          <h3>Subject Wizard</h3>
                          <span>
                            Our subject wizard will help you describe the
                            subject you want to use in your image generation
                          </span>
                        </div>
                        <div className="mt-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="form-title">
                              <h4>Describe the image you want to see</h4>
                            </div>
                          </div>
                          <div class="form-group mt-3">
                            <textarea
                              class="form-control"
                              name=""
                              rows="3"
                              placeholder="Eg. A girl with long blonde hair and big eyes in the grass at sunset"
                            ></textarea>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="form-title  border-bg p-1">
                            <h4>Artist to draw inspiration from</h4>
                            <span className="sub-title">
                              This setting has the biggest influence on image
                              generation besides the subject and decides the
                              style medium
                            </span>
                          </div>
                          <div className="subjecWizard_slider mt-3">
                            <Swiper
                              slidesPerView={1}
                              grid={{
                                rows: 2,
                                fill: "row",
                              }}
                              spaceBetween={10}
                              navigation={true}
                              modules={[Grid, Navigation]}
                              className="mySwiper"
                              breakpoints={{
                                640: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                768: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetween: 30,
                                },
                              }}
                            >
                              {sliderData.map((item) => {
                                return (
                                  <SwiperSlide>
                                    <div className="sliderGrid-item">
                                      <img
                                        src={item.image}
                                        alt=""
                                        className="item-image"
                                      />
                                      <div class="item-check">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault2"
                                          // checked
                                        ></input>
                                      </div>
                                      <div className="item-title">
                                        {item.title}
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                );
                              })}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {step === 3 && (
                    <div>
                      <div className="subjectWizard ">
                        <div className="d-flex justify-content-end">
                          <button className="close-btn" onClick={toggleWizard}>
                            <img src={images.Close} alt="" />
                          </button>
                        </div>
                        <div className="content-title">
                          <h3>Subject Wizard</h3>
                          <span>
                            Our subject wizard will help you describe the
                            subject you want to use in your image generation
                          </span>
                        </div>
                        <div className="mt-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="form-title">
                              <h4>Describe the image you want to see</h4>
                            </div>
                          </div>
                          <div class="form-group mt-3">
                            <textarea
                              class="form-control"
                              name=""
                              rows="3"
                              placeholder="Eg. A girl with long blonde hair and big eyes in the grass at sunset"
                            ></textarea>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="form-title  border-bg p-1">
                            <h4>Technique</h4>
                            <span className="sub-title">
                              Use this technique to create balanced and
                              aesthetically pleasing photograph
                            </span>
                          </div>
                          <div className="subjecWizard_slider mt-3">
                            <Swiper
                              slidesPerView={1}
                              grid={{
                                rows: 2,
                                fill: "row",
                              }}
                              spaceBetween={10}
                              navigation={true}
                              modules={[Grid, Navigation]}
                              className="mySwiper"
                              breakpoints={{
                                640: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                768: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetween: 30,
                                },
                              }}
                            >
                              {sliderData.map((item) => {
                                return (
                                  <SwiperSlide>
                                    <div className="sliderGrid-item">
                                      <img
                                        src={item.image}
                                        alt=""
                                        className="item-image"
                                      />
                                      <div class="item-check">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault2"
                                          // checked
                                        ></input>
                                      </div>
                                      <div className="item-title">
                                        {item.title}
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                );
                              })}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {step === 4 && (
                    <div>
                      <div className="subjectWizard ">
                        <div className="d-flex justify-content-end">
                          <button className="close-btn" onClick={toggleWizard}>
                            <img src={images.Close} alt="" />
                          </button>
                        </div>
                        <div className="content-title">
                          <h3>Subject Wizard</h3>
                          <span>
                            Our subject wizard will help you describe the
                            subject you want to use in your image generation
                          </span>
                        </div>
                        <div className="mt-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="form-title">
                              <h4>Describe the image you want to see</h4>
                            </div>
                          </div>
                          <div class="form-group mt-3">
                            <textarea
                              class="form-control"
                              name=""
                              rows="3"
                              placeholder="Eg. A girl with long blonde hair and big eyes in the grass at sunset"
                            ></textarea>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="form-title  border-bg p-1">
                            <h4>Mood</h4>
                            <span className="sub-title">
                              Setting the mood can have a dramatic effect on the
                              image
                            </span>
                          </div>
                          <div className="subjecWizard_slider mt-3">
                            <Swiper
                              slidesPerView={1}
                              grid={{
                                rows: 2,
                                fill: "row",
                              }}
                              spaceBetween={10}
                              navigation={true}
                              modules={[Grid, Navigation]}
                              className="mySwiper"
                              breakpoints={{
                                640: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                768: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetween: 30,
                                },
                              }}
                            >
                              {sliderData.map((item) => {
                                return (
                                  <SwiperSlide>
                                    <div className="sliderGrid-item">
                                      <img
                                        src={item.image}
                                        alt=""
                                        className="item-image"
                                      />
                                      <div class="item-check">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault2"
                                          // checked
                                        ></input>
                                      </div>
                                      <div className="item-title">
                                        {item.title}
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                );
                              })}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  {step === 5 && (
                    <div>
                      <div className="subjectWizard ">
                        <div className="d-flex justify-content-end">
                          <button className="close-btn" onClick={toggleWizard}>
                            <img src={images.Close} alt="" />
                          </button>
                        </div>
                        <div className="content-title">
                          <h3>Subject Wizard</h3>
                          <span>
                            Our subject wizard will help you describe the
                            subject you want to use in your image generation
                          </span>
                        </div>
                        <div className="mt-4">
                          <div className="d-flex align-items-center justify-content-between">
                            <div className="form-title">
                              <h4>Describe the image you want to see</h4>
                            </div>
                          </div>
                          <div class="form-group mt-3">
                            <textarea
                              class="form-control"
                              name=""
                              rows="3"
                              placeholder="Eg. A girl with long blonde hair and big eyes in the grass at sunset"
                            ></textarea>
                          </div>
                        </div>
                        <div className="mt-4">
                          <div className="form-title  border-bg p-1">
                            <h4>Modifier </h4>
                            <span className="sub-title">
                              Setting the mood can have a dramatic effect on the
                              image
                            </span>
                          </div>
                          <div className="subjecWizard_slider mt-3">
                            <Swiper
                              slidesPerView={1}
                              grid={{
                                rows: 2,
                                fill: "row",
                              }}
                              spaceBetween={10}
                              navigation={true}
                              modules={[Grid, Navigation]}
                              className="mySwiper"
                              breakpoints={{
                                640: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                768: {
                                  slidesPerView: 2,
                                  spaceBetween: 20,
                                },
                                1024: {
                                  slidesPerView: 3,
                                  spaceBetween: 30,
                                },
                              }}
                            >
                              {sliderData.map((item) => {
                                return (
                                  <SwiperSlide>
                                    <div className="sliderGrid-item">
                                      <img
                                        src={item.image}
                                        alt=""
                                        className="item-image"
                                      />
                                      <div class="item-check">
                                        <input
                                          class="form-check-input"
                                          type="radio"
                                          name="flexRadioDefault"
                                          id="flexRadioDefault2"
                                          // checked
                                        ></input>
                                      </div>
                                      <div className="item-title">
                                        {item.title}
                                      </div>
                                    </div>
                                  </SwiperSlide>
                                );
                              })}
                            </Swiper>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="mt-4 mb-2">
                    <div className=" d-flex justify-content-between align-items-center">
                      <div className="container-dots">
                        {[...Array(totalSteps)].map((_, i) => (
                          <div
                            key={i}
                            className={`dot ${i + 1 === step ? "active" : ""}`}
                            onClick={() => setStep(i + 1)}
                          />
                        ))}
                      </div>
                      <div className="">
                        {step > 1 ? (
                          <button
                            className="btn btn-goback me-3"
                            onClick={handlePrev}
                            disabled={step === 1}
                          >
                            Back
                          </button>
                        ) : (
                          <div></div>
                        )}

                        {step === totalSteps ? (
                          <button className="btn btn-primary">Finish</button>
                        ) : (
                          <button
                            className="btn btn-primary"
                            onClick={handleNext}
                          >
                            Continue
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TypePrompt;
