import React from "react";
import Navigation from "./components/Navigation";
import Join from "./components/Join";
import CategoryCatalog from "./components/CategoryCatalog";
import { CatalogCategory } from "types";
//I don't know how data will look, so i don't see any point in making redux store at this poit
const categories: CatalogCategory[] = [
  {
    image: "assets/img/content/category4.png",
    title: "Title",
    links: [
      ["link1", "foo.bar"],
      ["link2", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
    ],
  },
  {
    image: "assets/img/content/category4.png",
    title: "Title",
    links: [
      ["link1", "foo.bar"],
      ["link2", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
    ],
  },
  {
    image: "assets/img/content/category4.png",
    title: "Title",
    links: [
      ["link1", "foo.bar"],
      ["link2", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
    ],
  },
  {
    image: "assets/img/content/category4.png",
    title: "Title",
    links: [
      ["link1", "foo.bar"],
      ["link2", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
    ],
  },
  {
    image: "assets/img/content/category4.png",
    title: "Title",
    links: [
      ["link1", "foo.bar"],
      ["link2", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
    ],
  },
  {
    image: "assets/img/content/category4.png",
    title: "Title",
    links: [
      ["link1", "foo.bar"],
      ["link2", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
    ],
  },
  {
    image: "assets/img/content/category4.png",
    title: "Title",
    links: [
      ["link1", "foo.bar"],
      ["link2", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
      ["link3", "foo.bar"],
    ],
  },
];

const MainScene = () => {
  return (
    <main className="site-content">
      <Navigation />

      <Join />
      <CategoryCatalog categories={categories} />
    </main>
  );
};

export default MainScene;
