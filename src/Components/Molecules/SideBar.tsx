import { useContext } from 'react';
import { SlideContext } from "@/Providers/SlideProvider";
import { motion } from 'framer-motion'


function SideBar() {

    const { messagesArray, viewSidebar, setViewSidebar } = useContext(SlideContext)

    return (
        <motion.div
            initial={false} // Evita que la animación se ejecute en el montaje inicial si el elemento ya está visible
            animate={{
                width: viewSidebar ? '350px' : 0
            }} // Anima al 100% del ancho si isVisible es true, de lo contrario a 0
            transition={{ duration: 0.2 }} // Duración de la transición en segundos
            style={{
                overflow: 'hidden', // Para asegurar que el contenido no desborde durante la animación
            }}
            className={`h-[100vh] bg-gray-300 `}>
            <ul>
                {/* {messagesArray.map((message, index) => (
              <li key={index}>{message}</li>
            ))} */}
                <li className='flex'>
                    Hola
                </li>
            </ul>
        </motion.div>
    );
}

export default SideBar