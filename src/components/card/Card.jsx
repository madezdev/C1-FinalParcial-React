import { useEffect } from "react";
import { Heart, HeartOutline } from "../UI/icons/Icon";
import { Link } from "react-router-dom";
import { useOdontContext } from "../../context/OdontContext";

export const Card = ({ user }) => {
  const { state, dispatch } = useOdontContext();
  const isFavorited = state.favoritos.some((fav) => fav.id === user.id);

  useEffect(() => {
    localStorage.setItem(`favorite_${user.id}`, isFavorited.toString());
  }, [isFavorited, user.id]);

  const toggleFavorite = () => {
    if (isFavorited) {
      dispatch({ type: "REMOVE_FAVORITE", payload: user.id });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: user });
    }
  };

  return (
    <article className="relative flex flex-col justify-center items-center w-[230px] bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300">
      <img className="" src={"/images/doctor.jpg"} alt={"probando"} />
      <div className=" h-[150px] flex flex-col justify-center items-center">
        <h3 className="font-bold text-gray-700 text-xl">{user.name}</h3>
        <p className="text-gray-700 text-base">{user.username}</p>
        <p className="text-gray-300">Matricula: {user.id}</p>
        <div className="mt-2">
          <Link
            to={`/card/${user.id}`}
            className="bg-[#7fbaeb] hover:bg-[#62aae5] hover:scale-105 hover:shadow-md transition-all duration-300 active:scale-95 active:font-light active:shadow-none text-white hover:font-bold py-1 px-3 rounded-lg"
          >
            Ver Perfil
          </Link>
        </div>
      </div>

      <div className=" flex justify-between items-center">
        <button
          onClick={toggleFavorite}
          className={` ${
            isFavorited ? "text-red-500" : "text-gray-500"
          } hover:scale-125 hover:text-red-500 transform transition duration-300 ease-in-out absolute top-2 right-2 text-[24px]`}
        >
          {isFavorited ? <Heart /> : <HeartOutline />}
        </button>
      </div>
    </article>
  );
};
