import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const ComicsPage = () => {
  return (
    <>
      <div className="char__content">
        <ErrorBoundary>
          <ComicsList />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default ComicsPage;
