import * as React from "react"
import PageLayout from "../components/layout";
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'

const ContactPage = () => {
    return (
        <PageLayout>
            <div class="justify-self-center mb-auto mt-auto grid justify-items-center w-1/2">

                <div className={"px-4"}>
                    <h1 className={"text-white text-xl mb-3"}>
                        Contact us
                    </h1>

                    <div class="flex items-center space-x-3 text-gray-100 w-1/5">
                        <div>
                            <PhoneIcon class="w-4 h-4 self-center  text-3xl align-middle  text-gray-100" />
                        </div>
                        <div>
                            +94767-737-845
                        </div>
                    </div>

                    <div class="flex items-center space-x-3 text-gray-100">
                        <div>
                            <MailIcon class="w-4 h-4 self-center  text-3xl align-middle  text-gray-100" />
                        </div>
                        <div>
                            info@egreen.io
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default ContactPage;