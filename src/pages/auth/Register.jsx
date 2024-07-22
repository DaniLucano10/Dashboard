import { useState } from "react";
import {
  RiMailFill,
  RiLockFill,
  RiEyeFill,
  RiEyeOffFill,
  RiUserLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";

export const Register = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-white bg-secondary-100 p-8 rounded-xl shadow-[0px_0px_25px_#bbf7d0] w-auto lg:w-[400px]">
        <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] mb-8">
          Crear <span className="text-primary">cuenta</span>
        </h1>
        <form className="mb-8">
          <button className="flex items-center justify-center py-3 px-4 gap-4 bg-secondary-900 w-full rounded-full mb-8 text-gray-100">
            <img
              src="https://www.keyweo.com/wp-content/uploads/2022/03/el-logo-g-de-google.png"
              className="w-19 h-6"
            />
            Regisatrate con google
          </button>
          <div className="relative mb-4">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Nombre(s)"
            />
          </div>
          <div className="relative mb-4">
            <RiUserLine className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="text"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Apellidos"
            />
          </div>
          <div className="relative mb-4">
            <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type="email"
              className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Correo electronico"
            />
          </div>
          <div className="relative mb-4">
            <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Contraseña"
            />
            {showPassword ? (
              <RiEyeOffFill
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            ) : (
              <RiEyeFill
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            )}
          </div>
          <div className="relative mb-4">
            <RiLockFill className="absolute top-1/2 -translate-y-1/2 left-2" />
            <input
              type={showPassword ? "text" : "password"}
              className="py-3 px-8 bg-secondary-900 w-full outline-none rounded-lg"
              placeholder="Confirmar contraseña"
            />
            {showPassword ? (
              <RiEyeOffFill
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            ) : (
              <RiEyeFill
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 -translate-y-1/2 right-2 hover:cursor-pointer"
              />
            )}
          </div>
          <div>
            <button
              type="submit"
              className="bg-primary w-full text-white upercase font- text-sm py-3 px-4 rounded-lg hover:text-gray-100 transition-colors"
            >
              Ingresar
            </button>
          </div>
        </form>

        <span className="flex items-center justify-center gap-2">
          ¿Ya tienes cuentas?{""}
          <Link
            to="/login"
            className="text-primary/90 hover:text-gray-100 transition-colors"
          >
            Ingresa
          </Link>
        </span>
      </div>

    </div>
  );
};
