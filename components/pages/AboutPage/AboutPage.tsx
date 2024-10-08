import { Divider } from '@nextui-org/react'
import Image from 'next/image'

const AboutPage = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-3 w-5/7">
                <div className="flex items-center justify-center">
                    <Image
                        src="/portfolio/samuel_seo_headshot.jpg"
                        width="355"
                        height="355"
                        alt="my-headshot"
                    />
                </div>
                <div className="col-span-2 flex">
                    <div className="grid grid-rows-5 m-4">
                        <div className="flex items-center">
                            <h1 className=" text-7xl">Samuel Seo</h1>
                        </div>
                        <div className="row-span-2 flex-col">
                            <p>
                                I am a software engineer primarily focused on
                                application development relating to medical
                                devices (SaMD).
                            </p>
                            <p>
                                Due to the consulting nature of the current
                                company, I was fortunate enough to be exposed to
                                a variety of tech stack, which led me to become
                                very flexible.
                            </p>
                            <p>
                                I have 2+ years of developing
                                Typescript/React.js based Full Stack
                                applications (Python backend) and
                            </p>
                            <p>
                                3+ years of developing Windows desktop
                                applications via .NET Framework/Core,
                                specifically WPF applications, practicing MVVM
                                design pattern with Test Driven Development via
                                CI/CD.
                            </p>
                            <p>
                                I strive to be a quick learner, adapting to
                                emerging technologies, and be techinically
                                sufficient/flexible enough to be put on any
                                project and quickly make meaningful
                                contributions to the development process.
                            </p>
                        </div>

                        <div className="row-span-2 flex-col justify-center">
                            <h1 className="text-lg font-bold">
                                Work Experience
                            </h1>
                            <Divider />
                            <p>Veranex, Inc. Orange, CA:</p>
                            <p className="ml-5">
                                {' '}
                                Senior Software Engineer (April 2023 - Present)
                            </p>
                            <p className="ml-5">
                                {' '}
                                Software Engineer (May 2020 - April 2023)
                            </p>
                            <p className="ml-5">
                                {' '}
                                Software Engineering Intern (May 2019 - April
                                2020)
                            </p>
                            <p className="mt-5 text-lg font-bold">Education</p>
                            <Divider />
                            <p>University of California, Irvine</p>
                            <p className="ml-5">
                                {' '}
                                Computer Engineering, B.S. (Sep 2016 - May 2020)
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutPage
