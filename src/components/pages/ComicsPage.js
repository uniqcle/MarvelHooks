import { useState } from "react";
import AppHeader from "../appHeader/AppHeader";
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const ComicsPage = () => {
  return (
    <div className="app">
      <AppHeader />
      <main>
        <div className="char__content">
          <ErrorBoundary>
            <ComicsList />
          </ErrorBoundary>
        </div>
      </main>
    </div>
  );
};

export default ComicsPage;
