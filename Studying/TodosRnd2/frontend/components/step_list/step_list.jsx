import React from "react";
import StepForm from "./step_form";

const StepList = (props) => {
  return (
    <StepForm receiveStep={props.receiveStep}/>

  )
}

export default StepList;