import React from 'react';
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import { Transition } from '@headlessui/react'
import { Link } from 'gatsby';
import { AnimatePresence, motion, useAnimation } from "framer-motion"
import { useInView } from 'react-intersection-observer';

const PageLayout = ({ children }) => {
    const [menuOpen, setMenuOpen] = React.useState(false);
    const controls = useAnimation();
    const [ref, inView] = useInView();

    React.useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <main

            className=" w-full h-screen flex flex-col bg-web">
            <nav className="h-12 w-full  mb-12 md:mb-0 bg-black bg-opacity-5 shadow-xl px-2 py-2 flex flex-row justify-between">
                <div className="text-gray-200 object-center text-xl cursor-pointer">
                    <Link to="/">
                        <span className="font-extrabold text-green-400">E</span> <span className="font-light">GREEN</span>
                    </Link>
                </div>

                <div className="md:hidden">
                    {!menuOpen && <MenuIcon className="h-5 w-5 text-blue-500 inline-block align-middle" onClick={() => setMenuOpen(!menuOpen)} />}
                    {menuOpen && <XIcon className="h-5 w-5 text-blue-500 inline-block align-middle" onClick={() => setMenuOpen(!menuOpen)} />}
                </div>
                <div className="hidden md:block">
                    <span className="px-2 py-2 border-b-2 border-transparent  transition duration-500 uppercase font-light
                     text-gray-100 hover:text-green-300 hover:border-green-200 hover:font-bold cursor-pointer">
                        <Link to="/about">About us  </Link>
                    </span>
                    <span className="px-2 py-2 border-b-2 border-transparent  transition duration-500 uppercase font-light
                     text-gray-100 hover:text-green-300 hover:border-green-200 hover:font-bold cursor-pointer">
                        <Link to="/contact/">Contact us</Link></span>
                    <span className="px-2 py-2 border-b-2 border-transparent  transition duration-500 uppercase font-light
                     text-gray-100 hover:text-green-300 hover:border-green-200 hover:font-bold cursor-pointer">
                        <Link to="/projects/">Projects  </Link></span>
                    <span className="px-2 py-2 border-b-2 border-transparent  transition duration-500 uppercase font-light
                     text-gray-100 hover:text-green-300 hover:border-green-200 hover:font-bold cursor-pointer">
                        <Link to="/services/">Services  </Link></span>
                </div>
            </nav>
            <Transition
                show={menuOpen}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
            >
                <nav className="h-12 w-full absolute top-12 transition duration-500 bg-white shadow-xl px-2 bg-opacity-5 flex justify-between">
                    <span className="py-3 px-1 uppercase font-light text-sm text-gray-100 hover:text-green-300
                    hover:bg-gray-900 transition-all cursor-pointer"><Link to="/about/">About us  </Link></span>
                    <span className="py-3 px-1 uppercase font-light text-sm text-gray-100 hover:text-green-300
                    hover:bg-gray-900 transition-all cursor-pointer"> <Link to="/contact/">Contact us</Link></span>
                    <span className="py-3 px-1 uppercase font-light text-sm text-gray-100 hover:text-green-300
                    hover:bg-gray-900 transition-all cursor-pointer"> <Link to="/projects/">Projects  </Link></span>
                    <span className="py-3 px-1 uppercase font-light text-sm text-gray-100 hover:text-green-300
                    hover:bg-gray-900 transition-all cursor-pointer"> <Link to="/services/">Services  </Link></span>
                </nav>
            </Transition>
            <AnimatePresence>
                <motion.div
                    ref={ref}
                    animate={controls}
                    initial="hidden"
                    transition={{ duration: 0.3 }}
                    variants={{
                        visible: { opacity: 1, scale: 1 },
                        hidden: { opacity: 0, scale: 0 }
                    }}

                    class="m-auto justify-self-center grid justify-items-stretch">

                    {children}

                </motion.div>
            </AnimatePresence>
        </main>
    );
}

export default PageLayout;