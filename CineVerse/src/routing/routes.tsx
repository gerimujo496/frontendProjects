import { createBrowserRouter } from "react-router-dom";
import { Main } from "../compoents/Main/Main";
import { SearchMovie } from "../compoents/SearchMovie/SearchMovie";
import { FavoriteMovies } from "../compoents/FavoriteMovies/FavoriteMovies";
import MainMenu from "../compoents/MainMenu/MainMenu";
import { Header } from "../compoents/Header/Header";
import { Movies } from "../compoents/Movies/Movies";
import { Body } from "../compoents/Body/Body";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ index: true, element: <Movies /> }],
  },
  {
    path: "/searchMovie/:id",
    element: <Main />,

    children: [
      {
        index: true,
        element: (
          <>
            <SearchMovie />
          </>
        ),
      },
    ],
  },
  { path: "/favoriteMovies", element: <FavoriteMovies /> },
]);

// import { createBrowserRouter } from "react-router-dom";
// import { Main } from "../compoents/Main/Main";
// import { SearchMovie } from "../compoents/SearchMovie/SearchMovie";
// import { FavoriteMovies } from "../compoents/FavoriteMovies/FavoriteMovies";

// export const router = createBrowserRouter([
//   { path: "/", element: <Main /> },
//   {
//     path: "/searchMovie/:id",
//     element: <SearchMovie />,

//   },
//   { path: "/favoriteMovies", element: <FavoriteMovies /> },
// ]);
