const FORM_KEY = "multiStepForm";

export const saveFormToStorage = (data: unknown) => {
  localStorage.setItem(FORM_KEY, JSON.stringify(data));
};

export const loadFormFromStorage = () => {
  const stored = localStorage.getItem(FORM_KEY);
  if (!stored) return undefined;
  try {
    return JSON.parse(stored);
  } catch {
    return undefined;
  }
};

export const clearFormStorage = () => {
  localStorage.removeItem(FORM_KEY);
};
