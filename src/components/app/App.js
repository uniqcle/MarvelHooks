import { BrowserRouter, Routes, Route } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import { MainPage, ComicsPage } from "./components/pages";
import "./style/style.scss";

// const marvelService = new MarvelService();
// marvelService.getAllCharacters().then((res) => res.data.results.forEach(item => console.log(item.name)));
//marvelService.getCharacter(1011052).then((res) => console.log(res));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route end path="/" element={<MainPage />} />
        <Route end path="comics" element={<ComicsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
