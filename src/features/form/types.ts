// src/features/form/types.ts
export interface BasicInfo {
    name: string;
    email: string;
  }
  
  export interface AdditionalInfo {
    address: string;
    wantsNewsletter: boolean;
  }
  
  export interface FormState {
    step: number;
    basicInfo: BasicInfo;
    additionalInfo: AdditionalInfo;
    isComplete: boolean;
  }
  