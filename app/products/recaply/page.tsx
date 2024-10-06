"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import Screenshot1 from "./recaply1.png"
import Screenshot2 from "./recaply2.png"
import Screenshot3 from "./recaply3.png"
import Screenshot4 from "./recaply4.png"
import Screenshot5 from "./recaply5.png"
import Screenshot6 from "./recaply6.png"
import Screenshot7 from "./recaply7.png"
import Screenshot8 from "./recaply8.png"

const screenshots = [
  Screenshot1,
  Screenshot2,
  Screenshot3,
  Screenshot4,
  Screenshot5,
  Screenshot6,
  Screenshot7,
  Screenshot8,
]

export default function Recaply() {
    return (
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-4xl font-bold">Recaply</h1>

        <a className="font-semibold text-blue-500"
          href="https://apps.apple.com/app/recaply/id6670152676">
          DOWNLOAD
        </a>

        <p className="w-1/2">Stay Informed your way with Your Personalized Newsletter! Do you have specific topics you are passionate about? Our app Recaply is here to keep you updated with the latest news and trends on the subjects that matter most to you! Simply create topics that interest you, and we’ll do the rest.</p>

        <Carousel
          className="w-full max-w-screen-md"
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 8 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Image
                    src={screenshots[index]}
                    alt="App Screenshot"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    );
}
  