import { FC } from "react";
import { TextInput } from "@components"; // Adjust the import path as necessary

interface DonateFormCreditProps {
  handleInputChange: (value: number) => void;
  inputValue: number;
}

const DonateFormCredit: FC<DonateFormCreditProps> = ({
  handleInputChange,
  inputValue,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg font-semibold">Payment</h2>
      <div className="flex gap-2">
        <TextInput
          handleInput={() => {}}
          placeholder="Email"
          className="w-1/2 "
        />
        <TextInput
          handleInput={() => {}}
          placeholder="Name on Card"
          className="w-1/2 "
        />
      </div>
      <div className="flex flex-col gap-0">
        <TextInput
          handleInput={() => {}}
          placeholder="Card Number"
          className="w-full !rounded-b-none"
        />
        <div className="flex -mt-[0.5px]">
          <TextInput
            handleInput={() => {}}
            placeholder="CVV"
            className="w-1/2 !rounded-r-none !rounded-t-none"
          />
          <TextInput
            handleInput={() => {}}
            placeholder="MM / YY"
            className="w-1/2 !rounded-l-none !rounded-t-none"
          />
        </div>
      </div>
      <div>
        <TextInput
          handleInput={() => {}}
          placeholder="Address Line 1"
          className="w-full !rounded-b-none"
        />
        <TextInput
          handleInput={() => {}}
          placeholder="Address Line 2 (Optional)"
          className="w-full !rounded-t-none -mt-[1px]"
        />
      </div>
      <div className="flex gap-2">
        <TextInput
          handleInput={() => {}}
          placeholder="City"
          className="w-1/2"
        />
        <TextInput handleInput={() => {}} placeholder="Zip" className="w-1/2" />
      </div>
      <button
        className="rounded-lg border row-centered gap-1 transition-200 font-poppins-regular h-12 text-white bg-blue-950 transition-200 hover:bg-gray-900"
        onClick={() => console.log("Pay USD")}
      >
        Pay USD
      </button>
    </div>
  );
};

export default DonateFormCredit;
