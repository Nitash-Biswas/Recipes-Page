import { useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";

const RECIPES_PER_PAGE = 2;
function Favorites() {
  const favoriteRecipes =
    JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = RECIPES_PER_PAGE;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const recordsThisPage = favoriteRecipes.slice(firstIndex, lastIndex);
  const numPages = Math.ceil(favoriteRecipes.length / recordsPerPage);

  return (
    <>
      <div className="bg-base-300 flex flex-col pt-16 px-8 pb-8 h-full">
        <div className="flex flex-col items-start py-4">
          <p className="text-3xl md:text-5xl mb-4 ">Favorites</p>
          <div className={`${recordsThisPage.length ? "" : "hidden"} `}>
            <Pagination
              nPages={numPages}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
        {recordsThisPage.length === 0 && (
          <div className="flex text-3xl text-slate-600 items-center justify-center h-screen ">
            No favorite recipes
          </div>
        )}
        <div
          className={`${
            recordsThisPage.length ? "" : "hidden"
          } h-screen overflow-y-scroll`}
        >
          <div className="flex-grow grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {recordsThisPage.length !== 0 &&
              recordsThisPage.map((recipe) => (
                <Card key={recipe.id} recipe={recipe} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Favorites;
