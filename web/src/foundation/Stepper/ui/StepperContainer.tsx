import { useMemo, useState } from "react";
import { pickChild } from "~/lib";
import {
  StepperContextProvider,
  type StepperContextValue,
} from "../lib/context";
import { assertValidStepElement } from "../lib/asserts";

export interface StepperContainerProps {
  children: React.ReactElement | React.ReactElement[];
  initialStep: string;
}

export function StepperContainer({
  children,
  initialStep,
}: StepperContainerProps) {
  const [stepIndex, setStepIndex] = useState(initialStep);

  const contextValue = useMemo<StepperContextValue>(
    () => ({
      activeStep: stepIndex,
      setStep: setStepIndex,
    }),
    [stepIndex],
  );

  return (
    <StepperContextProvider value={contextValue}>
      {pickChild(
        children,
        (child) => child.props.step === stepIndex,
        assertValidStepElement,
      )}
    </StepperContextProvider>
  );
}
