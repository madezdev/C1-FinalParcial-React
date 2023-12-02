import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart, HeartOutline } from "../UI/icons/Icon";
import { useOdontContext } from "../../context/OdontContext";

export const OdontDetail = ({ odont }) => {
  const { state, dispatch } = useOdontContext();
  const isFavorited = state.favoritos.some((fav) => fav.id === odont.id);

  useEffect(() => {
    localStorage.setItem(`favorite_${odont.id}`, isFavorited.toString());
  }, [isFavorited, odont.id]);

  const toggleFavorite = () => {
    if (isFavorited) {
      dispatch({ type: "REMOVE_FAVORITE", payload: odont.id });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: odont });
    }
  };

  return (
    <div className="relative max-w-2xl mx-auto p-4 w-[520px] flex flex-col justify-center gap-4">
      <Link
        to="/"
        className="bg-[#7fbaeb] hover:bg-[#62aae5] hover:scale-105 hover:shadow-md transition-all duration-300 active:scale-95 active:font-light active:shadow-none text-white hover:font-bold py-1 px-3 rounded-lg w-[100px] text-center"
      >
        Volver
      </Link>
      <div className="mb-4 ">
        <img
          src={"/images/doctor.jpg"}
          alt={odont.name}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="bg-white p-6 rounded-md shadow-md main-container">
        <h2 className="text-2xl font-bold mb-4">{odont.name}</h2>
        <div className="mb-4">
          <strong>Email:</strong> {odont.email}
        </div>
        <div className="mb-4">
          <strong>Teléfono:</strong> {odont.phone}
        </div>
        <div>
          <strong>Sitio web:</strong> {odont.website}
        </div>
      </div>

      <div className=" flex justify-between items-center">
        <button
          onClick={toggleFavorite}
          className={` ${
            isFavorited ? "text-red-500" : "text-gray-500"
          } hover:scale-125 hover:text-red-500 transform transition duration-300 ease-in-out absolute top-20 right-8 text-[32px]`}
        >
          {isFavorited ? <Heart /> : <HeartOutline />}
        </button>
      </div>
    </div>
  );
};
