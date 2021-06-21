import * as React from "react"
import PageLayout from "../components/layout";
import { PhoneIcon, MailIcon } from '@heroicons/react/solid'

const ProjectsPage = () => {
    return (
        <PageLayout>
            <div class="justify-self-center mb-auto mt-auto grid justify-items-center md:w-1/3">
                <div className={"px-4"}>
                    <h1 className={"text-white text-xl mb-3"}>
                        Projects
                    </h1>
                    <div class="text-gray-100 ml-4 grid grid-cols-2 gap-8 text-justify">
                        <div>
                            <h4 class="text-xl">Open micro</h4>
                            <p class="mt-2 font-light">
                                A software solution for manage micro finance bussines. 
                                It`s provide broad access to the bussiness without worring keep records on paper
                            </p>
                        </div>

                        <div>
                            <h4 class="text-xl">ලිස්සන ගහ Android game</h4>
                            <p class="mt-2 font-light"></p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default ProjectsPage;