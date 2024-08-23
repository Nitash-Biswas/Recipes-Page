import React, { useState } from "react";
import { FaHeart, FaClock, FaStar } from "react-icons/fa";
import { BiSolidBowlHot } from "react-icons/bi";

function Card({ recipe }) {
  const [isFavorite, setIsFavorite] = useState(
    localStorage.getItem("favoriteRecipes")?.includes(recipe.name)
  );
  const handleFavorite = () => {
    //   console.log("Added to favorites");
    let favoriteRecipes =
      JSON.parse(localStorage.getItem("favoriteRecipes")) || [];

    const isInStorage = favoriteRecipes.some(
      (item) => item.name === recipe.name
    );
    //If present in storage, remove it
    if (isInStorage) {
      favoriteRecipes = favoriteRecipes.filter(
        (item) => item.name !== recipe.name
      );
      setIsFavorite(false);
    } else {
      favoriteRecipes.push(recipe);
      setIsFavorite(true);
    }
    localStorage.setItem("favoriteRecipes", JSON.stringify(favoriteRecipes));
  };

  return (
    <>
      <div className="flex flex-col rounded-md bg-base-100 overflow-hidden p-3 relative">
        <img
          className="rounded-md w-full h-48 object-cover cursor-pointer"
          src={recipe.image}
          alt=""
        />

        <div
          className={`absolute btn top-4 border-none right-4 cursor-pointer bg-white rounded-full
            ${isFavorite ? "text-red-500" : "text-slate-600"}`}
          onClick={handleFavorite}
        >
          <FaHeart className="w-6 h-6" />
        </div>

        <div className="absolute flex items-center gap-1 top-[168px] px-3 py-1 bg-white  text-slate-600 font-bold border-none right-4 rounded-full">
          <FaStar /> {recipe.rating}
        </div>

        <div className="flex mt-1 font-bold">{recipe.name}</div>

        <div className="flex my-2 items-center gap-2 ">
          <div className="flex items-center gap-1">
            <FaClock />

            <p className="text-xs">{recipe.prepTimeMinutes} mins</p>
          </div>
          <div className="flex items-center gap-1">
            <BiSolidBowlHot />

            <p className="text-xs">{recipe.servings} servings</p>
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          {recipe.tags.map((tag) => (
            <div
              key={tag}
              className="flex justify-center items-center text-center bg-primary text-white px-2 py-1 rounded-full text-xs"
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Card;
