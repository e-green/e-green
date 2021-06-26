import * as React from "react"
import PageLayout from "../components/layout";
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'

const ServicesPage = () => {
    return (
        <PageLayout>
            <div class="justify-self-center mb-auto mt-auto grid justify-items-center md:w-9/12">
                <div className={"px-4"}>
                    <h1 className={"text-white text-xl mb-3"}>
                        Services
                    </h1>
                    <div class="text-gray-100 ml-4 grid grid-cols-2 gap-8 text-justify">
                        <div>
                            <h4 class="text-xl">Application Development</h4>
                            <p class="mt-2 font-light">
                                Our core business is developing custom and fully interactive software applications. We will develop your company's branding identity and integrate a custom design around it.
                            </p>
                        </div>

                        <div>
                            <h4 class="text-xl">IT consultant</h4>
                            <p class="mt-2 font-light">We are an expert team with considerable experience
                                of business and technical operations in this field. From requirement
                                gathering to IT infrastructure strategy, we provide a full range of
                                consultancy services and support to help take the hassle out of your IT projects.</p>
                        </div>

                        <div>
                            <h4 class="text-xl">UI/UX Design</h4>
                            <p class="mt-2 font-light">E-green is a comprehensive UI/UX service that caters
                                for any creative project in its entirety, taking ideas from concept through to final production.
                                No matter what stage your business is at, we can help you to develop and
                                evolve your corporate design, ensuring your business reaches its maximum potential.</p>
                        </div>


                        <div>
                            <h4 class="text-xl">Game Development</h4>
                            <p class="mt-2 font-light">We also developed game application for the commercial use and.</p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default ServicesPage;