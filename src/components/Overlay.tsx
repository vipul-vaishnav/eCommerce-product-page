import React, { FC, ReactElement } from 'react'
import { IOverlay } from './interfaces/IOverlay'
import { motion } from 'framer-motion';

const Overlay: FC<IOverlay> = (props): ReactElement => {
    const { setShowSidebar, setShowCart, showSidebar, showCart } = props

    const handleOverlayClick = () => {
        if (showSidebar) {
            setShowSidebar(false)
        } else if (showCart) {
            setShowCart(false)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, }}
            animate={{ opacity: 1, }}
            transition={{ duration: 0.5 }}
            onClick={handleOverlayClick}
            className="bg-gray-900 bg-opacity-30 w-full h-full fixed top-0 left-0 z-10"></motion.div>
    )
}

export default Overlay