import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const slides = [
  {
    id: 1,
    image: "https://i.ibb.co.com/prMSSnqP/pets.jpg",
    title: "Premium Pet Care Products",
    subtitle: "Everything your pet needs, in one place",
  },
  {
    id: 2,
    image: "https://i.ibb.co.com/xSWzyDXj/pets2.jpg",
    title: "Adopt With Confidence",
    subtitle: "Find your next furry friend today",
  },
  {
    id: 3,
    image: "https://i.ibb.co.com/ycDg5hPK/happy-owner.jpg",
    title: "Trusted Pet Community",
    subtitle: "Breeders, shops & pet lovers together",
  },
  {
    id: 4,
    image: "https://i.ibb.co.com/jktQXggt/adoptions.jpg",
    title: "Love. Care. PawMart.",
    subtitle: "Because pets deserve the best",
  },
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative h-[85vh] rounded-md w-full overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="h-full w-full bg-black/50 flex items-center">
              <div className="max-w-6xl mx-auto px-6 text-white">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-xl">
                  {slide.subtitle}
                </p>

                <div className="mt-8 flex gap-4">
                  <Link to='/petsSupplies' className="px-6 py-3 rounded-full bg-primary hover:bg-primary/90 transition font-semibold">
                    Get Started
                  </Link>
                  <Link to='/about' className="px-6 py-3 rounded-full border border-white hover:bg-white hover:text-black transition font-semibold">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full transition ${
              index === current ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Slider;
