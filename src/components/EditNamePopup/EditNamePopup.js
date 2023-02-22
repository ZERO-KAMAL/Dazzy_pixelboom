/**
 * @component    Component to edit name of user profile
 */
import React from "react";
import Modal from "react-bootstrap/Modal";
import "./EditNamePopup.scss";

// Component for showing popup edit user name

const EditNamePopup = ({ show, setShow, title, placeholder }) => {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal show={show} onHide={handleClose} className="m-auto mt-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4 modal_wrapper">
            <Modal.Header style={{ border: "none" }} closeButton>
              <Modal.Title>
                <div className="content-title">
                  <h3>{title}</h3>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="edit-popup-body">
              <input
                type="text"
                aria-label="Enter name"
                id="value"
                placeholder={placeholder}
              />
              <p>Required field</p>
            </Modal.Body>
            <Modal.Footer style={{ border: "none", marginBottom: "15px" }}>
              <button className=" btn btn-goback" onClick={handleClose}>
                Cancel
              </button>

              <button className="btn btn-primary" onClick={handleClose}>
                Save
              </button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default EditNamePopup;
