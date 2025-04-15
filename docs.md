# Multi-Step React Form Documentation

## Overview
This document provides a detailed guide on the implementation of a dynamic, multi-step form in React using the following technologies:

- **React Router** for navigation between steps
- **React Hook Form** and **Zod** for form handling and validation
- **Redux Toolkit** for global state management
- **Tailwind CSS** for styling
- **localStorage** for persistence
- **Theme Switcher** with Redux for light/dark mode

---

## Project Structure

```
src/
├── components/
│   └── Button.tsx            // Shared reusable Button component
│   └── ErrorMessage.tsx      // Shared reusable Error message component
│   └── HintMessage.tsx       // Shared reusable Hint message component
│   ├── Input.tsx             // Shared reusable input component
│   ├── ProgressBar.tsx       // Visual progress indicator
│   └── RadioButton.tsx       // Shared reusable RadioInput group component
│   └── StepTitle.tsx         // Shared reusable title component
│   └── ThemeToggle.tsx       // Theme switch button
├── features/
│   ├── form/
│   │   ├── formSlice.ts      // Redux slice for form data
│   │   └── types.ts          // Form types
│   └── theme/
│       └── themeSlice.ts     // Redux slice for theme
├── pages/
│   ├── Step1.tsx             // First form step (name, email, account type)
│   ├── Step2.tsx             // Second form step (address, newsletter, conditional fields)
│   └── Step3.tsx             // Review and confirm step
├── routes/
│   └── AppRoutes.tsx         // Route management and guards
├── store/
│   └── store.ts              // Redux store configuration
└── utils/
    └── storage.ts            // Utility for localStorage persistence
```

---

## Step 1: Basic Information

- Fields:
  - Name
  - Email
  - Account Type (Individual or Company) — radio buttons
- Redux stores the collected values in `form.basicInfo`

---

## Step 2: Additional Information

- Fields:
  - Address
  - Preferred Topics 
  - Company Name (conditional if accountType === 'Company')


---

## Step 3: Review & Confirm

- Displays all the collected data from Steps 1 and 2
- Shows a success confirmation message upon submission
- On submit:
  - Resets Redux state
  - Clears localStorage
  - Redirects back to Step 1

---

## Theme Switching

- Managed with a Redux slice (`themeSlice`)
- Persists theme (`light` or `dark`) in `localStorage`
- Applies a CSS class to `<html>` via `useEffect`
- Controlled via the `ThemeToggle` component

---

## Persisting Form State

- Utilizes `localStorage` for form state persistence across refreshes
- Redux store initializes from localStorage if data exists
- Form state auto-saves on every update via `store.subscribe`

---

## Navigation and Routing

- Each form step is tied to a route:
  - `/step1`, `/step2`, `/step3`
- Guarded routes:
  - Step 2 requires Step 1 to be filled
  - Step 3 requires Steps 1 and 2 to be completed

---

## Shared Components

### InputField.tsx
Reusable form field component:
```tsx
interface InputFieldProps {
  label: string;
  id: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: { [key: string]: FieldError } | undefined;
}
```

### ThemeToggle.tsx
Dispatches Redux `toggleTheme()` action and persists selection.

### ProgressBar.tsx
Shows the current step out of 3 using visual progress.

---

## Styling

- Tailwind CSS is used throughout
- Conditional classes used for dark/light themes
- `html` element styled with `.dark` class

---


## Final Thoughts
This setup provides a scalable, accessible, and maintainable multi-step form architecture using modern React best practices. You can easily extend it with additional steps, fields, or API integration.

---