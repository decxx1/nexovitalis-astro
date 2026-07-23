import { EffectFade, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';

const slides = [
  {
    bg: '/hero.webp',
    lines: [
      'Soluciones médicas',
      'integrales para el hogar',
      'las empresas',
      'y las ART.',
    ],
  },
  {
    bg: '/hero1.webp',
    lines: [
      'Innovando en sistemas de salud',
    ],
  },
];

export default function HeroCarousel() {
  return (
    <section className="relative mt-20 min-h-125 max-h-250 h-[calc(100vh-150px)] md:h-[calc(100vh-80px)]">
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        allowTouchMove={false}
        className="h-full w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.bg} className="h-full w-full">
            <div
              className="relative flex h-full w-full flex-col justify-between bg-cover bg-[position:54%_100%] px-7.5 py-10 md:px-15 md:py-15"
              style={{ backgroundImage: `url(${slide.bg})` }}
            >
              <img
                src="/dna.webp"
                alt=""
                width={200}
                className="absolute -bottom-32.5 right-17.5 hidden w-50 opacity-70 md:block"
              />
              <h1 className="text-hero flex flex-col text-center md:text-left">
                {slide.lines.map((line) => (
                  <span key={line}>{line}</span>
                ))}
              </h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
