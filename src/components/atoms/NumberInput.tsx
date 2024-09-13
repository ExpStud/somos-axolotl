import { FC, InputHTMLAttributes, useEffect, useState } from "react";
import debounce from "lodash.debounce";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  supply: number;
  handleInput: (number: number) => void;
  initialValue: number;
}

const NumberInput: FC<Props> = (props: Props) => {
  const { supply, handleInput, initialValue, className, ...componentProps } =
    props;
  const [value, setValue] = useState<number>(initialValue);
  const debouncer = debounce((value) => handleInput(value), 1000);

  // Prevent non-numeric keys
  const onKeyPress = (event: React.KeyboardEvent): void => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  // Add max length check
  const onInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const inputValue = Number((event.target as HTMLInputElement).value);
    if (inputValue > supply) {
      setValue(supply);
      (event.target as HTMLInputElement).value = supply.toString();
    } else {
      setValue(inputValue);
      debouncer(inputValue);
    }
  };

  useEffect(() => {
    return () => {
      debouncer.cancel();
    };
  }, [debouncer]);

  return (
    <input
      className={`rounded-lg border transition-200 w-1/4 h-10 p-2 font-poppins-regular ${
        className ?? ""
      } ${
        componentProps.disabled
          ? "cursor-not-allowed bg-custom-dark-gray border-custom-dark-gray"
          : "hover:border-gray-400 hover:text-gray-600 focus:border-blue-500 active:outline-none focus:outline-none border-dark"
      }`}
      onKeyPress={onKeyPress}
      onInput={onInput}
      placeholder="Amount"
      type="number"
      min={1}
      max={supply}
      value={value}
      disabled={componentProps.disabled}
      {...componentProps}
    />
  );
};

export default NumberInput;
