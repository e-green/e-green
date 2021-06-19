import * as React from "react"
import { MenuIcon, XIcon } from '@heroicons/react/solid'
import EgreenLogo from '../images/EgreenLogo@0.5x.png'
import { Transition } from '@headlessui/react'

// markup
const IndexPage = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);


  return (
    <main class=" w-full h-screen flex flex-col bg-web">
      <nav class="h-12 w-full bg-black bg-opacity-5 shadow-xl px-2 py-2 flex flex-row justify-between">
        <div class="text-gray-200 object-center text-xl">
          <span class="font-extrabold text-green-400">E</span> <span class="font-light">GREEN</span>
        </div>
        <div class="md:hidden">
          {!menuOpen && <MenuIcon className="h-5 w-5 text-blue-500 inline-block align-middle" onClick={() => setMenuOpen(!menuOpen)} />}
          {menuOpen && <XIcon className="h-5 w-5 text-blue-500 inline-block align-middle" onClick={() => setMenuOpen(!menuOpen)} />}
        </div>
        <div class="hidden md:block">
          <span class="px-2 py-2 border-b-2 border-transparent  transition duration-500 uppercase font-extralight text-gray-100 hover:text-green-300 hover:border-green-200 hover:font-bold cursor-pointer">About us</span>
          <span class="px-2 py-2 border-b-2 border-transparent  transition duration-500 uppercase font-extralight text-gray-100 hover:text-green-300 hover:border-green-200 hover:font-bold cursor-pointer">Contact us</span>
          <span class="px-2 py-2 border-b-2 border-transparent  transition duration-500 uppercase font-extralight text-gray-100 hover:text-green-300 hover:border-green-200 hover:font-bold cursor-pointer">Projects</span>
          <span class="px-2 py-2 border-b-2 border-transparent  transition duration-500 uppercase font-extralight text-gray-100 hover:text-green-300 hover:border-green-200 hover:font-bold cursor-pointer">Services</span>
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
        <nav class="h-12 w-full absolute top-12 transition duration-500 bg-white shadow-xl px-2 bg-opacity-5 flex justify-between">
          <span class="py-3 px-1 uppercase font-extralight text-sm text-gray-100 hover:text-green-300 hover:bg-gray-900 transition-all cursor-pointer">About us</span>
          <span class="py-3 px-1 uppercase font-extralight text-sm text-gray-100 hover:text-green-300 hover:bg-gray-900 transition-all cursor-pointer">Contact us</span>
          <span class="py-3 px-1 uppercase font-extralight text-sm text-gray-100 hover:text-green-300 hover:bg-gray-900 transition-all cursor-pointer">Projects</span>
          <span class="py-3 px-1 uppercase font-extralight text-sm text-gray-100 hover:text-green-300 hover:bg-gray-900 transition-all cursor-pointer">Services</span>
        </nav>
      </Transition>

      <div class="w-full mt-auto mb-auto justify-self-center grid justify-items-stretch">

        <div class="justify-self-center mb-auto mt-auto grid justify-items-center">
          <img src={EgreenLogo} alt="Egreen Logo"  />
          <span class="capitalize my-4 text-green-200">Go better with WWW</span>
        </div>
      </div>

    </main>
  )
}

export default IndexPage
