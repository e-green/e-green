import * as React from "react"
import PageLayout from "../components/layout";

const AboutUsPage = () => {
    return (
        <PageLayout>
            <div className="justify-self-center mb-auto mt-auto grid justify-items-center md:w-3/5 lg:1/3">
                <div className={"px-4"}>
                    <h1 className={"text-white text-xl mb-3"}>Who
                        <span className={"font-bold"}> we are </span>
                    </h1>
                    <p className={"text-gray-200 text-justify font-medium"}>
                        In 2014 founder and CEO Dewmal start E-Green Software Company to set out to revolutionize enterprise IT.
                        Today E-Green is the company that provides a comprehensive, open source ecosystem platform for the
                        connected business.
                        We are created creative, valuable software to global world for their business.

                        E-Green strives to offer the best solution for your business and impartial advice at an honest price.
                        We are constantly investigating new technologies and recommend them when they make sense.

                        Whether it's website or graphic design, system development or custom programming we
                        like to keep everything under
                        one roof to make it easier for our customers.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
}

export default AboutUsPage;