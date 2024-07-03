
import { RiMailFill, } from "react-icons/ri";
import { Link } from "react-router-dom";
export const ForgetPassword = () => {



  return (
    <div className="text-white bg-secondary-100 p-8 rounded-xl shadow-[0px_0px_25px_#bbf7d0] w-auto lg:w-[400px]">
      <h1 className="text-3xl text-center uppercase font-bold tracking-[5px] mb-8">
        Recuperar <span className="text-primary">contraseña</span>
      </h1>
      <form className="mb-8">
        
        <div className="relative mb-8">
          <RiMailFill className="absolute top-1/2 -translate-y-1/2 left-2"/>
          <input 
            type="email"
            className="py-3 pl-8 pr-4 bg-secondary-900 w-full outline-none rounded-lg"
            placeholder="Correo electronico"
          />
        </div>
        <div>
          <button type="submit" className="bg-primary w-full text-white upercase font- text-sm py-3 px-4 rounded-lg hover:text-gray-100 transition-colors">
            Enviar instrucciones
          </button>
        </div>
      </form>
      <div className="flex flex-col items-center gap-4 ">
        <span className="flex items-center gap-2">
        <Link to="/auth" className="hover:text-primary transition-colors">
          ¿Ya tienes cuenta?
        </Link>
        </span>
        <span className="flex items-center gap-2">
          ¿No tienes cuenta? 
          <Link to="/auth/registro" className="text-primary/90 hover:text-gray-100 transition-colors">
            Registrate
          </Link>
        </span>
      </div>
    </div>
  )
}


