import React from "react";
import StepForm from "./step_form";
import StepItem from "./step_item";

const StepList = (props) => {
  return (
    <div>
      <StepForm receiveStep={props.receiveStep} todo_id={props.todo_id} />
      {props.steps.map((step) => {
        return <StepItem step={step} receiveStep={props.receiveStep} removeStep={props.removeStep} />
      })}
    </div>
    
  )
}

export default StepList;