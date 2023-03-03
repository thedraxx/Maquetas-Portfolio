import React from 'react'
import Layout from '@/components/Layout/Layout';
import Image from 'next/image';

const About = () => {
    return (
        <Layout
            title='About'
            description='About me'
        >
            <div
                style={{
                    backgroundColor: '#d6d6d6',
                    justifyContent: 'center',
                    display: 'flex',
                    width: '100%',
                    paddingLeft: '25%',
                    paddingRight: '25%',
                }}
            >

                <div
                    className='flex flex-col justify-center items-center w-100'
                >
                    <h1
                        className='text-4xl font-bold mt-10 mb-10'
                    >Quién es el Mochilote</h1>
                    <h2
                        className='text-xl font-bold text-dark'
                    >Mi nombre es Guillermo Guida. Vivo en la ciudad de Rosario, provincia de Santa Fe; a orillas del río Paraná; en la zona norte de la pampa húmeda en el centro-este de la república Argentina.</h2>

                    <div
                        className='flex justify-center items-center w-100 sm:flex-col lg:flex-row '
                    >
                        <h3
                            className="mt-10 sm:text-sm lg:text-lg"
                        >
                            El nombre Mochilote surge en un juego de dardos con mi hermano César en el tedio de un interminable día de verano, allá por los últimos años de la década del {"'80"}. Al golpear los dardos contra el piso o la pared, sus puntas se iban mochando, y particularmente a un dardo que por mocho que estaba y ya casi no podía clavarse, empezamos a nombrarlo como el mocho, mochila y finalmente, Mochilote.

                            No más allá del 2006, me registré en un foro local de modelismo, y como no se me ocurría un seudónimo interesante vino a mi recuerdo el nombre de ese dardo y ahí quedó desde entonces.
                        </h3>

                        <Image
                            src='/images/mochimate.png'
                            width={400}
                            height={400}
                            alt='Profile'
                        />
                    </div>

                    <h3 className='sm:text-sm lg:text-lg lg:mt-10'>Luego de terminada mi educación secundaria, comencé armando y pintando maquetas con kits comerciales de modelismo militar a escala 1:35. No conforme con las posibilidades que ofrecía el mercado en nuestro medio, comencé a modelar mis propias piezas, especialmente en lo referente a las figuras que proporcionaban dichos kits, que eran muy escasas o nulas. Esto me dio la posibilidad de conocer nuevos materiales, con los que más adelante pude experimentar en escalas más grandes en la búsqueda de mayor detalle. Es así que, allá por el 2005/ 2006 esculpí con masilla epóxica y madera todas las piezas de un juego de ajedrez. Entonces, me enteré que existían a nivel mundial muchos artistas que se dedican a esculpir bustos y figuras a escalas grandes (1:9 y 1:6), similares al tamaño de mis piezas de ajedrez. Ya con el nombre artístico de El Mochilote, empecé a dar mis primeros pasos esculpiendo bustos de soldados de la Segunda Guerra Mundial y otros conflictos de distintas épocas y lugares en escala 1:6, y más adelante bustos y figuras completas a escala 1:9 con temáticas más variadas. Con estos últimos participé de concursos de modelismo a nivel local y nacional, obteniendo premios y menciones. En está escala, 1:9, hice mis primeros marinos: 2 capitanes de barco y un arponero, y me enamoré de esa temática. </h3>

                    <div
                        className='flex justify-center items-center w-100 mt-10 sm:flex-col lg:flex-row'
                    >
                        <Image
                            src='/images/mochiuser1.png'
                            width={200}
                            height={200}
                            alt='Profile'
                        />
                        <h1
                            className=' sm:text-sm ml-0 mt-5 lg:text-lg lg:ml-5'
                        >
                            En el año 2019 tuve la posibilidad de viajar a Ushuaia en plan de visita a mi hermano mayor que vive en esa ciudad desde antes del cambio de milenio. Marcelo, que ejerce la medicina en la parte más austral de nuestro continente, tiene la dicha de salir a navegar en velero con asiduidad, e incluso en varias ocasiones ha podido surcar diferentes mares fuera de nuestro continente.
                            Ya que nos hospedó en su casa, no podía menos que llevarle un presente, y qué más adecuado que algo hecho con mis manos. En poco más de una semana esculpí mi {"Viejo Lobo de Mar"}, en escala 1:6; una escala en que me siento cómodo y puedo agregar profusión de detalles.
                        </h1>
                    </div>

                    <div
                        className='flex justify-center items-center w-100 mt-10 sm:flex-col lg:flex-row-reverse'
                    >
                        <Image
                            src='/images/03002a2d-2.png'
                            width={200}
                            height={200}
                            alt='Profile'
                        />

                        <h1
                            className=' sm:text-sm ml-0 mt-5 lg:text-lg lg:ml-5'
                        >
                            En el año 2019 tuve la posibilidad de viajar a Ushuaia en plan de visita a mi hermano mayor que vive en esa ciudad desde antes del cambio de milenio. Marcelo, que ejerce la medicina en la parte más austral de nuestro continente, tiene la dicha de salir a navegar en velero con asiduidad, e incluso en varias ocasiones ha podido surcar diferentes mares fuera de nuestro continente.
                            Ya que nos hospedó en su casa, no podía menos que llevarle un presente, y qué más adecuado que algo hecho con mis manos. En poco más de una semana esculpí mi {"Viejo Lobo de Mar"}, en escala 1:6; una escala en que me siento cómodo y puedo agregar profusión de detalles.
                        </h1>
                    </div>

                    <div
                        className='flex justify-center items-center w-100 mt-10 sm:flex-col lg:flex-row'
                    >
                        <Image
                            src='/images/FB_IMG_1651398257578.png'
                            width={200}
                            height={200}
                            alt='Profile'
                        />

                        <h1
                            className=' sm:text-sm ml-0 mt-5 lg:text-lg lg:ml-5'
                        >
                            En el año 2019 tuve la posibilidad de viajar a Ushuaia en plan de visita a mi hermano mayor que vive en esa ciudad desde antes del cambio de milenio. Marcelo, que ejerce la medicina en la parte más austral de nuestro continente, tiene la dicha de salir a navegar en velero con asiduidad, e incluso en varias ocasiones ha podido surcar diferentes mares fuera de nuestro continente.
                            Ya que nos hospedó en su casa, no podía menos que llevarle un presente, y qué más adecuado que algo hecho con mis manos. En poco más de una semana esculpí mi {"Viejo Lobo de Mar"}, en escala 1:6; una escala en que me siento cómodo y puedo agregar profusión de detalles.
                        </h1>
                    </div>

                    <div
                        className='flex justify-center items-center w-100 mt-5 flex-col'
                    >
                        <h1
                            className=' sm:text-sm ml-0 mt-5 lg:text-lg lg:ml-5'
                        >
                            Así promedió el año 2019 en que escupí dos o tres bustos más, con la misma temática, y se me ocurrió esculpir toda una serie de {"Hombres de Mar"}, siempre en escala 1:6.

                            Con la llegada del COVID-19, para bien o para mal cambió nuestro día a día, y es así que de un día para el otro, el hotel en cuya recepción trabajo, dejó de recibir huéspedes y cerró sus puertas en espera de mejores vientos...
                            En las ocho horas diarias que me tocaba hacer guardia en un mostrador dentro de un inmenso lobby a oscuras, con mis herramientas y masillas en mano, aproveché a esculpir y pintar a lo largo del 2020 no menos de 10 bustos. Con varios de mis {"Hombres de Mar"} participé de concursos internacionales que, gracias a la pandemia que a todos nos mantenía encerrados, también nos permitió viajar en forma virtual y obtener así, entre otros, un premio a la mejor figura en un concurso celebrado en la remota ciudad rusa de Janty-Mansisk, a unos 2900 km al este de Moscú.

                            En los años siguientes continué con mis {"Hombres de Mar"} así como con figuras completas a escala 1:9 con que participé de otros concursos nacionales e internacionales.

                            Hoy, mi producción artística es mucho menor ya que, por suerte todo va volviendo al ritmo pre-pandemia, tanto en lo laboral como en lo social; pero nunca para.


                        </h1>
                    </div>

                    <div
                        className='flex justify-center items-center w-100 mt-10 mb-10 flex-col border-collapse '
                    >

                        <h1
                            className='text-darkblue mb-10 sm:text-sm ml-0 mt-5 lg:text-lg lg:ml-5'
                        >
                            Enero de 2005. Mi viejo navegando en el río Paraná frente a las costas de Rosario al mando del Búho.
                            <p
                                className='text-darkblue items-center justify-center text-center sm:text-sm ml-0 mt-5 lg:text-lg lg:ml-5'
                            >
                                Mi viejo, mi norte.
                            </p>

                        </h1>
                        <Image
                            src='/images/100_0637.png'
                            width={900}
                            height={900}
                            alt='Profile'
                        />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About