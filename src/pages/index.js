import * as React from "react"
import EgreenLogo from '../images/EgreenLogo@0.5x.png'
import PageLayout from "../components/layout"

// markup
const IndexPage = () => {

  return (
    <PageLayout>
      <div class="justify-self-center mb-auto mt-auto grid justify-items-center">
        <img src={EgreenLogo} alt="Egreen Logo" />
        <span class="capitalize my-4 text-green-200">Go better with WWW</span>
      </div>
    </PageLayout>
  )
}

export default IndexPage
