import FavoriteLogo from "../../assets/heart.svg";
const Favorite = ({ onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all"
    >
      <img src={FavoriteLogo} alt="" />
      <span>Favorite Locations</span>
    </div>
  );
};

export default Favorite;
