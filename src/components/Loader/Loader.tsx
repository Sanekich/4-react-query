import css from "./Loader.module.css";

interface LoaderProps {
  isLoading: boolean;
}

function Loader({ isLoading }: LoaderProps) {
  if (!isLoading) return null;
  return <p className={css.text}>Loading movies, please wait...</p>;
}

export default Loader;