import { FC, useState } from "react";
import { NumberInput, TextInput } from "@components"; // Adjust the import path as necessary
import { useTranslation } from "react-i18next";
import { PaymentDetails } from "./DonateForm";

interface DonateFormCreditProps {
  handleInputChange: (value: number) => void;
  inputValue: number;
  paymentDetails: PaymentDetails;
  setPaymentDetails: (value: PaymentDetails) => void;
}

const DonateFormCredit: FC<DonateFormCreditProps> = ({
  handleInputChange,
  inputValue,
  paymentDetails,
  setPaymentDetails,
}) => {
  const { t } = useTranslation();
  const [errors, setErrors] = useState<Partial<PaymentDetails>>({});

  const handleInput = (field: keyof PaymentDetails, value: string) => {
    //@ts-ignore
    setPaymentDetails((prevDetails: PaymentDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const validateFields = () => {
    const newErrors: Partial<PaymentDetails> = {};
    //iterate over each key in paymentDetails
    Object.keys(paymentDetails).forEach((key) => {
      //If the key is not addressLine2 and the value is falsy add error message
      if (
        key !== "addressLine2" &&
        !paymentDetails[key as keyof PaymentDetails]
      ) {
        newErrors[key as keyof PaymentDetails] = "This field is required";
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (validateFields()) {
      console.log("Pay USD");
    }
  };

  return (
    <div className="flex flex-col gap-1.5 flex-grow w-full mx -1">
      <div className="flex justify-between gap-2 items-center">
        <p className="text-xs text-gray-500">{t("pay_due")}</p>
        <NumberInput
          supply={1000000}
          handleInput={handleInputChange}
          initialValue={inputValue}
        />
      </div>
      <h2 className="text-lg font-semibold">Payment</h2>
      <div className="flex gap-2">
        <TextInput
          handleInput={(value) => handleInput("email", value)}
          placeholder="Email"
          className="w-1/2 "
          error={!!errors.email}
        />
        <TextInput
          handleInput={(value) => handleInput("nameOnCard", value)}
          placeholder="Name on Card"
          className="w-1/2 "
          error={!!errors.nameOnCard}
        />
      </div>
      <div className="flex flex-col gap-0">
        <TextInput
          handleInput={(value) => handleInput("cardNumber", value)}
          placeholder="Card Number"
          className="w-full !rounded-b-none"
          error={!!errors.cardNumber}
        />
        <div className="flex -mt-[0.5px]">
          <TextInput
            handleInput={(value) => handleInput("cvv", value)}
            placeholder="CVV"
            className="w-1/2 !rounded-r-none !rounded-t-none"
            error={!!errors.cvv}
          />
          <TextInput
            handleInput={(value) => handleInput("expiryDate", value)}
            placeholder="MM / YY"
            className="w-1/2 !rounded-l-none !rounded-t-none"
            error={!!errors.expiryDate}
          />
        </div>
      </div>
      <div>
        <TextInput
          handleInput={(value) => handleInput("addressLine1", value)}
          placeholder="Address Line 1"
          className="w-full !rounded-b-none"
          error={!!errors.addressLine1}
        />
        <TextInput
          handleInput={(value) => handleInput("addressLine2", value)}
          placeholder="Address Line 2 (Optional)"
          className="w-full !rounded-t-none -mt-[1px]"
        />
      </div>
      <div className="flex gap-2">
        <TextInput
          handleInput={(value) => handleInput("city", value)}
          placeholder="City"
          className="w-1/2"
          error={!!errors.city}
        />
        <TextInput
          handleInput={(value) => handleInput("zip", value)}
          placeholder="Zip"
          className="w-1/2"
          error={!!errors.zip}
        />
      </div>
      <button
        className="rounded-lg border row-centered gap-1 transition-200 font-poppins-regular h-12 text-white bg-blue-950 transition-200 hover:bg-gray-900"
        onClick={handleSubmit}
      >
        {t("pay_pay")} ${inputValue} USDC
      </button>
    </div>
  );
};

export default DonateFormCredit;
