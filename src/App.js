import "./App.css";
import MyNav from "./component/MyNav";
import "bootstrap/dist/css/bootstrap.css";
import "./assets/style.css";
import Main from "./component/Main";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyFooter from "./component/MyFooter";
import Profile from "./component/Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TvShows from "./component/TvShows";
import MovieDetails from "./component/MovieDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/movie-details/:id" element={<MovieDetails />} />
        </Routes>

        <MyFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
