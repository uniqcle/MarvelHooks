import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { MainPage, ComicsPage, SingleComicPage } from "../pages";
import AppHeader from "../appHeader/AppHeader";

const Page404 = lazy(() => import("../pages/404"));

const App = () => {
  return (
    <>
      <div className="app">
        <AppHeader />
        <main>
          <Suspense fallback={<span>Loading suspense...</span>}>
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="comics" element={<ComicsPage />} />
              <Route path="comics/:comicId" element={<SingleComicPage />} />
              <Route path="*" element={<Page404 />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </>
  );
};

export default App;
