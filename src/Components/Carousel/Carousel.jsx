import React from "react";
import Card from '@Compnents/Card/Card  ';

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

export default function CarouselComponent({ details }) {
    return (
        <Carousel className="w-full">
            <CarouselContent>
                {details.map((detail, i) => (
                    <CarouselItem
                        key={i}
                        className="pl-1 md:basis-1/2 lg:basis-1/5"
                    >
                        <div className="p-2">
                            <Card detail={detail} />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
