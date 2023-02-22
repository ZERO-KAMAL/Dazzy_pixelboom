/**
 * Landing page to show the statics of user usage in the form of cards and graphs
 * @component    Summary card
 */

import React from "react";
import SummaryCard from "../../components/SummaryCard/SummaryCard";
import "./Landing.scss";
import { images } from "../../constants";
import Form from "react-bootstrap/Form";
import TimelineGraph from "../../components/TimelineGraph/TimelineGraph";
import ConversionGraph from "../../components/ConversionGraph/ConversionGraph";

/**
 * Landing page to show the statics of user usage in the form of cards and graphs
 * @component
 * @SummaryCard passing user usage data to this component.
 * @return  {Jsx}  It returns jsx for render the statics of user usage.
 * )
 */

const Landing = () => {
  return (
    <>
      <div className="dashboard-heading-dropdown d-flex align-items-center justify-content-between flex-wrap">
        <div className="content-title">
          <h3>Hello, Aravindh!</h3>
        </div>
        <div className="dashboard-timeframe-dropdown">
          <Form.Select>
            <option>
              Timeframe: <span>All time</span>
            </option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </div>
      </div>
      <div className="SummaryCardWrapper">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-3">
            <SummaryCard
              CardIcon={images.GenerateImageIcon}
              DownVectorIcon={images.UpVectorIcon}
              CounterValue="40"
              CounterPercentage="10.2%"
              CounterPercentageColor="#6BC579"
              CardText="Generated"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <SummaryCard
              CardIcon={images.SaveImageIcon}
              DownVectorIcon={images.UpVectorIcon}
              CounterValue="40"
              CounterPercentage="10.2%"
              CounterPercentageColor="#6BC579"
              CardText="Saved"
            />
          </div>
          <div className="col-md-6 col-lg-4 mb-3">
            <SummaryCard
              CardIcon={images.SearchIcon}
              DownVectorIcon={images.DownVectorIcon}
              CounterValue="40"
              CounterPercentage="-5.6%"
              CounterPercentageColor="#ED5683"
              CardText="Searched"
            />
          </div>
        </div>
      </div>

      <div style={{ marginBottom: 150, marginTop: 27 }} className="row">
        <div className="col-sm-12 col-md-12 col-lg-8 mt-3">
          <TimelineGraph />
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 mt-3">
          <ConversionGraph />
        </div>
      </div>
    </>
  );
};

export default Landing;
