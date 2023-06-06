import { HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

interface Props {
  type?: HTMLInputTypeAttribute;
  label?: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  placeholder?: string;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  addOnBefore?: React.ReactNode;
  addOnAfter?: React.ReactNode;
}
const Input = ({
  label,
  value,
  onChange,
  type = "text",
  name,
  placeholder = "",
  disabled,
  className,
  startIcon,
  endIcon,
  addOnBefore,
  addOnAfter,
}: Props) => {
  const hasStartIcon = Boolean(startIcon);
  const hasEndIcon = Boolean(endIcon);
  const hasAddOnBefore = Boolean(addOnBefore);
  const hasAddOnAfter = Boolean(addOnAfter);

  return (
    <div className={twMerge("flex w-full flex-col gap-1", className)}>
      {label && (
        <label
          htmlFor={name}
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          {label}
        </label>
      )}
      <div className="flex">
        {hasAddOnBefore && <AddOnBefore value={addOnBefore} />}
        <div className="relative w-full">
          {hasStartIcon && <StartIcon value={startIcon} />}
          <input
            type={type}
            name={name}
            value={value}
            className={twMerge(
              "block w-full rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6",
              hasEndIcon && "pr-11",
              hasAddOnBefore && "rounded-l-none",
              hasAddOnAfter && "rounded-r-none",
              hasStartIcon && "pl-11",
            )}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
          />
          {hasEndIcon && <EndIcon value={endIcon} />}
        </div>
        {hasAddOnAfter && <AddonAfter value={addOnAfter} />}
      </div>
    </div>
  );
};
export default Input;

interface IconProps {
  value: React.ReactNode;
  isStart?: boolean;
}
const Icon: React.FC<IconProps> = ({ value, isStart }) => {
  const className = `absolute ${
    isStart ? "left-3" : "right-3"
  } top-1/2 -translate-y-1/2 z-20`;

  return (
    <span className={twMerge("[&>*]:max-w-[28px]", className)}>{value}</span>
  );
};

const StartIcon: React.FC<IconProps> = ({ value }) => {
  return <Icon value={value} isStart />;
};
const EndIcon: React.FC<IconProps> = ({ value }) => {
  return <Icon value={value} />;
};

interface AddOnProps {
  value: React.ReactNode;
}

const addOnStyles =
  "flex items-center border bg-gray-100 px-3 text-gray-500 text-sm font-medium";

const AddOnBefore: React.FC<AddOnProps> = ({ value }) => {
  return (
    <p className={twMerge(addOnStyles, "rounded-l-lg border-r-0")}>{value}</p>
  );
};

const AddonAfter: React.FC<AddOnProps> = ({ value }) => {
  return (
    <div className={twMerge(addOnStyles, "rounded-r-lg border-l-0")}>
      {value}
    </div>
  );
};
