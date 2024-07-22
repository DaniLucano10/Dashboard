import { RiEdit2Line, RiShieldCheckLine } from "react-icons/ri"
import { Link } from "react-router-dom"
import { Switch } from '@headlessui/react'
import { useState } from "react"

export const Profile = () => {

    const [enabled, setEnabled] = useState(false);
    return (
        <>
            <div className="bg-secondary-100 p-8 rounded-xl mb-8">
                <h1 className="text-xl text-gray-100">Perfil</h1>
                <hr className="my-8 border-gray-500/30" />
                <form>
                    <div className="flex items-center mb-8">
                        <div className="w-1/4">
                            <p className="text-white">Avatar</p>
                        </div>
                        <div className="flex-1">
                            <div className="relative mb-2">
                                <img src="https://img.freepik.com/foto-gratis/cintura-arriba-retrato-hombre-guapo-afeitar-serio-mantiene-manos-juntas-vestido-camisa-azul-oscuro-ha-hablado-interlocutor-esta-parado-contra-pared-blanca-freelancer-hombre-seguro-si-mismo_273609-16320.jpg" className="w-28 h-28 object-cover rounded-lg" />
                                <label htmlFor="avatar" className="absolute bg-secondary-100 p-2 rounded-full hover:cursor-pointer -top-2 left-24">
                                    <RiEdit2Line className="text-white" />
                                </label>
                                <input type="file" id="avatar" className="hidden" />
                            </div>
                            <p className="text-gray-500 text-sm">
                                Alow file types: png, jpg, jpeg.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center mb-8">
                        <div className="w-1/4">
                            <p className="text-white">
                                Nombre Completo <span className="text-red-500">*</span>
                            </p>
                        </div>
                        <div className="flex-1 flex items-center gap-4">
                            <div className="w-full">
                                <input
                                    type="text"
                                    className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                                    placeholder="Nombre(s)"
                                />
                            </div>
                            <div className="w-full">
                                <input
                                    type="text"
                                    className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                                    placeholder="Apellido(s)"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center mb-8">
                        <div className="w-1/4">
                            <p className="text-white">
                                Nombre de la empresa <span className="text-red-500">*</span>
                            </p>
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                                placeholder="Nombre(s)"
                            />
                        </div>
                    </div>
                    <div className="flex items-center mb-8">
                        <div className="w-1/4">
                            <p className="text-white">
                                Número de contacto <span className="text-red-500">*</span>
                            </p>
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                                placeholder="Nombre(s)"
                            />
                        </div>
                    </div>
                    <div className="flex items-center mb-8">
                        <div className="w-1/4">
                            <p className="text-white">
                                Página web <span className="text-red-500">*</span>
                            </p>
                        </div>
                        <div className="flex-1">
                            <input
                                type="text"
                                className="w-full py-2 px-4 outline-none rounded-lg bg-secondary-900"
                                placeholder="Nombre(s)"
                            />
                        </div>
                    </div>
                    <div className="flex items-center mb-8">
                        <div className="w-1/4">
                            <p className="text-white">
                                País <span className="text-red-500">*</span>
                            </p>
                        </div>
                        <div className="flex-1">
                            <select className="w-full py-2 px-4 outline-none text-white rounded-lg bg-secondary-900 appearance-none">
                                <option value="Argentina" >Argentina</option>
                                <option value="Colombia">Colombia</option>
                                <option value="Perú" selected>Perú</option>
                                <option value="Venezuela">Venezuela</option>
                                <option value="México">México</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex items-center mb-8">
                        <div className="w-1/4">
                            <p className="text-white">
                                Ciudad <span className="text-red-500">*</span>
                            </p>
                        </div>
                        <div className="flex-1">
                            <select className="w-full py-2 px-4 outline-none text-white rounded-lg bg-secondary-900 appearance-none">
                                <option value="Lima" selected>Lima</option>
                                <option value="Bogotá">Bogotá</option>
                                <option value="Caracas">Caracas</option>
                                <option value="Buga">Buga</option>
                                <option value="México">México</option>
                            </select>
                        </div>
                    </div>
                </form>
                <hr className="my-8 border-gray-500/30" />
                <div className="flex justify-end">
                    <button className="bg-primary text-black py-2 px-4 rounded-lg hover:bg-primary/50 transition-colors">Guardar</button>
                </div>
            </div>

            {/*  Change password */}
            <div className="bg-secondary-100 p-8 rounded-xl mb-8">
                <h1 className="text-xl text-gray-100">Usuario y contraseña</h1>
                <hr className="my-8 border-gray-500/30" />
                <form className="mb-8">
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="text-xl text-gray-100 mb-1">Correo electrónico</h5>
                            <p className="text-sm text-gray-500">danilucano@gmail.com</p>
                        </div>
                        <div>
                            <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                                Cambiar email
                            </button>
                        </div>
                    </div>
                    <hr className="my-8 border-gray-500/30 border-dashed" />
                    <div className="flex items-center justify-between">
                        <div>
                            <h5 className="text-xl text-gray-100 mb-1">Contraseña</h5>
                            <p className="text-sm text-gray-500">******************</p>
                        </div>
                        <div>
                            <button className="bg-secondary-900/50 py-3 px-4 rounded-lg hover:bg-secondary-900 hover:text-gray-100 transition-colors">
                                Cambiar contraseña
                            </button>
                        </div>
                    </div>
                </form>
                <div className="grid grid-cols-1 md:grid-cols-8 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600">
                    <div className="flex justify-center">
                        <RiShieldCheckLine className="text-5xl text-green-600" />
                    </div>
                    <div className="md:col-span-6">
                        <h5 className="text-gray-100 text-xl mb-2">Asegura tu cuenta</h5>
                        <p className="text-gray-500">
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500
                        </p>
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-green-600/70 hover:bg-green-600 transition-colors py-2 px-4 rounded-lg text-gray-100">
                            Activar
                        </button>
                    </div>
                </div>
            </div>

            {/* Connected accounts */}
            <div className="bg-secondary-100 p-8 rounded-xl mb-8">
                <h1 className="text-xl text-gray-100">Conectar por cuentas</h1>
                <hr className="my-8 border-gray-500/30" />
                <div className="flex gap-4 items-center bg-green-600/10 p-4 rounded-lg border border-dashed border-green-600 mb-8">
                    <div className="flex justify-center">
                        <RiShieldCheckLine className="text-5xl text-green-600" />
                    </div>
                    <div className="flex-1">
                        <p className="text-gray-500">
                            Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500. <Link to="/" className="text-green-400">Learn More</Link>
                        </p>
                    </div>
                </div>
                <form className="mb-8">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img src="https://img.freepik.com/psd-gratis/icono-google-aislado-3d-renderizar-ilustracion_47987-9777.jpg?size=626&ext=jpg" className="w-8 h-8 object-cover" />
                            <div className="flex flex-col gap-y-1">
                                <h5 className="text-gray-100">Google</h5>
                                <p className="text-gray-500 text-sm">
                                    Plan properly your workflow
                                </p>
                            </div>
                        </div>
                        <div>
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-green-500' : 'bg-secondary-900'}
                                    relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    
                                    className={`${enabled ? 'translate-x-9 bg-secondary-900' : 'translate-x-0 bg-gray-500'}
                                        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className="my-8 border-gray-500/30 border-dashed" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" className="w-8 h-8 object-cover" />
                            <div className="flex flex-col gap-y-1">
                                <h5 className="text-gray-100">GitHub</h5>
                                <p className="text-gray-500 text-sm">
                                    Plan properly your workflow
                                </p>
                            </div>
                        </div>
                        <div>
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-green-600' : 'bg-secondary-900'}
                                    relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    
                                    className={`${enabled ? 'translate-x-9 bg-secondary-900' : 'translate-x-0 bg-gray-500'}
                                        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className="my-8 border-gray-500/30 border-dashed" />
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <img src="https://w7.pngwing.com/pngs/345/302/png-transparent-chat-slack-slack-logo-social-media-icon-thumbnail.png" className="w-8 h-8 object-cover" />
                            <div className="flex flex-col gap-y-1">
                                <h5 className="text-gray-100">Slack</h5>
                                <p className="text-gray-500 text-sm">
                                    Plan properly your workflow
                                </p>
                            </div>
                        </div>
                        <div>
                            <Switch
                                checked={enabled}
                                onChange={setEnabled}
                                className={`${enabled ? 'bg-green-500' : 'bg-secondary-900'}
                                    relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
                            >
                                <span className="sr-only">Use setting</span>
                                <span
                                    
                                    className={`${enabled ? 'translate-x-9 bg-secondary-900' : 'translate-x-0 bg-gray-500'}
                                        pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
                                />
                            </Switch>
                        </div>
                    </div>
                    <hr className="my-8 border-gray-500/30 border-dashed" />
                </form>

            </div>
        </>
    )
}
