import { motion } from "framer-motion"

export const Welcome = ({component}) => {
    const zoom = {
        hidden: {
            opacity: 0,
            y: '-100%'
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8
            }
        },
    }
    return<motion.div variants = {zoom} initial = 'hidden' animate = 'show'>{component}</motion.div>
}