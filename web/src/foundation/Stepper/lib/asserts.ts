import { isPlainObject } from "~/lib";
import type { StepperStepProps } from "../ui/StepperStep";

export function assertValidStepElement(
  element: React.ReactElement,
): asserts element is React.ReactElement<StepperStepProps> {
  if (
    isPlainObject(element.props) &&
    typeof element.props.step === "number" &&
    element.props.step >= 0
  ) {
    return;
  }

  throw new Error(
    "Invalid 'Tab.View' element. Each child of 'Tab.Router' must be a valid 'Tab.View' element with a 'tab' prop of type 'AppTab'.",
  );
}
