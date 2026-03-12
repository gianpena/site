'use client';
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, Mousewheel, FreeMode } from 'swiper/modules';
import usePeriods from '../periods';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

export default function PictureSlideshow() {
    const [pictures, setPictures] = useState<string[] | null>(null);
    const periods = usePeriods();

    useEffect(() => {
        async function fetchPictures() {
            const pictures = await fetch('https://api.gianpena.xyz/pictures');
            const picturesText = await pictures.text();
            const parser = new DOMParser();
            const doc = parser.parseFromString(picturesText, 'text/html');
            const images = Array.from(doc.images);
            const URLs: string[] = [];
            images.forEach(image => {
                const srcset = image.getAttribute('srcset');
                if(!srcset) return;
                const URL = srcset.split(' ').at(-2);
                if(URL) URLs.push(URL);
            });

            setPictures(URLs);
            console.log(URLs);
        }

        console.log('Retrieving pictures...');
        fetchPictures().then(() => { console.log('Pictures retrieved'); }).catch(error => console.log(error));

    }, []);

    if(!pictures)
        return <p><i>Loading pictures{'.'.repeat(periods)}</i></p>;

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
                        <img src={picture} alt={`Picture ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
