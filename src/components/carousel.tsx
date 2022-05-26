import React, { useCallback, useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import Card from "./Card"

const DotButton = ({ selected, onClick }: any) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
)

const data = [
  {
    src: "shongololoGameImage",
    title: "Shongololo",
    path: "/game/shongololo?id=1",
  },
  { src: "universalImage", title: "Universal Music", path: "/channel/umg" },
  { src: "spinCard", title: "Spin & Win", path: "/spin-win" },
]

const Carousel = ({ content }: any) => {
  const [viewportRef, embla] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<any[]>([])

  const scrollTo = useCallback(index => embla && embla.scrollTo(index), [embla])

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <div className="mb-4">
      <div id="carousel">
        {data.length > 0 && (
          <div className="embla" ref={viewportRef}>
            <div className="embla__container">
              {data.map(slideData => (
                <div className="embla__slide" key={slideData.title}>
                  <Card
                    title={slideData.title}
                    image={slideData.src}
                    link={slideData.path}
                  />
                </div>
              ))}
            </div>
            <div className="embla__dots">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  selected={index === selectedIndex}
                  onClick={() => scrollTo(index)}
                />
              ))}
            </div>
          </div>
        )}
      </div>
      <h2 className="font-bold text-xl">Entertainment</h2>
      <p className="text-gray-900 text-sm">
        News, Gaming, Education, Resources and More
      </p>
    </div>
  )
}

export default Carousel
