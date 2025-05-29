import { useContext, useEffect, useState } from "react";
import HeartImg from "../../assets/heart.svg";
import RedHeartImg from "../../assets/heart-red.svg";
import { FavoriteContext, WeatherContext } from "../../context";

const AddToFavorite = () => {
  const { favorites, handleAddToFavorites, handleRemoveFromFavorites } =
    useContext(FavoriteContext);

  const { weatherData } = useContext(WeatherContext);
  const { latitude, longitude, location } = weatherData;

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setIsFavorite(found);
  }, [favorites, location]);

  const handleFavorite = () => {
    const found = favorites.find((fav) => fav.location === location);

    if (!found) {
      handleAddToFavorites(latitude, longitude, location);
    } else {
      handleRemoveFromFavorites(location);
    }

    setIsFavorite(!isFavorite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>{isFavorite ? "Remove from favorite" : "Add to Favorite"}</span>
          <img src={isFavorite ? RedHeartImg : HeartImg} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavorite;
