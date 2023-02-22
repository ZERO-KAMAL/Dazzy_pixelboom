import React, { useState, useEffect } from "react";
import { Carousel, Form } from "react-bootstrap";
import { CgClose } from "react-icons/cg";
import BaseModal from "../BaseModal/BaseModal";
import RangeSlider from "react-bootstrap-range-slider";
import "./CategoryViewModal.scss";
import { Toast } from "react-bootstrap";
import ToastContainer from "react-bootstrap/ToastContainer";
import { images } from "../../constants";

/**
 * Component to open the modal-box(pop-up) in the category page
 *
 * @CategoryViewModal
 * @example
 * @param   {<any>} openModal <Opens the Modal>
 * @param   {<any>} setOpenModal <Sets the state to open the modal>
 * @param   {<any>} cagetoryData <The category data of images>
 * @param   {<any>} index <the index count of the current image>
 * )
 */

const CategoryViewModal = ({
  openModal,
  setOpenModal,
  cagetoryData,
  index,
  setIndex,
}) => {
  const [currentIndex, setCurrentIndex] = useState(index || 0);
  const [value, setValue] = useState(0);

  /**
   * Used to handle navigation of images
   */
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    setCurrentIndex(selectedIndex);
  };

  const { data, name, description } = cagetoryData;

  const [showA, setShowA] = useState(false);

  const [showB, setShowB] = useState(false);

  const generateHandler = (e) => {
    openModal = false;
    setShowA(!showA);
    setShowB(!showB);
    e.preventDefault();
  };

  useEffect(() => {
    setCurrentIndex(index || 0);
  }, [index]);

  return (
    <>
      <BaseModal openModal={openModal} setOpenModal={setOpenModal}>
        <div className="modalContainer">
          <div className="container p-0">
            <div className="row g-0">
              <div className=" col-12 col-lg-6 col-xl-6 ">
                <div className="leftSide">
                  <Carousel
                    interval={null}
                    activeIndex={index}
                    onSelect={handleSelect}
                  >
                    {data.map((item, index) => {
                      return (
                        <Carousel.Item key={index}>
                          <img
                            className="d-block modalImg"
                            src={item.image}
                            alt={`Slide-${index + 1}`}
                          />
                        </Carousel.Item>
                      );
                    })}
                  </Carousel>
                </div>
              </div>
              <div className=" col-12 col-lg-6 col-xl-6  ">
                <div className="rightSide ">
                  <div className="d-flex flex-row justify-content-between">
                    <div className="content-title align-self-end m-0 mt-3">
                      <h3> {name}</h3>
                      <span>{description}</span>
                    </div>
                    <CgClose
                      class="close-modal"
                      size={25}
                      onClick={() => setOpenModal(false)}
                    />
                  </div>
                  <div className="mt-3">
                    <div className="form-title">
                      <h4>{data[currentIndex].title || ""}</h4>
                    </div>
                    <p className="sub-title">
                      {data[currentIndex].description || ""}
                    </p>
                  </div>
                  <Form>
                    <div class="form-group mt-3">
                      <textarea
                        class="form-control"
                        name=""
                        rows="3"
                        placeholder="Eg. A girl with long blonde hair and big eyes in the grass at sunset"
                      ></textarea>
                    </div>
                    <div className="mt-3">
                      <div className="form-title">
                        <h4>Size of Image</h4>
                      </div>
                      <p className="sub-title">
                        Select the format this image will be created in
                      </p>
                      <div class="form-group">
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
                    <div className="mt-3">
                      <div className="form-title">
                        <h4>Quantity</h4>
                      </div>
                      <p className="sub-title">
                        The Number of Images to generate
                      </p>
                      <div className="form-group">
                        <div className="field d-flex align-items-center justify-content-center ">
                          <span className="value left">0</span>
                          <RangeSlider
                            className="range"
                            min={0}
                            max={10}
                            step={1}
                            value={value}
                            // tooltip="on"
                            onChange={(changeEvent) =>
                              setValue(changeEvent.target.value)
                            }
                          />
                          <span className="value right">10</span>
                        </div>
                      </div>
                    </div>
                    <div className=" mt-4 d-flex flex-row justify-content-end flex-wrap">
                      <button
                        className="btn btn-goback mb-2"
                        onClick={() => setOpenModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="btn btn-primary ms-2 mb-2"
                        onClick={generateHandler}
                      >
                        Generate
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BaseModal>
      <ToastContainer position="middle-end">
        <Toast show={showA} onClose={() => setShowA(false)}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto" style={{ color: "black" }}>
              Your image was generated!
            </strong>
          </Toast.Header>
          <Toast.Body>
            <div className="d-flex justify-content-center mt-2">
              <img src={images.Done} className="ml-n" alt="done" />
              <div className="ms-2">
                Your image was successfully generated.You can view image now.
              </div>
            </div>

            <div className="d-flex justify-content-center mt-2">
              <button className="btn btn-goback ms-2">View Now</button>
              <button className="btn btn-goback ms-2">Later</button>
            </div>
          </Toast.Body>
        </Toast>
      </ToastContainer>
      <ToastContainer position="middle-end">
        <Toast
          show={showB}
          onClose={() => setShowB(false)}
          autohide
          delay={1000}
        >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto" style={{ color: "black" }}>
              Just a minute
            </strong>
          </Toast.Header>
          <Toast.Body>
            <div className="d-flex justify-content-center mt-2">
              <img src={images.Loading} className="ml-n" alt="done" />
              <div className="ms-2">
                Please wait for a few minutes,our request is processing
              </div>
            </div>
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default CategoryViewModal;
