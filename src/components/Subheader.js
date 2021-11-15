import React from "react";
import "./styles/Subheader.css";
import ReorderIcon from "@material-ui/icons/Reorder";
import Button from "@material-ui/core/Button";

function Subheader() {
  return (
    <div>
      <div className="subheader">
        <div className="allButton">
          <Button startIcon={<ReorderIcon />}>All</Button>
        </div>

        <div className="subheader__listItems">
          <Button>Today's Details</Button>
          <Button>Customer Service</Button>
          <Button>Gift Cards</Button>
          <Button>Sell</Button>
          <Button>Registry</Button>
        </div>

        <div className="subheader__covid">
          <span className="subheader__covid">
            Amazon's response to COVID-19
          </span>
        </div>
      </div>
    </div>
  );
}

export default Subheader;
