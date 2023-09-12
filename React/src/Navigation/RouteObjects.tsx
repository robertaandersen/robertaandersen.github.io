import  { RouteObject } from "react-router-dom";
import Landing from "../Landing/Landing";
import Book from "../Book/Book";
import About from "../About/About";
import Catalog from "../Catalog/Catalog";
import Chords from "../Chords/Chords";
import Courses from "../Courses/Courses";

export function routes() : CustomRouteObject[]   {
        return  new Array<CustomRouteObject>(
        {
            title: "Velkomin",
            path: "/",
            element: <Landing />
        },
        {
            title: "Bóka Tíma",
            path: "/boka-tima",
            element: <Book />
          },
          {
            title: "Uppbygging Námsins",
            path: "/uppbygging",
            element: <Courses />
          },
          {
            title: "Verðskrá",
            path: "/verdskra",
            element: <Catalog />
          },
          {
            title: "Um Mig",
            path: "/um-mig",
            element: <About />
          },
          {
            title: "Gítargrip",
            path: "/gitargrip",
            element: <Chords />
          }
        )
}

export type CustomRouteObject = RouteObject &  {
  title: string;
}