import React  from 'react'
import { Link } from 'react-router-dom'

const MenuToogle = () => {

    const itemDiv = 'grid gap-5 py-3 md:py-6'
    const spanCofig = 'text-xl font-bold sm:text-3xl'
    const linkItem = 'text-lg sm:text-2xl'

  return (
    <>
        <div className="menu-items bg-beige px-14 py-7 z-30 absolute top-0 left-0 pt-16 w-full h-screen sm:w-3/5 lg:w-2/5">
            <div className={`item ${itemDiv} grid-cols-1 md:grid-cols-2`}>
                <Link to="/" className={`${spanCofig} `}>Inicio</Link>
                <div className="linkItems-item gap-2 flex flex-col">
                    <Link to="!#" className={`${linkItem} `}>Sobre Nosotros</Link>
                    <Link to="!#" className={`${linkItem} `}>Conocer más</Link>
                </div>
            </div>
            <div className={`item ${itemDiv} grid-cols-1 md:grid-cols-2`}>
                <Link to="/Productos"className={`${spanCofig} `}>Productos</Link>
                <div className="linkItems-item gap-2 flex flex-col">
                    <Link to="!#" className={`${linkItem} `}>Camiseta</Link>
                    <Link to="!#" className={`${linkItem} `}>Buzos</Link>
                    <Link to="!#" className={`${linkItem} `}>Bolsas Ecológicas</Link>
                    <Link to="!#" className={`${linkItem} `}>Medidas</Link>
                    <Link to="!#" className={`${linkItem} `}>Todos los productos</Link>
                </div>
            </div>
            <div className={`item ${itemDiv} grid-cols-1`}>
                <Link to="!#" className={`${spanCofig} `}>Nuevo</Link>
            </div>
            <div className={`item ${itemDiv} grid-cols-1`}>
                <Link to="!#" className={`${spanCofig} grid-cols-1 `}>Recomendaciones</Link>
            </div>
            <div className={`item ${itemDiv} grid-cols-1`}>
                <a href="https://www.instagram.com/str3et_style/" className={`${spanCofig} `} target='_blank' rel='noreferrer'>Redes sociales</a>
            </div>
        </div>
    </>
  )
}

export default MenuToogle
