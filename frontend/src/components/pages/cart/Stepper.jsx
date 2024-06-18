import React from "react";
import { Steps } from "./constants";

function Stepper({ step }) {
  const onStepChange = (nextStep) => {
    return `circle ${step === nextStep ? "circle-active" : ""}`;
  };
  console.log({ step });
  return (
    <div
      className="processing-line d-flex justify-content-between
"
    >
      <p className={onStepChange(Steps.first)}>1</p>
      <p className={onStepChange(Steps.second)}>2</p>
      <p className={onStepChange(Steps.third)}>3</p>
      <p className={onStepChange(Steps.fourth)}>4</p>
      <p className={onStepChange(Steps.fifth)}>5</p>
    </div>
  );
}

export default Stepper;
