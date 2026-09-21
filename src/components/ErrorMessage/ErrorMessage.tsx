import css from "./ErrorMessage.module.css";

interface ErrorMessageProps {
  isError: boolean;
}

function ErrorMessage({ isError }: ErrorMessageProps) {
  if (!isError) return null;
  return <p className={css.text}>There was an error, please try again...</p>;
}

export default ErrorMessage;