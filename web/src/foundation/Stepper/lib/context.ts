import { type Dispatch, type SetStateAction } from "react";
import { createStrictContext } from "~/lib";

export interface StepperContextValue {
  activeStep: string;
  setStep: Dispatch<SetStateAction<string>>;
}

export const [useStepperContext, StepperContextProvider] = createStrictContext<
  StepperContextValue | undefined
>("Stepper");
