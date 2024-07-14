import { RiArrowDownSLine, RiChat3Line, RiLogoutCircleLine, RiNotification3Line, RiSettings3Line, RiThumbUpLine } from "react-icons/ri"
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import { Link } from "react-router-dom";


export const Header = () => {
  return (
    <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end text-white">
      <nav className="flex items-center gap-2">
        <Menu
          menuButton = {
            <MenuButton className="relative hover:bg-secondary-100 p-2 rounded-lg transition-colors">
              <RiNotification3Line />
              <span className="absolute -top-0.5 right-0 bg-primary py-0.5 px-[5px] box-content text-white rounded-full text-[8px] front-bold">
                2
              </span>
            </MenuButton>
          }
          align="end"
          transition
          menuClassName="bg-secondary-100 p-4"
        >
          <h1 className="text-gray-300 text-center font-medium">
            Notificaciónes(2)
          </h1>
          <hr className="my-6 border-gray-500"/>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/" className="text-gray-300 flex items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg">
              <img src="https://img.freepik.com/foto-gratis/hombre-mediano-que-trabaja-como-agente-bienes-raices_23-2151064973.jpg"
                className="w-8 h-8 object-cover rounded-full "
              />
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Dani Lucano Ocas</span> 
                  <span className="text-[8px]">14/07/2024</span> 
                </div>
                <p className="text-gray-500 text-xs">Lorem ipsum dolor sit amet...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/" className="text-gray-300 flex items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg">
              <RiThumbUpLine className="p-2 bg-blue-300 text-blue-700 box-content rounded-full"/>
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo like</span> 
                  <span className="text-[8px]">14/07/2024</span> 
                </div>
                <p className="text-gray-500 text-xs">A Dani Lucano le gusta tu pub...</p>
              </div>
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/" className="text-gray-300 flex flex-1 items-center gap-4 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg">
              <RiChat3Line className="p-2 bg-yellow-200 text-yellow-600 box-content rounded-full"/>
              <div className="text-sm flex flex-col">
                <div className="flex items-center justify-between gap-4">
                  <span>Nuevo comentario</span> 
                  <span className="text-[8px]">14/07/2024</span> 
                </div>
                <p className="text-gray-500 text-xs">A Dani Lucano ah comentado tu...</p>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-6 border-gray-500"/>
          <MenuItem className="p-0 hover:bg-transparent flex justify-center cursor-default">
            <Link to="/" className="text-gray-500 text-sm hover:text-primary transition-colors">
              Todas las notificaciones
            </Link>
          </MenuItem>
        </Menu>
        <Menu
          menuButton={
            <MenuButton className="flex items-center gap-x-2 hover:bg-secondary-100 py-2 px-4 rounded-lg transition-colors">
              <img src="https://img.freepik.com/foto-gratis/hombre-mediano-que-trabaja-como-agente-bienes-raices_23-2151064973.jpg"
                className="w-6 h-6 object-cover rounded-full"
              />
              <span>Dani Lucano Ocas</span>
              <RiArrowDownSLine />
            </MenuButton>
          } 
          align="end"
          transition
          menuClassName="bg-secondary-100 px-4"
        >
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/perfil" className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 p-2 flex-1">
              <img src="https://img.freepik.com/foto-gratis/hombre-mediano-que-trabaja-como-agente-bienes-raices_23-2151064973.jpg"
                className="w-8 h-8 object-cover rounded-full"
              />
              <div className="flex flex-col text-sm">
                <span className="text-sm">Dani Lucano Ocas</span>
                <span className="text-xs text-gray-500">dani@gmail.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className="my-4 border-gray-500"/>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/cerrar-sesion" className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1">
              <RiSettings3Line /> Configuración
            </Link>
          </MenuItem>
          <MenuItem className="p-0 hover:bg-transparent">
            <Link to="/configuración" className="rounded-lg transition-colors text-gray-300 hover:bg-secondary-900 flex items-center gap-x-4 py-2 px-6 flex-1">
              <RiLogoutCircleLine /> Cerrar sesión
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </header>
  )
}
