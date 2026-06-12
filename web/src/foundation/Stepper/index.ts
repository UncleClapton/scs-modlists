import { StepperContainer } from "./ui/StepperContainer";
import { StepperStep } from "./ui/StepperStep";
import { StepperGoToStepButton } from "./ui/StepperGoToStepButton";

export const Stepper = Object.freeze(
  Object.assign(StepperContainer, {
    Container: StepperContainer,
    Step: StepperStep,
    GoToStep: StepperGoToStepButton,
  }),
);
