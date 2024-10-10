import { Card } from '@nextui-org/react'

const ProjectsPage = () => {
    return (
        // <div>hello</div>
        <div className="flex h-full bg-slate-400 justify-center items-center">
            <div className="grid grid-rows-2 h-full">
                <div
                    id="web-projects"
                    className="flex flex-row gap-10 items-center h-full"
                >
                    <Card className="w-60 h-60">card 1</Card>
                    <Card className="w-60 h-60">card 2</Card>
                </div>
                <div
                    id="desktop-wpf-projects"
                    className="flex flex-row gap-10 h-full items-center"
                >
                    <Card className="w-60 h-60"> wpf 1</Card>
                    <Card className="w-60 h-60"> wpf 2</Card>
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
