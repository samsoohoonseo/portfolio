import { Card, CardHeader, Image } from '@nextui-org/react'
import { MyCardProps } from './types'

const MyCard = (props: MyCardProps) => {
    return (
        <Card className="h-[300px] w-[600px]" radius="sm">
            <CardHeader className="absolute z-10 top-1 flex-col !items-start">
                <p
                    className={
                        props.dark
                            ? 'pl-2 text-black/60 uppercase font-bold'
                            : 'pl-2 text-white/80 uppercase font-bold'
                    }
                >
                    {props.subheader}
                </p>
                <h4
                    className={
                        props.dark
                            ? 'pl-2 text-black font-bold text-large'
                            : 'pl-2 text-white font-bold text-large'
                    }
                >
                    {props.header}
                </h4>
            </CardHeader>
            <Image
                removeWrapper
                alt="Card background"
                className="z-0 w-full h-full object-cover"
                src={props.imageSrc}
                isZoomed
            />
        </Card>
    )
}

export default MyCard
