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
import Screenshot1 from "./tm1.png"
import Screenshot2 from "./tm2.png"
import Screenshot3 from "./tm3.png"
import Screenshot4 from "./tm4.png"
import Screenshot5 from "./tm5.png"
import Screenshot6 from "./tm6.png"
import Screenshot7 from "./tm7.png"

const screenshots = [
  Screenshot1,
  Screenshot2,
  Screenshot3,
  Screenshot4,
  Screenshot5,
  Screenshot6,
  Screenshot7,
]

export default function TextMaster() {
    return (
      <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
        <h1 className="text-4xl font-bold">TextMaster AI Keyboard</h1>

        <a className="font-semibold text-blue-500"
          href="https://apps.apple.com/app/textmaster-ai-keyboard/id6468854330">
          DOWNLOAD
        </a>

        <p className="w-1/2">TextMaster AI Keyboard is your personal conversation assistant that helps you write your message precisely with the right tone. Powered by advanced AI, this keyboard extension app works seamlessly whenever you are typing on your phone. If you sometimes struggle to find the right words to express yourself, TextMaster AI Keyboard is the must-have tool in your pocket. With TextMaster, you have the freedom to personalize the keyboard according to your need.</p>

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
            {Array.from({ length: 7 }).map((_, index) => (
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
  