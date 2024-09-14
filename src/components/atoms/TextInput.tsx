import { FC, InputHTMLAttributes, useState } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  handleInput: (value: string) => void;
  error?: boolean;
}

const TextInput: FC<Props> = (props: Props) => {
  const { handleInput, error, className, ...componentProps } = props;

  const [value, setValue] = useState<string>();

  const charLim: number = 150;

  //add max length check
  const onInput = (event: React.FormEvent<HTMLInputElement>): void => {
    const val = (event.target as HTMLInputElement).value;
    setValue(val);
    handleInput(val);
  };

  return (
    <input
      className={`rounded-lg border transition-200 w-full h-9 p-2  text-sm ${
        className ?? ""
      } ${value && value.length >= charLim ? "text-red-500" : ""} ${
        error ? "text-red-500 placeholder:text-red-500" : ""
      } ${
        componentProps.disabled
          ? "cursor-not-allowed bg-custom-dark-gray border-custom-dark-gray"
          : "active:outline-none focus:outline-none outline-none"
      }`}
      onInput={(e) => onInput(e)}
      placeholder="Add Text"
      type="text"
      maxLength={charLim}
      value={value}
      disabled={componentProps.disabled}
      {...componentProps}
    />
  );
};

export default TextInput;
