import css from "../LoadMoreBtn/LoadMoreBtn.module.css";

const LoadMoreBtn = ({ handelLoadMore, disable }) => {
  return (
    <button
      className={css.LoadMoreBtn}
      onClick={handelLoadMore}
      disabled={disable}
    >
      Load more
    </button>
  );
};

export default LoadMoreBtn;
