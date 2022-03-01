import * as React from "react";
import PageLayout from "../components/layout";

const ProjectsPage = () => {
    return (
        <PageLayout>
            <div className="justify-self-center mb-auto mt-auto grid justify-items-center md:w-2/3">
                <div className={"px-4"}>
                    <h1 className={"text-white text-xl mb-3"}>
                        Career
                    </h1>
                    <div className="text-gray-100 ml-4 grid grid-cols-1 gap-8 text-justify">
                        <div>
                            <h4 className="text-xl font-bold">Software Engineer SSE\SE\ASE</h4>
                            <p className="mt-2 font-light pl-4 text-justify">
                                <div className="font-semibold mb-1 text-white">
                                    ROLE
                                </div>
                                <div className="p-2">
                                    The ideal candidate will be responsible for developing high-quality applications,
                                    designing and implementing testable and scalable code. Make improvements
                                    for system quality by identifying
                                    issues and common patterns, and developing standard operating procedures.
                                </div>

                                <div className="font-semibold mt-2 mb-1 text-white">
                                    RESPONSIBILITIES
                                </div>

                                <ul className="p-6 pt-0 pb-4 list-disc">
                                    <li>Ability to suggest and set up development/deployment environments.</li>
                                    <li>Good understanding of database design and system architecture.</li>
                                    <li>Ability to work independently with minimum supervision.</li>
                                    <li>Ability to work within deadlines individually and as a team.</li>
                                    <li>Good communication skills and ability to express clearly.</li>
                                    <li>Ability to learn new technologies quickly.</li>
                                    <li>Innovative and forward-thinking.</li>
                                    <li>Ability to solve problems effectively and logically.</li>
                                </ul>

                                <div className="font-semibold mt-2 mb-1 text-white">
                                    REQUIREMENTS
                                </div>

                                <ul className="p-6 pt-0 pb-4 list-disc">
                                    <li>A relevant degree/diploma in computer science.</li>
                                    <li>Minimum 2-5 years of software engineering (PHP) experience.</li>
                                    <li>Knowledge on OOA & OOD.</li>
                                    <li>Highly proficient in PHP, Javascript, CSS, and HTML.</li>
                                    <li>Experience in Laravel 5 or above is a must with unit test implementation.</li>
                                    <li>Experience in developing and implementing REST APIs.</li>
                                    <li>Experience in database technologies such as MySQL, PostgreSQL and MSSQL.</li>
                                    <li>Experience in Angular</li>
                                    <li>Experience in HTML5, jQuery.</li>
                                    <li>Experience in working directly with overseas clients and project teams.</li>
                                    <li>Experience in both Windows and Linux environments.</li>
                                    <li>Good understanding of continuous integration tools and best practices</li>

                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
}

export default ProjectsPage;