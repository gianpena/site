'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

export default function Slideshow({ pictures }: {pictures: string[]}) {

    return (
        <div style={{ overscrollBehavior: 'none' }}>
            <Swiper
                modules={[Scrollbar, Mousewheel, FreeMode]}
                spaceBetween={10}
                slidesPerView={3}
                scrollbar={{ draggable: true }}
                mousewheel={{ forceToAxis: false, releaseOnEdges: false }}
                freeMode={true}
                grabCursor={true}
            >
                {pictures.map((picture, index) => (
                    <SwiperSlide key={index}>
                        <a href={picture}>
                            <img src={picture} alt={`Picture ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                        </a>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
