import * as React from "react"
import PageLayout from "../components/layout";
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'

const ContactPage = () => {
    return (
        <PageLayout>
            <div class="justify-self-center mb-auto mt-auto grid justify-items-center md:w-1/3">

                <div className={"px-4"}>
                    <h1 className={"text-white text-xl mb-3"}>
                        Contact us
                    </h1>

                    <div className="grid grid-cols-12 gap-2 ml-2 text-gray-50">
                        <div className="col-span-1 flex justify-between">
                            <PhoneIcon class="w-4 h-4 self-center  text-gray-100" />
                        </div>
                        <div className="col-span-11">
                            +(94) 767737845
                        </div>

                        <div className="col-span-1 flex justify-between">
                            <MailIcon class="w-4 h-4 self-center text-gray-100" />
                        </div>
                        <div className="col-span-11">
                            info@egreen.io
                        </div>


                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default ContactPage;