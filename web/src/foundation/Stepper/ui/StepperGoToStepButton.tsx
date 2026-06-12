import { useStepperContext } from "../lib/context";

export interface StepperGoToStepButtonProps {
  step: string;
  title: string;
  onClick?: () => void;
}

export function StepperGoToStepButton(props: StepperGoToStepButtonProps) {
  const { step, title, onClick } = props;
  const { activeStep, setStep } = useStepperContext();

  const handleClick = () => {
    setStep(step);
    onClick?.();
  };

  return (
    <button type="button" disabled={activeStep === step} onClick={handleClick}>
      {title}
    </button>
  );
}
