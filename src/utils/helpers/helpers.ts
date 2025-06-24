export function showPrompt(
  title: string,
  description: string,
  type = 'custom',
) {
  return;
}

export const isEmailValid = (email: string): boolean => {
  const matchValidEmail = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  return matchValidEmail.test(email);
};

type ErrorBody = {
  error_description?: string;
  description?: string;
  responseDescription?: string;
};

type ErrorLike = {
  _bodyInit?: ErrorBody;
  [key: string]: any; // Optional catch-all
};

export function handleError(
  e: ErrorLike,
  errorTitle: string = 'Something went wrong',
): void {
  const errorResponse = e?._bodyInit ?? {};
  const { error_description, description, responseDescription } = errorResponse;

  const errorDescription =
    error_description ||
    description ||
    responseDescription ||
    'We are working quickly to resolve it. Please try again in a few minutes.';

  showPrompt(errorTitle, errorDescription, 'error');
}
