import * as React from "react"
import PageLayout from "../components/layout";
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'

const ContactPage = () => {
    return (
        <PageLayout>
            <div class="justify-self-center mb-auto mt-auto grid justify-items-center w-1/2">

                <div className={"px-4"}>
                    <h1 className={"text-white text-xl mb-6"}>
                        Contact us
                    </h1>

                    <div class="flex items-center space-x-3 text-gray-100 w-1/5">
                        <div>
                            <PhoneIcon class="w-4 h-4 self-center  text-3xl align-middle  text-gray-100" />
                        </div>
                        <div className="leading-6 h-6">
                            <a href="tel:+94767737845"> +94767737845</a>
                        </div>
                    </div>

                    <div class="flex items-center mt-2 space-x-3 text-gray-100">
                        <div>
                            <MailIcon class="w-4 h-4 self-center  text-3xl align-middle  text-gray-100" />
                        </div>
                        <div>
                            <a href="mailto:info@egreen.io"> info@egreen.io </a>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default ContactPage;