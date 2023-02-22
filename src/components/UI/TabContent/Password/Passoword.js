import React from "react";

import "./Password.scss";

const Passoword = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-sm-12">
        <form>
          <div class="mb-3 d-flex align-items-center flex-wrap flex-lg-nowrap flex-md-nowrap">
            <label class="form-label">Current password</label>
            <input
              type="password"
              class="form-control"
              name="currentPassword"
              placeholder="Enter your current password"
            ></input>
          </div>
          <div class="mb-3 d-flex align-items-center flex-wrap flex-lg-nowrap flex-md-nowrap">
            <label class="form-label">New password</label>
            <input
              type="password"
              class="form-control"
              name="newPassword"
              placeholder="Enter a new password"
            ></input>
          </div>
          <div class="mb-3 d-flex align-items-center flex-wrap flex-lg-nowrap flex-md-nowrap">
            <label class="form-label">Re-enter password</label>
            <input
              type="password"
              class="form-control"
              name="rePassword"
              placeholder="Confirm new password"
            ></input>
          </div>
          <button type="submit" class="btn btn-primary mt-4 ">
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default Passoword;
