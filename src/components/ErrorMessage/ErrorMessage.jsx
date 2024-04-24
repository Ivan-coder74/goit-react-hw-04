import css from "../ErrorMessage/ErrorMessage.module.css";

function ErrorMessage({ message = `Oops! There was an error!!!!` }) {
  return <p className={css.errorMessage}>{message}</p>;
}
export default ErrorMessage;
