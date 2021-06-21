import * as React from "react"
import PageLayout from "../components/layout";
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'

const ServicesPage = () => {
    return (
        <PageLayout>
            <div class="justify-self-center mb-auto mt-auto grid justify-items-center md:w-1/3">
                <div className={"px-4"}>
                    <h1 className={"text-white text-xl mb-3"}>
                        Services
                    </h1>
                </div>
            </div>
        </PageLayout>
    );
}

export default ServicesPage;