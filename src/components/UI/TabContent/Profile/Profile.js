import React, { useState } from "react";
import { images } from "../../../../constants";
import "./Profile.scss";
import EditNamePopup from "../../../EditNamePopup/EditNamePopup";

const Profile = () => {
  const [show, setShow] = useState(false);
  // handel modal
  const handleModalName = () => {
    setShow(true);
  };
  const handleModalEmail = () => {
    setShow(true);
  };
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            <div className="profileGeneral col-md-6 col-sm-12">
              <h6 className="sub-title">General</h6>
              <div className="profileGeneral-inner">
                <div className="profile_name d-flex justify-content-between">
                  <span>Name</span>
                  <span className="userName">Aravindh Sridhar</span>
                  <button className="editButton" onClick={handleModalName}>
                    <img src={images.Edit} alt="" />
                  </button>
                </div>
                <div className="profile_email d-flex justify-content-between mt-2">
                  <span>Email</span>
                  <span className="userEmail">aravindh@kirana.biz</span>
                  <button className="editButton" onClick={handleModalEmail}>
                    <img src={images.Edit} alt="" />
                  </button>
                </div>
              </div>
            </div>
            <hr />
            <div className="imageStatistic col-md-10 col-sm-12">
              <h6 className="sub-title">Image statistic</h6>
              <div className="imageStatistic-inner">
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <div className="imageStatistic-card">
                      <span>Generated</span>
                      <span>340 / month</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="imageStatistic-card">
                      <span>Saved</span>
                      <span>340 / month</span>
                    </div>
                  </div>
                  <div className="col-md-4 mb-3">
                    <div className="imageStatistic-card">
                      <span>Searches</span>
                      <span>100 / month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <EditNamePopup
          show={show}
          setShow={setShow}
          title="Edit Name"
          placeholder="kamal"
        />
        <EditNamePopup
          show={show}
          setShow={setShow}
          title="Edit Email"
          placeholder="facebook"
        />
      </div>
    </>
  );
};

export default Profile;
