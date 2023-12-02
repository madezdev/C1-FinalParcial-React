
import { useForm } from "react-hook-form";

const Contacto = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();


  const onSubmit = handleSubmit((data) => {
    console.log(data);

  });

  return (
    <main className="min-h-[calc(100vh-232px)]">
      <section className="font-avantBk text-[#1C6A94] flex flex-col items-center justify-center h-[calc(100vh-232px)] w-full  ">
        <div className="flex flex-col">
          <form
            onSubmit={onSubmit}
            className="w-[620px] flex flex-col gap-8 max-w-lg mx-auto mt-2 p-4 bg-white rounded-md shadow"
          >
            <div className="">
              <label className="block font-avantDem text-[#1C6A94]">
                Nombre y Apellido
              </label>
              <input
                {...register("TxtDescUser", {
                  required: {
                    value: true,
                    message: "Ingrese el Nombre y Apellido",
                  },
                  minLength: {
                    value: 3,
                    message: "El Nombre y Apellido debe tener al menos 3 caracteres",
                  },
                  maxLength: 30,
                })}
                type="text"
                placeholder="Ingrese el nuevo Nombre y Apellido"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300"
              />
              {errors.TxtDescUser && (
                <span className="text-red-500 text-xs">
                  {String(errors.TxtDescUser.message)}
                </span>
              )}
            </div>

            <div className=" ">
              <label className="block font-avantDem text-[#1C6A94]">
                Correo Electrónico
              </label>
              <input
                {...register("Email", {
                  required: {
                    value: true,
                    message: "Ingrese el correo electrónico",
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Ingrese un correo electrónico válido",
                  },
                })}
                type="email"
                placeholder="Ingrese el correo electrónico"
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300"
              />

              {errors.Email && (
                <span className="text-red-500 text-xs">
                  {String(errors.Email.message)}
                </span>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#1C6A94] hover:bg-[#1C6A94] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Enviar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};


export default Contacto;
