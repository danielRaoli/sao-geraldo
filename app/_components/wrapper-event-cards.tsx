"use client"

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Card } from "@/components/ui/card"
import Image from "next/image"
import Reveal from "./reveal"

type EventItem = {
  title: string
  description: string
  image: string
}

export default function EventCardsWrapper({ events }: { events: EventItem[] }) {
  return (
    <div id="events-list" role="region" aria-label="Lista de eventos">
      {/* Mobile: Carousel showing one card per view */}
      <div className="md:hidden">
        <Carousel className="w-full" aria-label="Eventos em destaque">
          <CarouselContent role="list" aria-label="Lista de eventos no carrossel">
            {events.map((event, idx) => (
              <CarouselItem
                key={idx}
                className="basis-full"
                role="listitem"
                aria-labelledby={`event-title-${idx}`}
                aria-describedby={`event-desc-${idx}`}
              >
                <Card role="article" className="w-full rounded-[30px] p-0 h-auto group transition-all duration-800">
                  <Image
                    src={event.image}
                    alt={event.title}
                    className="w-full rounded-t-[30px] h-[300px] object-cover"
                    sizes="100vw"
                    height={0}
                    width={0}
                  />
                  <div className="px-8 pb-4">
                    <h2
                      id={`event-title-${idx}`}
                      className="md:text-black text-primary text-xl md:text-2xl font-semibold group-hover:text-primary transition-all duration-300"
                    >
                      {event.title}
                    </h2>
                    <p id={`event-desc-${idx}`} className="text-xs md:text-lg">
                      {event.description}
                    </p>
                    <div className="h-1 w-full md:hidden group-hover:block bg-secondary rounded-full mt-6 transition-all duration-800" />
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious aria-label="Evento anterior" className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
          <CarouselNext aria-label="Próximo evento" className="focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2" />
        </Carousel>
      </div>

      {/* Desktop: Grid with 3 columns, no carousel */}
      <div className="hidden md:grid grid-cols-1 md:grid-cols-2  gap-6" role="list" aria-label="Lista de eventos">
        {events.map((event, idx) => (
          <Reveal>
            <Card
              key={idx}
              role="listitem"
              aria-labelledby={`event-title-${idx}`}
              aria-describedby={`event-desc-${idx}`}
              className="w-full rounded-[30px] p-0 h-auto group transition-all duration-800"
            >
              <Image
                src={event.image}
                alt={event.title}
                className="w-full rounded-t-[30px] h-[300px] object-cover"
                sizes="(min-width: 768px) 33vw, 100vw"
                height={0}
                width={0}
              />
              <div className="px-8 pb-4">
                <h2
                  id={`event-title-${idx}`}
                  className="text-black text-2xl font-semibold group-hover:text-primary transition-all duration-300"
                >
                  {event.title}
                </h2>
                <p id={`event-desc-${idx}`} className="text-lg">
                  {event.description}
                </p>
                <div className="h-1 w-full hidden group-hover:block bg-secondary rounded-full mt-6 transition-all duration-800" />
              </div>
            </Card>
          </Reveal>

        ))}
      </div>
    </div>
  )
}