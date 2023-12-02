import { Link } from "react-router-dom";
import { Card } from "../../components/card/Card";
import { useOdontContext } from "../../context/OdontContext";

const Destacado = () => {
  //const fav = JSON.parse(localStorage.getItem("favoritos"));
  const { state, dispatch } = useOdontContext();
  const fav = state.favoritos;
  const removeFromFavorites = (odontId) => {
    dispatch({ type: "REMOVE_FAVORITE", payload: odontId });
  };
  return (
    <main className="flex flex-col items-center overflow-x-hidden min-h-screen">
      <Link
        to="/"
        className="bg-[#7fbaeb] hover:bg-[#62aae5] hover:scale-105 hover:shadow-md transition-all duration-300 active:scale-95 active:font-light active:shadow-none text-white hover:font-bold py-1 px-3 rounded-lg mt-6"
      >
        Volver
      </Link>

      <h2 className="text-[32px] font-bold m-6">Odontologos destacados</h2>
      <section className="flex flex-wrap gap-4 justify-center items-center">
        {fav.length > 0 ? (
          <>
            {fav.map((odontfav) => (
              <div className="flex flex-col gap-2" key={odontfav.id}>
                <Card user={odontfav} />
                <button
                  className="bg-red-600 hover:bg-red-700 hover:scale-105 hover:shadow-md transition-all duration-300 active:scale-95 active:font-light active:shadow-none text-white hover:font-bold py-1 px-3 rounded-lg"
                  onClick={() => removeFromFavorites(odontfav.id)}
                >
                  Quitar de favoritos
                </button>
              </div>
            ))}
          </>
        ) : (
          <p className="text-[2rem]">Sin Odontologos guardados</p>
        )}
      </section>
    </main>
  );
};

export default Destacado;