import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react'

import Logout from '../../../helpers/Logout';

const AuthNavbar = () => {

    const [isOpen, setIsOpen] = React.useState(true);
    const ruta = useRouter()
    const { handleLogout } = Logout()

    return (
        <>
            <nav className="h-100 flex items-center justify-start  flex-wrap bg-teal-500 p-6 bg-navbar border-b-4  ">
                <div className="flex items-center  flex-shrink-0 text-white mr-6 flex-row">
                    <span className="font-semibold text-xl tracking-tight text-white text-2xl flex flex-row"><h1 className='  text-black text-2xl'>Administrador</h1></span>
                </div>

                <div style={{ flex: 1 }}></div>
                <div className="block lg:hidden ">
                    <button className="flex items-center px-3 py-2 border border-3 rounded text-teal-200 border-teal-400 hover:text-dark hover:border-dark transition ease-in-out delay-20 " onClick={() => setIsOpen(!isOpen)}>
                        <svg className="fill-current h-3 w-3 fill-dark " viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
                    </button>
                </div>

                <div className={`w-full block flex-end lg:flex lg:items-center  ${isOpen ? "lg:w-auto hidden " : "lg:w-auto"}`}>
                    <div className={`text-sm   lg:flex-grow  `}>
                        {
                            <Link href={"/Upload"}>
                                <h1 className="block mt-4   lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-dark text-lg  transition ease-in-out delay-50">
                                    Subir Proyectos
                                </h1>
                            </Link>
                        }
                    </div>

                    <div className={`text-sm   lg:flex-grow  `}>
                        {
                            <Link href={"/delete"}>
                                <h1 className="block mt-4   lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-dark text-lg  transition ease-in-out delay-50">
                                    Eliminar Proyectos
                                </h1>
                            </Link>
                        }
                    </div>
                </div>
                <div className={`w-full block flex-end lg:flex lg:items-center  ${isOpen ? "lg:w-auto hidden " : "lg:w-auto"}`}>
                    <div className={`text-sm   lg:flex-grow  `}>
                        {
                            <button
                                onClick={handleLogout}
                            >
                                <h1 className="block mt-4   lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 text-dark text-lg  transition ease-in-out delay-50">
                                    Logout
                                </h1>
                            </button>
                        }
                    </div>
                </div>



            </nav>


        </>
    )
}

export default AuthNavbar