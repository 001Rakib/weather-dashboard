import { FavoriteContext } from "../context";
import { useLocalStorage } from "../hooks";

const FavoriteProvider = ({ children }) => {
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const handleAddToFavorites = (latitude, longitude, location) => {
    setFavorites([...favorites, { latitude, longitude, location }]);
  };

  const handleRemoveFromFavorites = (location) => {
    const updatedFavorites = favorites.filter(
      (favorite) => favorite.location !== location
    );
    setFavorites(updatedFavorites);
  };

  return (
    <FavoriteContext.Provider
      value={{ favorites, handleAddToFavorites, handleRemoveFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export default FavoriteProvider;
