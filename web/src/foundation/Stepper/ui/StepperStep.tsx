import type { PropsWithChildren } from "react";

export interface StepperStepProps {
  step: string;
}

export function StepperStep({ children }: PropsWithChildren<StepperStepProps>) {
  return children;
}
