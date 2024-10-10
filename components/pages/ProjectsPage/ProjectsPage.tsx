import MyCard from '@/components/organisms/MyCard/MyCard'

const ProjectsPage = () => {
    return (
        <div className="flex bg-black h-full justify-center items-center">
            <div className="grid bg-black grid-rows-2 h-full">
                <div
                    id="web-projects"
                    className="flex flex-row gap-10 items-center h-full"
                >
                    <MyCard
                        header="Site/Patient Management Portal"
                        subheader="ReactJs / NextJs"
                        imageSrc="/ApnimedLogin.jpg"
                        dark={true}
                    />
                    <MyCard
                        header="Fluidics Web App"
                        subheader="ReactJs"
                        imageSrc="/Cassette2.png"
                        dark={true}
                    />
                </div>
                <div
                    id="desktop-wpf-projects"
                    className="flex flex-row gap-10 h-full items-center"
                >
                    <MyCard
                        header="Cable Programmer/Tester"
                        subheader="C# / WPF"
                        imageSrc="/UctConnectionManagement.gif"
                        dark={true}
                    />
                    <MyCard
                        header="Blood Fluidics GUI"
                        subheader="C# / WPF"
                        imageSrc="/CurateDesktopApp.gif"
                    />
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
