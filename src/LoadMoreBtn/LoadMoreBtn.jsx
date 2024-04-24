import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handelLoadMore }) => {
  return (
    <button className={css.LoadMoreBtn} onClick={handelLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
