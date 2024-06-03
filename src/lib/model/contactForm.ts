export interface ContactFormState {
  message: string;
  error: boolean;
  success: boolean;
  fieldValues: {
    name: string;
    email: string;
    message: string;
  } | null;
}
