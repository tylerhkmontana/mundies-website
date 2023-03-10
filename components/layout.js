import { motion } from "framer-motion";
import Nav from './nav'
import Head from 'next/head'


export default function Layout({ children, page}) {
    const variants = {
        hidden: { opacity: 0 },
        enter: { opacity: 1 },
        exit: { opacity: 0 },
    }
    return (
        <>
            <Head>
                <title>{page}</title>
            </Head>
            <div className="container px-24 py-8 mx-auto flex gap-16">
                <Nav page={page}/>
                <br/>
                <br/>
                <br/>
                <br/>
                <motion.main
                    variants={variants} // Pass the variant object into Framer Motion 
                    initial="hidden" // Set the initial state to variants.hidden
                    animate="enter" // Animated state to variants.enter
                    exit="exit" // Exit state (used later) to variants.exit
                    transition={{ type: 'linear' }} // Set the transition to linear
                    className="w-full pt-20"
                >
                    { children }
                </motion.main>
            </div>
        </>
    )
}