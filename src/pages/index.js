import * as React from "react"
import EgreenLogo from '../images/EgreenLogo@0.5x.png'
import PageLayout from "../components/layout"
import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion"

// markup
const IndexPage = () => {
  return (
    <PageLayout>
      <div class="justify-self-center mb-auto mt-auto grid justify-items-center text-gray-100">
        <img src={EgreenLogo} alt="Egreen Logo" />
        <span class="capitalize my-4 text-green-200">Go better with WWW</span>

        <div class="text-gray-100 text-center">
          <h3>We are better at developing, </h3>
          <div class="flex flex-row gap-2">
            <span class="px-2 py-2 rounded-sm font-light border-b-2 border-transparent hover:border-gray-50 text-green-700 hover:text-green-200 hover:font-bold hover:border-t-2 cursor-pointer transition-all duration-200">Enterprise app</span>
            <span class="px-2 py-2 rounded-sm font-light border-b-2 border-transparent hover:border-gray-50 text-green-700 hover:text-green-200 hover:font-bold hover:border-t-2 cursor-pointer transition-all duration-200">Mobile app</span>
            <span class="px-2 py-2 rounded-sm font-light border-b-2 border-transparent hover:border-gray-50 text-green-700 hover:text-green-200 hover:font-bold hover:border-t-2 cursor-pointer transition-all duration-200">Web app</span>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

export default IndexPage
