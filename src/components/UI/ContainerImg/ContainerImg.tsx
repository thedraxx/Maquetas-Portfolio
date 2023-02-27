import React, { useState } from 'react'
import Image from 'next/image';
import InfoUsser from '../InfoUsser/InfoUsser';
import { IProyects } from '@/interface';


interface Props {
    proyects: IProyects[]
}


const ContainerImg = ({ proyects }: Props) => {

    const [imagesProyects, setimagesProyects] = useState(proyects.length - 1)

    const plusImage = () => {
        if (imagesProyects < proyects.length - 1) {
            setimagesProyects(imagesProyects + 1)
        }
    }

    const lessImage = () => {
        if (imagesProyects > 0 && imagesProyects <= proyects.length - 1) {
            setimagesProyects(imagesProyects - 1)
        }
    }

    return (
        <div className="flex flex-1 flex-col justify-center items-center content-center bg-black h-auto  sm:p-0 lg:p-10">
            <div className="flex justify-center items-center content-center bg-black h-auto  sm:p-0 lg:p-24">
                <div
                    style={{
                        position: "absolute",
                        zIndex: 999,
                        justifyContent: "space-between",
                        alignItems: "center",
                        display: "flex",
                        flex: 1,
                        flexDirection: "row",
                        width: "95%",
                    }}
                >
                    <button
                        onClick={() => {
                            lessImage()
                        }}
                    >
                        <h1
                            className="text-white text-2xl font-bold text-center ml-10"
                        >
                            {
                                "<"
                            }
                        </h1>
                    </button>
                    <button
                        onClick={() => {
                            plusImage()

                        }}
                    >
                        <h1
                            className="text-white text-2xl font-bold text-center ml-10"
                        >
                            {
                                ">"
                            }
                        </h1>
                    </button>
                </div>
                <Image
                    src={proyects[imagesProyects].img}
                    alt={"imagen"}
                    width={300}
                    height={300}
                />

                <h1
                    className="text-white text-2xl font-bold text-center ml-10"
                >
                    {proyects[imagesProyects].title}
                </h1>




            </div>




        </div>
    )
}

export default ContainerImg