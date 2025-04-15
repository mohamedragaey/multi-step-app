export interface BasicInfo {
  name: string;
  email: string;
  accountType: "Individual" | "Company";
}

export interface AdditionalInfo {
  address: string;
  companyName?: string;
  preferredTopics: string;
}
export interface RequiredAdditionalInfo extends AdditionalInfo {
  companyName: string;
}

export interface FormState {
  step: number;
  basicInfo: BasicInfo;
  additionalInfo: AdditionalInfo;
  isComplete: boolean;
}
