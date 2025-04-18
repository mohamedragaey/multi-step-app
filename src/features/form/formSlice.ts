import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AdditionalInfo, BasicInfo, FormState } from "./types";

const initialState: FormState = {
  step: 1,
  basicInfo: {
    name: "",
    email: "",
    accountType: "Individual",
  },
  additionalInfo: {
    address: "",
    companyName: "",
    preferredTopics: "",
  },
  isComplete: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setBasicInfo(state, action: PayloadAction<BasicInfo>) {
      state.basicInfo = action.payload;
    },
    setAdditionalInfo(state, action: PayloadAction<AdditionalInfo>) {
      state.additionalInfo = action.payload;
    },
    setStep(state, action: PayloadAction<number>) {
      state.step = action.payload;
    },
    completeForm(state) {
      state.isComplete = true;
    },
    resetForm() {
      return initialState;
    },
  },
});

export const {
  setBasicInfo,
  setAdditionalInfo,
  setStep,
  completeForm,
  resetForm,
} = formSlice.actions;

export default formSlice.reducer;
