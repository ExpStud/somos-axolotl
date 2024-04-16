import { createContext } from "react";
import { InfographicsDataType } from "@types";

export const ViewContext = createContext({
  showView: false,
  setShowView: (value: boolean) => { },
  showModal: null,
  setShowModal: (value: InfographicsDataType | null) => { },
});

