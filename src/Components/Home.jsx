import React, { useContext, useState } from "react";

import Card from "./Card";
import Loader from "./Loader";

import { RecipesContext } from "../Contexts/RecipeContext";
import Pagination from "./Pagination";

const RECORDS_PER_PAGE = 20;

function Home() {
  const { recipes, loading } = useContext(RecipesContext);
  const [currentPage, setCurrentPage] = useState(1);

  const recordsPerPage = RECORDS_PER_PAGE;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const recordsThisPage = recipes.slice(firstIndex, lastIndex);
  const numPages = Math.ceil(recipes.length / recordsPerPage);

  return (
    <>
      <div className="bg-base-300 flex flex-col pt-16 px-8 pb-8 h-screen ">
        <div className="flex flex-col items-start py-4">
          <p className="text-3xl md:text-5xl mb-4 ">Home</p>

          <Pagination
            nPages={numPages}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
        </div>
        <div className="h-screen overflow-y-scroll scrollbar">
          <div className="flex-grow grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {loading
              ? [...Array(6)].map((_, index) => <Loader key={index} />)
              : recordsThisPage.map((recipe) => (
                  <Card key={recipe.id} recipe={recipe} />
                ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
