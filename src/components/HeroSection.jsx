
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
    const slides = [
        "/assets/adam-winger-WXmHwPcFamo-unsplash.jpg",
        "/assets/benyamin-bohlouli-_C-S7LqxHPw-unsplash.jpg",
        "/assets/greg-trowman-jsuWg7IXx1k-unsplash.jpg",
        "/assets/guilherme-petri-PtOfbGkU3uI-unsplash.jpg",
        "/assets/lindsay-cash-Md_DhaFsnCQ-unsplash.jpg"
    ];

    return (
        <section id="hero" className="relative w-full h-screen " >
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation
                autoplay={{ delay: 5000 }}
                loop
                className="w-full h-full"
            >
                {slides.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div
                            className="w-full h-screen bg-cover bg-center relative"
                            style={{ backgroundImage: `url(${src})` }}
                        >
                            <div className="absolute inset-0 flex items-center justify-center text-center px-4 z-10 bg-black/40">
                                <div className="z-10 text-white">
                                    <h1 className="text-4xl md:text-6xl font-bold mb-4 hero-title">
                                        Transform Your Look
                                    </h1>
                                    <p className="text-lg md:text-xl mb-8 max-w-xl mx-auto hero-subtitle">
                                        <span className="relative inline-block">
                                            <span className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-pink-500 opacity-60 blur-sm rounded-full animate-pulse"></span>
                                            <span className="relative z-10">Experience the best in hair, skin, and beauty treatments tailored just for you.</span>
                                        </span>
                                    </p>
                                    <a
                                        href="#contact"
                                        className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))/80] px-8 py-3 rounded-full text-lg transition cta-button"
                                    >
                                        Book an Appointment
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce z-20">
                <span className="text-sm text-[hsl(var(--foreground))] mb-2">Scroll</span>
                <ArrowDown className="h-8 w-8 text-[hsl(var(--primary))]" />
            </div>
        </section>
    );
};
