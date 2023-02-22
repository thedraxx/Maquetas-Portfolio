import React from 'react'

const Footer = () => {
    return (
        <footer className=" bg-black text-center text-white">
            <div
                className="p-4 text-center">
                © 2023 Copyright:
                <div className='flex flex-col'>
                    <a className="text-whitehite" href="https://tailwind-elements.com/">Developed By</a>
                    <div className='flex flex-row justify-center items-center '>
                        <a className="text-whitehite mr-2" href="https://tailwind-elements.com/">Frank</a>
                        <a className="text-whitehite  mr-2" href="https://tailwind-elements.com/"> & </a>
                        <a className="text-whitehite  mr-2" href="https://tailwind-elements.com/">Tomas</a>
                    </div>


                </div>

            </div>
        </footer>
    )
}

export default Footer